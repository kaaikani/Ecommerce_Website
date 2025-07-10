'use client';
import { type FormEvent, useState, useEffect } from 'react';
import {
  Form,
  useLoaderData,
  useOutletContext,
  useFetcher,
} from '@remix-run/react';
import type { OutletContext } from '~/types';
import {
  type DataFunctionArgs,
  json,
  redirect,
} from '@remix-run/server-runtime';
import {
  getAvailableCountries,
  getEligibleShippingMethods,
  getEligiblePaymentMethods,
  createStripePaymentIntent,
  generateBraintreeClientToken,
  getNextOrderStates,
  transitionOrderToState,
  addPaymentToOrder,
} from '~/providers/checkout/checkout';
import {
  getCouponCodeList,
  applyCouponCode,
  removeCouponCode,
  addCouponProductToCart,
  removeCouponProductFromCart,
} from '~/providers/orders/order';
import { shippingFormDataIsValid } from '~/utils/validation';
import { getSessionStorage } from '~/sessions';
import { getActiveCustomerAddresses } from '~/providers/customer/customer';
import { AddressForm } from '~/components/account/AddressForm';
import { ShippingMethodSelector } from '~/components/checkout/ShippingMethodSelector';
import { ShippingAddressSelector } from '~/components/checkout/ShippingAddressSelector';
import { getActiveOrder } from '~/providers/orders/order';
import { useTranslation } from 'react-i18next';
import { ErrorCode, type ErrorResult } from '~/generated/graphql';
import { CartContents } from '~/components/cart/CartContents';
import { CartTotals } from '~/components/cart/CartTotals';
import { Link } from '@remix-run/react';
import { RazorpayPayments } from '~/components/checkout/razorpay/RazorpayPayments';
import { OrderInstructions } from '~/components/checkout/OrderInstructions';
import { otherInstructions } from '~/providers/customPlugins/customPlugin';
import { Header } from '~/components/header/Header';
import { getCollections } from '~/providers/collections/collections';
import Footer from '~/components/footer/Footer';
import { CouponModal } from '~/components/couponcode/CouponModal';

// Add this interface after the imports
interface CouponFetcherData {
  success?: boolean;
  message?: string;
  error?: string;
  orderTotal?: number;
  appliedCoupon?: string | null;
}

export async function loader({ request }: DataFunctionArgs) {
  const session = await getSessionStorage().then((sessionStorage) =>
    sessionStorage.getSession(request?.headers.get('Cookie')),
  );
  const activeOrder = await getActiveOrder({ request });
  const collections = await getCollections(request, { take: 20 });
  const couponCodes = await getCouponCodeList({ request }); // Fetch coupons

  // Check if there is an active order; if not, redirect to homepage
  if (
    !session ||
    !activeOrder ||
    !activeOrder.active ||
    activeOrder.lines.length === 0
  ) {
    return redirect('/');
  }

  const { availableCountries } = await getAvailableCountries({ request });
  const { eligibleShippingMethods } = await getEligibleShippingMethods({
    request,
  });
  const { activeCustomer } = await getActiveCustomerAddresses({ request });
  const { eligiblePaymentMethods } = await getEligiblePaymentMethods({
    request,
  });

  const error = session.get('activeOrderError');

  let stripePaymentIntent: string | undefined;
  let stripePublishableKey: string | undefined;
  let stripeError: string | undefined;

  if (eligiblePaymentMethods.find((method) => method.code.includes('stripe'))) {
    try {
      const stripePaymentIntentResult = await createStripePaymentIntent({
        request,
      });
      stripePaymentIntent =
        stripePaymentIntentResult.createStripePaymentIntent ?? undefined;
      stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    } catch (e: any) {
      stripeError = e.message;
    }
  }

  let brainTreeKey: string | undefined;
  let brainTreeError: string | undefined;

  if (
    eligiblePaymentMethods.find((method) => method.code.includes('braintree'))
  ) {
    try {
      const generateBrainTreeTokenResult = await generateBraintreeClientToken({
        request,
      });
      brainTreeKey =
        generateBrainTreeTokenResult.generateBraintreeClientToken ?? '';
    } catch (e: any) {
      brainTreeError = e.message;
    }
  }

  const orderInstructions = activeOrder?.customFields?.otherInstructions || '';

  return json({
    availableCountries,
    eligibleShippingMethods,
    activeCustomer,
    error,
    activeOrder,
    collections,
    eligiblePaymentMethods,
    stripePaymentIntent,
    stripePublishableKey,
    stripeError,
    brainTreeKey,
    brainTreeError,
    orderInstructions,
    couponCodes, // Include coupons in the loader data
  });
}

export async function action({ request }: DataFunctionArgs) {
  const body = await request.formData();
  const action = body.get('action');

  // Get active order to include amount in metadata
  const activeOrder = await getActiveOrder({ request });

  if (action === 'setOrderCustomer' || action === 'setCheckoutShipping') {
    // Handle customer and shipping data
    return json({ success: true });
  }

  if (action === 'updateOrderInstructions') {
    const orderId = body.get('orderId');
    const instructions = body.get('instructions');

    if (typeof orderId === 'string' && typeof instructions === 'string') {
      try {
        await otherInstructions(orderId, instructions, { request });
        return json({ success: true });
      } catch (error) {
        return json({ success: false, error: 'Failed to save instructions' });
      }
    }
    return json({ success: false, error: 'Invalid data' });
  }

  if (action === 'applyCoupon') {
    const couponCode = body.get('couponCode') as string;

    if (!couponCode) {
      return json(
        { success: false, error: 'Coupon code is required.' },
        { status: 400 },
      );
    }

    const couponCodes = await getCouponCodeList({ request });
    const coupon = couponCodes.find((c: any) => c.couponCode === couponCode);

    if (!coupon || !coupon.couponCode) {
      console.error(`Invalid coupon code: ${couponCode}`);
      return json(
        { success: false, error: 'Invalid coupon code.' },
        { status: 400 },
      );
    }

    // Check if another coupon is already applied
    if (activeOrder?.couponCodes && activeOrder.couponCodes.length > 0) {
      console.error(
        `Another coupon already applied: ${activeOrder.couponCodes}`,
      );
      return json(
        {
          success: false,
          error:
            'Another coupon is already applied. Please remove it before applying a new one.',
        },
        { status: 400 },
      );
    }

    // Check for minimum order amount condition
    const minAmountCondition = coupon.conditions.find(
      (c: any) =>
        c.code === 'minimum_order_amount' ||
        c.code === 'minimumOrderAmount' ||
        c.code === 'minimumAmount',
    );

    if (minAmountCondition) {
      const amountArg =
        minAmountCondition.args.find((a: any) => a.name === 'amount') ??
        minAmountCondition.args[0];
      const minAmountPaise = Number.parseInt(amountArg.value, 10) || 0;
      const totalWithTaxPaise = activeOrder?.totalWithTax ?? 0;

      if (totalWithTaxPaise < minAmountPaise) {
        const diffPaise = minAmountPaise - totalWithTaxPaise;
        const diffRupees = (diffPaise / 100).toFixed(2);
        console.error(
          `Order total too low: ${totalWithTaxPaise} < ${minAmountPaise}`,
        );
        return json(
          {
            success: false,
            error: `Add ₹${diffRupees} more to apply this coupon. Current total: ₹${(
              totalWithTaxPaise / 100
            ).toFixed(2)}.`,
          },
          { status: 400 },
        );
      }
    }

    // Check for productVariantIds condition
    let hasProductVariant = false;
    const productVariantIds: string[] = [];

    for (const condition of coupon.conditions) {
      const variantArg = condition.args.find(
        (arg: any) => arg.name === 'productVariantIds',
      );
      if (variantArg && variantArg.value) {
        hasProductVariant = true;
        try {
          let parsedIds: string[] | string = variantArg.value;
          if (variantArg.value.startsWith('[')) {
            parsedIds = JSON.parse(variantArg.value);
          } else {
            parsedIds = [variantArg.value];
          }
          if (Array.isArray(parsedIds)) {
            productVariantIds.push(...parsedIds.map((id) => id.toString()));
          } else if (typeof parsedIds === 'string') {
            productVariantIds.push(parsedIds);
          }
        } catch (e) {
          console.error(
            'Failed to parse productVariantIds:',
            variantArg.value,
            e,
          );
          return json(
            {
              success: false,
              error: `Invalid productVariantIds format for coupon ${couponCode}`,
            },
            { status: 400 },
          );
        }
        break;
      }
    }

    console.log(`Applying coupon: ${couponCode}`);
    const couponResult = await applyCouponCode(couponCode, { request });
    console.log('applyCouponCode result:', couponResult);

    if (couponResult?.__typename !== 'Order') {
      if (couponResult.__typename === 'CouponCodeExpiredError') {
        const message = (couponResult as any).message ?? 'Coupon has expired.';
        console.error(message);
        return json({ success: false, error: message }, { status: 400 });
      } else if (couponResult.__typename === 'CouponCodeInvalidError') {
        const message =
          (couponResult as any).message ?? 'Coupon code is invalid.';
        console.error(message);
        return json({ success: false, error: message }, { status: 400 });
      } else if (couponResult.__typename === 'CouponCodeLimitError') {
        const message =
          (couponResult as any).message ?? 'Coupon usage limit reached.';
        console.error(message);
        return json({ success: false, error: message }, { status: 400 });
      }
      console.error('Unexpected response from applyCouponCode');
      return json(
        { success: false, error: 'Unexpected response from server.' },
        { status: 500 },
      );
    }

    const order = couponResult as any;
    const cartItems = activeOrder?.lines ?? [];
    console.log('Current cart items:', cartItems);

    // Add products to cart if the coupon has productVariantIds
    if (hasProductVariant && productVariantIds.length > 0) {
      console.log(`Calling addCouponProductToCart for ${couponCode}`);
      try {
        const addResult = await addCouponProductToCart(couponCode, { request });
        console.log('addCouponProductToCart result:', addResult);
      } catch (error) {
        // If product addition fails, remove the coupon to maintain consistency
        console.error('Failed to add products, removing coupon:', couponCode);
        await removeCouponCode(couponCode, { request });
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error';
        console.error(`Failed to add products to cart: ${errorMessage}`);
        return json(
          {
            success: false,
            error: `Failed to add products to cart: ${errorMessage}`,
          },
          { status: 400 },
        );
      }
    } else {
      console.log(
        `No productVariantIds for coupon ${couponCode}, skipping product addition`,
      );
    }

    return json({
      success: true,
      message: hasProductVariant
        ? `Coupon "${couponCode}" applied and ${
            productVariantIds.length
          } product${
            productVariantIds.length > 1 ? 's' : ''
          } added to your order!`
        : `Coupon "${couponCode}" applied to your order!`,
      orderTotal: order.totalWithTax,
      appliedCoupon: couponCode,
    });
  }

  if (action === 'removeCoupon') {
    const couponCode = body.get('couponCode') as string;

    if (!couponCode) {
      return json(
        { success: false, error: 'Coupon code is required.' },
        { status: 400 },
      );
    }

    const couponCodes = await getCouponCodeList({ request });
    const coupon = couponCodes.find((c: any) => c.couponCode === couponCode);

    if (!coupon || !coupon.couponCode) {
      console.error(`Invalid coupon code for removal: ${couponCode}`);
      return json(
        { success: false, error: 'Invalid coupon code.' },
        { status: 400 },
      );
    }

    if (!activeOrder?.couponCodes?.includes(couponCode)) {
      console.error(`Coupon ${couponCode} not applied to order`);
      return json(
        { success: false, error: 'Coupon code is not applied to the order.' },
        { status: 400 },
      );
    }

    // Check for productVariantIds condition
    let hasProductVariant = false;
    const productVariantIds: string[] = [];

    for (const condition of coupon.conditions) {
      const variantArg = condition.args.find(
        (arg: any) => arg.name === 'productVariantIds',
      );
      if (variantArg && variantArg.value) {
        hasProductVariant = true;
        try {
          let parsedIds: string[] | string = variantArg.value;
          if (variantArg.value.startsWith('[')) {
            parsedIds = JSON.parse(variantArg.value);
          } else {
            parsedIds = [variantArg.value];
          }
          if (Array.isArray(parsedIds)) {
            productVariantIds.push(...parsedIds.map((id) => id.toString()));
          } else if (typeof parsedIds === 'string') {
            productVariantIds.push(parsedIds);
          }
        } catch (e) {
          console.error(
            'Failed to parse productVariantIds:',
            variantArg.value,
            e,
          );
          return json(
            {
              success: false,
              error: `Invalid productVariantIds format for coupon ${couponCode}`,
            },
            { status: 400 },
          );
        }
        break;
      }
    }

    // Adjust quantities of associated product variants, if applicable
    if (hasProductVariant) {
      console.log(`Adjusting coupon product quantities for: ${couponCode}`);
      try {
        await removeCouponProductFromCart(couponCode, { request });
        console.log('Coupon product quantities adjusted successfully');
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error';
        console.error(
          `Failed to adjust product quantities in cart: ${errorMessage}`,
        );
        // Proceed with coupon removal even if adjustment fails
      }
    } else {
      console.log(
        `No productVariantIds for coupon ${couponCode}, skipping product quantity adjustment`,
      );
    }

    // Remove the coupon code
    console.log(`Removing coupon: ${couponCode}`);
    const result = await removeCouponCode(couponCode, { request });
    console.log('removeCouponCode result:', result);

    if (result?.__typename === 'Order') {
      const order = result as any;
      return json({
        success: true,
        message: hasProductVariant
          ? `Coupon removed and ${productVariantIds.length} product${
              productVariantIds.length > 1 ? 's' : ''
            } quantity adjusted in your order.`
          : 'Coupon removed from your order.',
        orderTotal: order.totalWithTax,
        appliedCoupon: null,
      });
    } else {
      console.error('Failed to remove coupon');
      return json(
        { success: false, error: 'Failed to remove coupon.' },
        { status: 400 },
      );
    }
  }

  const paymentMethodCode = body.get('paymentMethodCode');
  const paymentNonce = body.get('paymentNonce');

  if (typeof paymentMethodCode === 'string') {
    const { nextOrderStates } = await getNextOrderStates({
      request,
    });

    if (nextOrderStates.includes('ArrangingPayment')) {
      const transitionResult = await transitionOrderToState(
        'ArrangingPayment',
        { request },
      );
      if (transitionResult.transitionOrderToState?.__typename !== 'Order') {
        throw new Response('Not Found', {
          status: 400,
          statusText: transitionResult.transitionOrderToState?.message,
        });
      }
    }

    // Create metadata object based on payment method
    let metadata = {};
    if (paymentMethodCode === 'online' && paymentNonce) {
      try {
        // For Razorpay payments, parse the JSON metadata
        const paymentData = JSON.parse(paymentNonce as string);
        metadata = {
          method: 'online',
          amount: (Number(paymentData.amount) / 100).toFixed(2) || 0,
          currencyCode: paymentData.currencyCode || 'INR',
          razorpay_payment_id: paymentData.razorpay_payment_id,
          razorpay_order_id: paymentData.razorpay_order_id,
          razorpay_signature: paymentData.razorpay_signature,
          orderCode: paymentData.orderCode,
        };
      } catch (e) {
        console.error('Error parsing payment nonce:', e);
        metadata = { nonce: paymentNonce };
      }
    } else if (paymentMethodCode === 'offline') {
      // For offline payments, include basic metadata with amount
      metadata = {
        method: 'offline',
        amount: Number(((activeOrder?.totalWithTax || 0) / 100).toFixed(2)),
        currencyCode: activeOrder?.currencyCode || 'INR',
      };
    }

    console.log('Adding payment to order with:', {
      method: paymentMethodCode,
      metadata,
    });

    const result = await addPaymentToOrder(
      { method: paymentMethodCode, metadata },
      { request },
    );

    if (result.addPaymentToOrder.__typename === 'Order') {
      return redirect(
        `/checkout/confirmation/${result.addPaymentToOrder.code}`,
      );
    } else {
      throw new Response('Not Found', {
        status: 400,
        statusText: result.addPaymentToOrder?.message,
      });
    }
  }

  return json({ success: false });
}

export default function CheckoutPage() {
  const {
    collections,
    availableCountries,
    eligibleShippingMethods,
    activeCustomer,
    error,
    activeOrder,
    eligiblePaymentMethods,
    orderInstructions,
    couponCodes, // Add couponCodes to destructured loader data
  } = useLoaderData<typeof loader>();

  const { activeOrderFetcher, removeItem, adjustOrderLine } =
    useOutletContext<OutletContext>();
  const [customerFormChanged, setCustomerFormChanged] = useState(false);
  const [addressFormChanged, setAddressFormChanged] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [paymentMode, setPaymentMode] = useState<'online' | 'offline' | null>(
    null,
  );
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);

  // Move the showAll state to the main component level
  const [showAllCartItems, setShowAllCartItems] = useState(false);

  // Add this new state after the existing useState declarations
  const [shouldRefreshAfterCouponRemoval, setShouldRefreshAfterCouponRemoval] =
    useState(false);

  // Replace this line:
  // const couponFetcher = useFetcher()
  // With this:
  const couponFetcher = useFetcher<CouponFetcherData>();

  const { t } = useTranslation();

  const { customer, shippingAddress } = activeOrder ?? {};
  const isSignedIn = !!activeCustomer?.id;
  const addresses = activeCustomer?.addresses ?? [];
  const defaultFullName =
    shippingAddress?.fullName ??
    (customer ? `${customer.firstName} ${customer.lastName}` : ``);

  const submitCustomerForm = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const { emailAddress, firstName, lastName } = Object.fromEntries<any>(
      formData.entries(),
    );
    const isValid = event.currentTarget.checkValidity();

    if (
      customerFormChanged &&
      isValid &&
      emailAddress &&
      firstName &&
      lastName
    ) {
      activeOrderFetcher.submit(formData, {
        method: 'post',
        action: '/api/active-order',
      });
      setCustomerFormChanged(false);
    }
  };

  const submitAddressForm = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const isValid = event.currentTarget.checkValidity();

    if (addressFormChanged && isValid) {
      setShippingAddress(formData);
    }
  };

  const submitSelectedAddress = (index: number) => {
    const selectedAddress = activeCustomer?.addresses?.[index];
    if (selectedAddress) {
      setSelectedAddressIndex(index);
      const formData = new FormData();
      Object.keys(selectedAddress).forEach((key) =>
        formData.append(key, (selectedAddress as any)[key]),
      );
      formData.append('countryCode', selectedAddress.country.code);
      formData.append('action', 'setCheckoutShipping');
      setShippingAddress(formData);
    }
  };

  function setShippingAddress(formData: FormData) {
    if (shippingFormDataIsValid(formData)) {
      activeOrderFetcher.submit(formData, {
        method: 'post',
        action: '/api/active-order',
      });
      setAddressFormChanged(false);
    }
  }

  const submitSelectedShippingMethod = (value?: string) => {
    if (value) {
      activeOrderFetcher.submit(
        {
          action: 'setShippingMethod',
          shippingMethodId: value,
        },
        {
          method: 'post',
          action: '/api/active-order',
        },
      );
    }
  };

  const paymentError = getPaymentError(error);

  // Auto-select default shipping address on component mount
  useEffect(() => {
    if (
      isSignedIn &&
      activeCustomer?.addresses?.length &&
      !addressFormChanged &&
      !shippingAddress?.streetLine1
    ) {
      const defaultShippingAddress = activeCustomer.addresses.find(
        (addr) => addr.defaultShippingAddress,
      );
      const addressToShow =
        defaultShippingAddress || activeCustomer.addresses[0];
      if (addressToShow) {
        const formData = new FormData();
        Object.keys(addressToShow).forEach((key) =>
          formData.append(key, (addressToShow as any)[key]),
        );
        formData.append('countryCode', addressToShow.country.code);
        formData.append('action', 'setCheckoutShipping');
        setShippingAddress(formData);
      }
    }
  }, [
    isSignedIn,
    activeCustomer?.addresses,
    addressFormChanged,
    shippingAddress?.streetLine1,
  ]);

  // Check if a shipping method is selected
  const isShippingMethodSelected =
    !!activeOrder?.shippingLines?.[0]?.shippingMethod;

  const [open, setOpen] = useState(false);

  // Get applied coupon details
  const appliedCouponCode = activeOrder?.couponCodes?.[0];
  const appliedCouponDetails = appliedCouponCode
    ? couponCodes.find((c: any) => c.couponCode === appliedCouponCode)
    : null;

  // Handle modal open with a small delay to prevent immediate close
  const handleOpenCouponModal = () => {
    setTimeout(() => {
      setIsCouponModalOpen(true);
    }, 50);
  };

  // Replace the existing useEffect for coupon removal refresh with:
  useEffect(() => {
    if (
      couponFetcher.data?.success &&
      couponFetcher.data?.appliedCoupon === null &&
      shouldRefreshAfterCouponRemoval
    ) {
      // Coupon was successfully removed, refresh the page
      window.location.reload();
    }
  }, [couponFetcher.data, shouldRefreshAfterCouponRemoval]);

  // Get cart items for the view more/less functionality
  const allLines = activeOrder?.lines ?? [];
  const visibleLines = showAllCartItems ? allLines : allLines.slice(0, 3);

  return (
    <div className="bg-gray-50">
      <Header
        onCartIconClick={() => setOpen(!open)}
        cartQuantity={activeOrder?.totalQuantity ?? 0}
        isSignedIn={isSignedIn}
        collections={collections}
      />
      <div className="lg:max-w-7xl max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
            {/* Customer Information */}
            <div>
              <h2 className="text-lg font-medium text-black">Details Title</h2>
            </div>

            {/* Shipping Address */}
            <Form
              method="post"
              action="/api/active-order"
              onBlur={submitAddressForm}
              onChange={() => setAddressFormChanged(true)}
            >
              <input type="hidden" name="action" value="setCheckoutShipping" />
              <div className="mt-10">
                {/* <h2 className="text-lg font-medium text-gray-900">{t("checkout.shippingTitle")}</h2> */}
              </div>

              {isSignedIn && activeCustomer.addresses?.length ? (
                <div className="mt-4 bg-white border rounded-lg shadow-sm p-4">
                  {(() => {
                    const defaultShippingAddress =
                      activeCustomer.addresses.find(
                        (addr) => addr.defaultShippingAddress,
                      );
                    const addressToShow =
                      defaultShippingAddress || activeCustomer.addresses[0];
                    return (
                      <>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-sm font-medium text-black">
                            {defaultShippingAddress
                              ? 'Default Shipping Address'
                              : 'Saved Address'}
                          </h3>
                          <Link
                            to="/account/addresses"
                            className="text-sm font-medium text-black"
                          >
                            Edit
                          </Link>
                        </div>
                        <div className="text-sm text-black leading-5">
                          <p className="font-medium">
                            {addressToShow?.fullName} •{' '}
                            {addressToShow?.phoneNumber}
                          </p>
                          <p className="text-black">
                            {[
                              addressToShow?.streetLine1,
                              addressToShow?.streetLine2,
                              addressToShow?.city,
                              addressToShow?.province,
                              addressToShow?.postalCode,
                              addressToShow?.country?.name,
                            ]
                              .filter(Boolean)
                              .join(', ')}
                          </p>
                        </div>
                        <div className="mt-4 flex space-x-3">
                          <button
                            type="button"
                            onClick={() => {
                              setAddressFormChanged(true);
                            }}
                            className="text-sm text-black font-medium"
                          >
                            Use Another Address
                          </button>
                        </div>
                      </>
                    );
                  })()}
                  {/* Show address selector or form if user clicked "Use another address" */}
                  {addressFormChanged && (
                    <div className="mt-6 pt-6 border-t border-black">
                      <h3 className="text-sm font-medium text-black mb-4">
                        Select Another Address
                      </h3>
                      <ShippingAddressSelector
                        addresses={activeCustomer.addresses}
                        selectedAddressIndex={selectedAddressIndex}
                        onChange={submitSelectedAddress}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <AddressForm
                  availableCountries={
                    activeOrder ? availableCountries : undefined
                  }
                  address={shippingAddress}
                  defaultFullName={defaultFullName}
                />
              )}
            </Form>

            {activeOrder?.id && (
              <OrderInstructions
                orderId={activeOrder.id}
                initialValue={orderInstructions}
                disabled={false}
              />
            )}

            {/* Shipping Method */}
            <div className="mt-10 border-t border-black pt-10">
              <ShippingMethodSelector
                eligibleShippingMethods={eligibleShippingMethods}
                currencyCode={activeOrder?.currencyCode}
                shippingMethodId={
                  activeOrder?.shippingLines[0]?.shippingMethod.id ?? ''
                }
                onChange={submitSelectedShippingMethod}
              />
            </div>

            {/* Payment Methods */}
            <div className="mt-10 border-t border-black pt-10">
              <h2 className="text-lg font-medium text-black mb-6">
                Payment Method
              </h2>
              <div className="flex flex-col items-center divide-black divide-y space-y-6">
                <div className="w-full">
                  {isShippingMethodSelected && (
                    <div className="flex space-x-4 mb-6">
                      <button
                        type="button"
                        onClick={() => setPaymentMode('online')}
                        className={`flex-1 py-3 px-4 rounded-md text-base font-medium transition-colors duration-200 ${
                          paymentMode === 'online'
                            ? 'bg-black text-white'
                            : 'bg-white text-black border border-black hover:bg-gray-100'
                        }`}
                      >
                        Online Payment
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMode('offline')}
                        className={`flex-1 py-3 px-4 rounded-md text-base font-medium transition-colors duration-200 ${
                          paymentMode === 'offline'
                            ? 'bg-black text-white'
                            : 'bg-white text-black border border-black hover:bg-gray-100'
                        }`}
                      >
                        Cash on Delivery
                      </button>
                    </div>
                  )}
                </div>

                <div className="py-6 w-full">
                  <h3 className="text-base font-medium text-black mb-4">
                    Review
                  </h3>
                  {isShippingMethodSelected && paymentMode && (
                    <>
                      {eligiblePaymentMethods
                        .filter((method) => method.code === paymentMode)
                        .map((method) => (
                          <div key={method.id}>
                            {method.code === 'online' ? (
                              <>
                                <p className="text-sm text-black mb-4">
                                  By clicking the Place Order button, you
                                  confirm that you have read, understand and
                                  accept our Terms of Use, Terms of Sale and
                                  Returns Policy and acknowledge that you have
                                  read Medusa Store's Privacy Policy.
                                </p>
                                <RazorpayPayments
                                  orderCode={activeOrder?.code ?? ''}
                                  amount={activeOrder?.totalWithTax ?? 0}
                                  currencyCode={
                                    activeOrder?.currencyCode ?? 'INR'
                                  }
                                  customerEmail={customer?.emailAddress ?? ''}
                                  customerName={`${customer?.firstName ?? ''} ${
                                    customer?.lastName ?? ''
                                  }`.trim()}
                                  customerPhone={
                                    shippingAddress?.phoneNumber ?? ''
                                  }
                                />
                              </>
                            ) : method.code === 'offline' ? (
                              <Form method="post">
                                <input
                                  type="hidden"
                                  name="paymentMethodCode"
                                  value="offline"
                                />
                                <input
                                  type="hidden"
                                  name="paymentNonce"
                                  value={JSON.stringify({
                                    method: 'offline',
                                    status: 'pending',
                                    amount: activeOrder?.totalWithTax || 0,
                                    currencyCode:
                                      activeOrder?.currencyCode || 'INR',
                                    orderCode: activeOrder?.code || '',
                                  })}
                                />
                                <div className="w-full">
                                  <p className="text-sm text-black mb-4">
                                    By clicking the Place Order button, you
                                    confirm that you have read, understand and
                                    accept our Terms of Use, Terms of Sale and
                                    Returns Policy and acknowledge that you have
                                    read Medusa Store's Privacy Policy.
                                  </p>
                                  <button
                                    type="submit"
                                    className="w-full bg-black border hover:bg-white hover:text-black hover:border-black rounded-md py-3 px-4 text-base font-medium text-white"
                                  >
                                    Place Order
                                  </button>
                                </div>
                              </Form>
                            ) : (
                              <div className="text-sm text-black">
                                Payment method "{method.code}" not supported
                              </div>
                            )}
                          </div>
                        ))}
                      {!eligiblePaymentMethods.find(
                        (m) => m.code === paymentMode,
                      ) && (
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                          <p className="text-sm text-yellow-800">
                            {paymentMode === 'online'
                              ? 'Online payment is not available. Please contact support if you need to pay online.'
                              : 'Offline payment is not available. Please contact support for assistance.'}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              {paymentError && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-800">{paymentError}</p>
                </div>
              )}
            </div>

            {/* Show message if no shipping methods are available */}
            {eligibleShippingMethods.length === 0 && (
              <div className="mt-10 border-t border-black pt-10">
                <p className="text-sm text-red-800">
                  No shipping methods available. Please contact support.
                </p>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-black mb-6">Summary</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <CartTotals order={activeOrder as any} />

              {/* Cart Contents with View More - Fixed Version */}
              <CartContents
                orderLines={visibleLines}
                currencyCode={activeOrder?.currencyCode!}
                editable={true}
                removeItem={removeItem}
                adjustOrderLine={adjustOrderLine}
              />

              {/* View More/Less buttons */}
              {allLines.length > 3 && !showAllCartItems && (
                <div className="flex justify-center mt-2">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded hover:bg-blue-100 transition flex items-center justify-center"
                    onClick={() => setShowAllCartItems(true)}
                    aria-label="View More"
                  >
                    <img
                      src="/show-more.png"
                      alt="Show more"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              )}

              {allLines.length > 3 && showAllCartItems && (
                <div className="flex justify-center mt-2">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded hover:bg-blue-100 transition flex items-center justify-center"
                    onClick={() => setShowAllCartItems(false)}
                    aria-label="Show Less"
                  >
                    <img
                      src="/show-more.png"
                      alt="Show less"
                      className="w-6 h-6 transform rotate-180"
                      style={{ transform: 'rotate(180deg)' }}
                    />
                  </button>
                </div>
              )}

              {/* Applied Coupon Display */}
              {appliedCouponCode && appliedCouponDetails && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800">
                          {appliedCouponDetails.name || appliedCouponCode}
                        </p>
                        <p className="text-xs text-green-600">
                          Coupon "{appliedCouponCode}" applied
                        </p>
                      </div>
                    </div>
                    <couponFetcher.Form method="post">
                      <input type="hidden" name="action" value="removeCoupon" />
                      <input
                        type="hidden"
                        name="couponCode"
                        value={appliedCouponCode}
                      />
                      <button
                        type="submit"
                        onClick={() => setShouldRefreshAfterCouponRemoval(true)}
                        className="ml-2 px-3 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-xs hover:bg-red-200 transition-colors duration-200"
                        title="Remove coupon"
                        disabled={couponFetcher.state === 'submitting'}
                      >
                        {couponFetcher.state === 'submitting'
                          ? 'Removing...'
                          : 'Remove'}
                      </button>
                    </couponFetcher.Form>
                  </div>
                </div>
              )}

              {/* Apply Coupon Button */}
              {!appliedCouponCode && (
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={handleOpenCouponModal}
                    className="w-full bg-black text-white font-medium py-2 px-4 hover:text-black rounded-md border hover:border-black hover:bg-white transition-colors duration-200"
                  >
                    Apply Coupon
                  </button>
                </div>
              )}

              {/* Shipping Address Summary */}
              {shippingAddress && (
                <div className="mt-6 pt-6 border-t border-black">
                  <h3 className="text-sm font-medium text-black mb-2">
                    Shipping Summary
                  </h3>
                  <div className="text-sm text-black">
                    <p>{shippingAddress.fullName}</p>
                    <p>{shippingAddress.streetLine1}</p>
                    {shippingAddress.streetLine2 && (
                      <p>{shippingAddress.streetLine2}</p>
                    )}
                    <p>
                      {shippingAddress.city}, {shippingAddress.province}{' '}
                      {shippingAddress.postalCode}
                    </p>
                    <p>{shippingAddress.countryCode}</p>
                  </div>
                  {activeOrder?.shippingLines?.[0]?.shippingMethod && (
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-black mb-2">
                        Shipping method
                      </h3>
                      <p className="text-sm text-black">
                        {activeOrder.shippingLines[0].shippingMethod.name} -{' '}
                        {activeOrder.currencyCode}
                        {activeOrder.shippingLines[0].priceWithTax}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Coupon Modal */}
      <CouponModal
        isOpen={isCouponModalOpen}
        onClose={() => setIsCouponModalOpen(false)}
        coupons={couponCodes} // Pass the fetched coupons
        activeOrder={activeOrder as any}
        appliedCoupon={activeOrder?.couponCodes?.[0] || null}
      />

      <Footer collections={collections} />
    </div>
  );
}

function getPaymentError(error?: ErrorResult): string | undefined {
  if (!error || !error.errorCode) {
    return undefined;
  }

  switch (error.errorCode) {
    case ErrorCode.OrderPaymentStateError:
    case ErrorCode.IneligiblePaymentMethodError:
    case ErrorCode.PaymentFailedError:
    case ErrorCode.PaymentDeclinedError:
    case ErrorCode.OrderStateTransitionError:
    case ErrorCode.NoActiveOrderError:
      return error.message;
  }
}
