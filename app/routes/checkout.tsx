'use client';

import { type FormEvent, useState, useEffect } from 'react';
import { Form, useLoaderData, useOutletContext } from '@remix-run/react';
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
import { shippingFormDataIsValid } from '~/utils/validation';
import { getSessionStorage } from '~/sessions';
import { getActiveCustomerAddresses } from '~/providers/customer/customer';
import { AddressForm } from '~/components/account/AddressForm';
import { ShippingMethodSelector } from '~/components/checkout/ShippingMethodSelector';
import { ShippingAddressSelector } from '~/components/checkout/ShippingAddressSelector';
import { getActiveOrder, getCouponCodeList } from '~/providers/orders/order';
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

export async function loader({ request }: DataFunctionArgs) {
  const session = await getSessionStorage().then((sessionStorage) =>
    sessionStorage.getSession(request?.headers.get('Cookie')),
  );
  const activeOrder = await getActiveOrder({ request });
  const couponCodes = await getCouponCodeList({ request });
  const collections = await getCollections(request, { take: 20 });

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
    couponCodes,
    collections,
    eligiblePaymentMethods,
    stripePaymentIntent,
    stripePublishableKey,
    stripeError,
    brainTreeKey,
    brainTreeError,
    orderInstructions,
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
    couponCodes,
    eligiblePaymentMethods,
    orderInstructions,
  } = useLoaderData<typeof loader>();

  const { activeOrderFetcher, removeItem, adjustOrderLine } =
    useOutletContext<OutletContext>();
  const [customerFormChanged, setCustomerFormChanged] = useState(false);
  const [addressFormChanged, setAddressFormChanged] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [paymentMode, setPaymentMode] = useState<'online' | 'offline' | null>(
    null,
  );
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

            {/* Payment Methods - Always show Payment Method and Review headings, and show payment options and review content dynamically */}
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
              <CartContents
                orderLines={activeOrder?.lines ?? []}
                currencyCode={activeOrder?.currencyCode!}
                editable={true}
                removeItem={removeItem}
                adjustOrderLine={adjustOrderLine}
              />

              <div className="mt-4">
                <Link to="/coupon">
                  <button
                    type="button"
                    className="w-full bg-black text-white font-medium py-2 px-4 hover:text-black rounded-md border hover:border-black hover:bg-white transition-colors duration-200"
                  >
                    Available Offer
                  </button>
                </Link>
              </div>

              <CartTotals order={activeOrder as any} />

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
