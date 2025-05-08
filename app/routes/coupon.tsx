import { LoaderFunction, json, ActionFunction } from '@remix-run/node';
import { useLoaderData, Form, useActionData } from '@remix-run/react';
import { getCouponCodeList,removeCouponProductFromCart, applyCouponCode, removeCouponCode, getActiveOrder, addCouponProductToCart } from '../providers/orders/order';
import { QueryOptions } from '../graphqlWrapper';
import { Price } from '../components/products/Price';
import { OrderDetailFragment, CurrencyCode } from '../generated/graphql';
import { useEffect, useState } from 'react';

// Define TypeScript interfaces for type safety
interface Coupon {
  id: string;
  name: string;
  couponCode: string | null | undefined;
  description: string;
  enabled: boolean;
  endsAt?: string | null;
  usageLimit?: number | null;
  conditions: Array<{ code: string; args: Array<{ name: string; value: string }> }>;
}

interface Order {
  __typename: 'Order';
  id: string;
  code: string;
  active: boolean;
  createdAt: any;
  state: string;
  currencyCode: CurrencyCode;
  totalQuantity: number;
  subTotal: number;
  subTotalWithTax: number;
  total: number;
  totalWithTax: number;
  couponCodes?: string[] | null;
  lines?: Array<{ id: string; productVariant: { id: string; name?: string }; quantity: number }> | null;
  payments?: Array<{ id: string }> | null;
}

interface CouponCodeInvalidError {
  __typename: 'CouponCodeInvalidError';
  message: string;
}

interface CouponCodeExpiredError {
  __typename: 'CouponCodeExpiredError';
  message: string;
}

interface CouponCodeLimitError {
  __typename: 'CouponCodeLimitError';
  message: string;
}

interface ActiveOrderResponse {
  error?: string;
  activeOrder?: Order;
}

// Loader to fetch coupon codes and active order
export const loader: LoaderFunction = async ({ request }) => {
  try {
    const options: QueryOptions = { request };
    const couponCodes = await getCouponCodeList(options);
    const activeOrder = await getActiveOrder(options);
    return json({ couponCodes, activeOrder });
  } catch (error) {
    console.error('Loader error:', error);
    return json({ couponCodes: [], activeOrder: null, error: 'Failed to load coupons.' }, { status: 500 });
  }
};

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const couponCode = formData.get('couponCode') as string;
    const actionType = formData.get('actionType') as string;

    if (!couponCode) {
      return json({ error: 'Coupon code is required.' }, { status: 400 });
    }

    const options: QueryOptions = { request };

    if (actionType === 'apply') {
      const couponCodes = await getCouponCodeList(options);
      const coupon = couponCodes.find((c: Coupon) => c.couponCode === couponCode);

      if (!coupon || !coupon.couponCode) {
        console.error(`Invalid coupon code: ${couponCode}`);
        return json({ error: 'Invalid coupon code.' }, { status: 400 });
      }

      // Check if another coupon is already applied
      const activeOrder = await getActiveOrder(options);
      if (activeOrder?.couponCodes && activeOrder.couponCodes.length > 0) {
        console.error(`Another coupon already applied: ${activeOrder.couponCodes}`);
        return json({ error: 'Another coupon is already applied. Please remove it before applying a new one.' }, { status: 400 });
      }

      const minAmountCondition = coupon.conditions.find(
        (c) => c.code === 'minimum_order_amount' || c.code === 'minimumOrderAmount' || c.code === 'minimumAmount'
      );

      if (minAmountCondition) {
        const amountArg = minAmountCondition.args.find((a) => a.name === 'amount') ?? minAmountCondition.args[0];
        const minAmountPaise = parseInt(amountArg.value, 10) || 0;
        const totalWithTaxPaise = activeOrder?.totalWithTax ?? 0;

        if (totalWithTaxPaise < minAmountPaise) {
          const diffPaise = minAmountPaise - totalWithTaxPaise;
          const diffRupees = (diffPaise / 100).toFixed(2);
          console.error(`Order total too low: ${totalWithTaxPaise} < ${minAmountPaise}`);
          return json(
            {
              error: `Add ₹${diffRupees} more to apply this coupon. Current total: ₹${(totalWithTaxPaise / 100).toFixed(
                2
              )}.`,
            },
            { status: 400 }
          );
        }
      }

      const cartItems = activeOrder?.lines ?? [];
      console.log('Current cart items:', cartItems);
      // Add the product variant specified in the coupon
      console.log(`Calling addCouponProductToCart for ${couponCode}`);
      try {
        const addResult = await addCouponProductToCart(couponCode, options);
        console.log('addCouponProductToCart result:', addResult);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error(`Failed to add product to cart: ${errorMessage}`);
        return json({ error: `Failed to add product to cart: ${errorMessage}` }, { status: 400 });
      }

      console.log(`Applying coupon: ${couponCode}`);
      const result = await applyCouponCode(couponCode, options);
      console.log('applyCouponCode result:', result);
      if (result?.__typename === 'Order') {
        const order = result as Order;
        return json({
          success: true,
          message: `Coupon "${couponCode}" applied and product added to your order!`,
          orderTotal: order.totalWithTax,
          appliedCoupon: couponCode,
        });
      } else if (result.__typename === 'CouponCodeExpiredError') {
        const message = (result as any).message ?? 'Coupon has expired.';
        console.error(message);
        return json({ error: message }, { status: 400 });
      }

      console.error('Unexpected response from applyCouponCode');
      return json({ error: 'Unexpected response from server.' }, { status: 500 });
    } else if (actionType === 'remove') {
      const couponCodes = await getCouponCodeList(options);
      const coupon = couponCodes.find((c: Coupon) => c.couponCode === couponCode);

      if (!coupon || !coupon.couponCode) {
        console.error(`Invalid coupon code for removal: ${couponCode}`);
        return json({ error: 'Invalid coupon code.' }, { status: 400 });
      }

      const activeOrder = await getActiveOrder(options);
      if (!activeOrder?.couponCodes?.includes(couponCode)) {
        console.error(`Coupon ${couponCode} not applied to order`);
        return json({ error: 'Coupon code is not applied to the order.' }, { status: 400 });
      }

      // Adjust the quantity of the associated product variant in the cart
      console.log(`Adjusting coupon product quantity for: ${couponCode}`);
      try {
        await removeCouponProductFromCart(couponCode, options);
        console.log('Coupon product quantity adjusted successfully');
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error(`Failed to adjust product quantity in cart: ${errorMessage}`);
        // Proceed with coupon removal even if quantity adjustment fails
      }

      // Remove the coupon code
      console.log(`Removing coupon: ${couponCode}`);
      const result = await removeCouponCode(couponCode, options);
      console.log('removeCouponCode result:', result);
      if (result?.__typename === 'Order') {
        const order = result as Order;
        return json({
          success: true,
          message: 'Coupon removed and product quantity adjusted in your order.',
          orderTotal: order.totalWithTax,
          appliedCoupon: null,
        });
      } else {
        console.error('Failed to remove coupon');
        return json({ error: 'Failed to remove coupon.' }, { status: 400 });
      }
    }

    console.error('Invalid action type:', actionType);
    return json({ error: 'Invalid action type.' }, { status: 400 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Action error:', errorMessage);
    return json({ error: 'An unexpected error occurred. Please try again later.' }, { status: 500 });
  }
};
// Gradient color pairs for a luxurious feel
const couponGradients = [
  ['#8B5CF6', '#EC4899'], // Violet to Pink
  ['#10B981', '#047857'], // Emerald to Green
  ['#F59E0B', '#D97706'], // Amber to Orange
  ['#3B82F6', '#1E40AF'], // Blue to Indigo
  ['#EF4444', '#B91C1C'], // Red to Deep Red
];

export default function CouponsComponent({ order }: { order?: OrderDetailFragment | null }) {
  const { couponCodes, activeOrder } = useLoaderData<{ couponCodes: Coupon[]; activeOrder: Order | null }>();
  const actionData = useActionData<{
    success?: boolean;
    message?: string;
    error?: string;
    orderTotal?: number;
    appliedCoupon?: string | null;
  }>();

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [couponToRemove, setCouponToRemove] = useState<string | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  // Initialize appliedCoupon based on activeOrder and localStorage
  useEffect(() => {
    const storedCoupon = localStorage.getItem('appliedCoupon');
    const orderCoupon = activeOrder?.couponCodes?.[0] || null;

    if (storedCoupon && orderCoupon && storedCoupon === orderCoupon) {
      setAppliedCoupon(storedCoupon);
    } else {
      setAppliedCoupon(orderCoupon);
      if (orderCoupon) {
        localStorage.setItem('appliedCoupon', orderCoupon);
      } else {
        localStorage.removeItem('appliedCoupon');
      }
    }
  }, [activeOrder]);

  // Update appliedCoupon based on actionData
  useEffect(() => {
    if (actionData?.appliedCoupon !== undefined) {
      setAppliedCoupon(actionData.appliedCoupon);
      if (actionData.appliedCoupon) {
        localStorage.setItem('appliedCoupon', actionData.appliedCoupon);
      } else {
        localStorage.removeItem('appliedCoupon');
      }
    }
  }, [actionData?.appliedCoupon]);

  // Handle errors from actionData
  useEffect(() => {
    if (actionData?.error) {
      const match = actionData.error.match(/Add ₹([\d.]+) more to apply this coupon/);
      if (match) {
        const extraAmount = match[1];
        setErrorMessage(`🚫 Not eligible yet! Add ₹${extraAmount} more to unlock this coupon.`);
      } else {
        setErrorMessage(actionData.error);
      }
      setShowErrorModal(true);
    }
  }, [actionData?.error]);

  const closeErrorModal = () => {
    setShowErrorModal(false);
    setErrorMessage(''); // Clear error message to allow new errors
  };

  const openConfirmModal = (couponCode: string) => {
    setCouponToRemove(couponCode);
    setShowConfirmModal(true);
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
    setCouponToRemove(null);
  };

  const confirmRemoveCoupon = () => {
    if (couponToRemove) {
      const form = document.createElement('form');
      form.method = 'POST';
      form.style.display = 'none';
      const actionInput = document.createElement('input');
      actionInput.type = 'hidden';
      actionInput.name = 'actionType';
      actionInput.value = 'remove';
      const couponInput = document.createElement('input');
      couponInput.type = 'hidden';
      couponInput.name = 'couponCode';
      couponInput.value = couponToRemove;
      form.appendChild(actionInput);
      form.appendChild(couponInput);
      document.body.appendChild(form);
      form.submit();
      closeConfirmModal();
    }
  };

  const enabledCoupons = couponCodes.filter((coupon) => coupon.enabled && typeof coupon.couponCode === 'string');
  const rawTotal = actionData?.orderTotal ?? activeOrder?.totalWithTax ?? order?.totalWithTax ?? 0;
  const isCouponApplied = !!activeOrder?.couponCodes?.length;

  return (
    <div className="max-w-6xl mx-auto mt-12 p-8 bg-white rounded-3xl shadow-2xl">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-red-500">⚠️</span> Oops!
            </h3>
            <p className="text-gray-600 mb-5">{errorMessage}</p>
            <button
              onClick={closeErrorModal}
              className="w-full py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all font-semibold"
            >
              Got It
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Confirm Removal</h3>
            <p className="text-gray-600 mb-5">Remove this coupon and its products from your cart?</p>
            <div className="flex gap-4">
              <button
                onClick={closeConfirmModal}
                className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemoveCoupon}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Order Total: <Price priceWithTax={rawTotal} currencyCode={activeOrder?.currencyCode ?? CurrencyCode.Inr} />
        </h2>
      </div>
      <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Exclusive Offers</h3>

      {actionData?.message && (
        <div
          className={`mb-8 p-5 rounded-xl flex items-center gap-3 text-base ${
            actionData.success
              ? 'bg-green-50 text-green-800 border-green-200'
              : 'bg-red-50 text-red-800 border-red-200'
          } border`}
        >
          <span>{actionData.success ? '✅' : '❌'}</span> {actionData.message}
        </div>
      )}

      {enabledCoupons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enabledCoupons.map((coupon, index) => {
            const isApplied = appliedCoupon === coupon.couponCode && activeOrder?.couponCodes?.includes(coupon.couponCode!);
            const gradient = couponGradients[index % couponGradients.length];

            const variantNames: string[] = [];
            for (const condition of coupon.conditions) {
              if (condition.code === 'productVariantIds') {
                for (const arg of condition.args) {
                  if (arg.name === 'productVariantIds') {
                    try {
                      const variantIds = JSON.parse(arg.value);
                      const cartItems = activeOrder?.lines ?? [];
                      for (const variantId of Array.isArray(variantIds) ? variantIds : [arg.value]) {
                        const matchingItem = cartItems.find((item) => item.productVariant.id === variantId.toString());
                        if (matchingItem?.productVariant.name) {
                          variantNames.push(matchingItem.productVariant.name);
                        }
                      }
                    } catch {
                      const cartItems = activeOrder?.lines ?? [];
                      const matchingItem = cartItems.find((item) => item.productVariant.id === arg.value);
                      if (matchingItem?.productVariant.name) {
                        variantNames.push(matchingItem.productVariant.name);
                      }
                    }
                  }
                }
              }
            }

            return (
              <div
                key={coupon.id}
                className={`relative p-6 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl ${
                  isApplied ? 'ring-4 ring-green-400' : 'ring-1 ring-gray-200'
                }`}
                style={{
                  background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white tracking-wide">{coupon.couponCode}</span>
                      <span className="ml-2 text-sm text-white/80">({coupon.name})</span>
                    </div>
                    <Form method="post" key={coupon.couponCode}>
                      <input type="hidden" name="actionType" value={isApplied ? 'remove' : 'apply'} />
                      <input type="hidden" name="couponCode" value={coupon.couponCode ?? ''} />
                      <button
                        type="submit"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                          if (isApplied && typeof coupon.couponCode === 'string') {
                            e.preventDefault();
                            openConfirmModal(coupon.couponCode);
                          }
                        }}
                        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md ${
                          isApplied
                            ? 'bg-red-500 hover:bg-red-600 text-white'
                            : isCouponApplied
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-white hover:bg-gray-100 text-gray-800'
                        }`}
                        disabled={typeof coupon.couponCode !== 'string' || (!isApplied && isCouponApplied)}
                      >
                        {isApplied ? 'Remove' : 'Apply'}
                      </button>
                    </Form>
                  </div>
                  <div className="text-sm text-white/90 space-y-2">
                    <p>
                      <strong>Details:</strong>{' '}
                      <span dangerouslySetInnerHTML={{ __html: coupon.description || 'No details' }} />
                    </p>
                    {variantNames.length > 0 && (
                      <p>
                        <strong>Products:</strong> {variantNames.join(', ')}
                      </p>
                    )}
                    {coupon.endsAt && (
                      <p>
                        <strong>Expires:</strong> {new Date(coupon.endsAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-6 text-lg">No exclusive offers available right now.</p>
      )}
    </div>
  );
}