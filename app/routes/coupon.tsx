import { LoaderFunction, json, ActionFunction } from '@remix-run/node';
import { useLoaderData, Form, useActionData } from '@remix-run/react';
import { getCouponCodeList, applyCouponCode, removeCouponCode, getActiveOrder } from '~/providers/orders/order';
import { QueryOptions } from '~/graphqlWrapper';
import { Price } from '~/components/products/Price';
import { OrderDetailFragment, CurrencyCode } from '~/generated/graphql';
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
  total: number;
  totalWithTax: number;
  currencyCode: CurrencyCode;
  couponCodes?: string[] | null;
  lines?: Array<{ id: string; productVariant: { id: string; name?: string }; quantity: number }> | null;
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
  const options: QueryOptions = { request };
  const couponCodes = await getCouponCodeList(options);
  const activeOrder = await getActiveOrder(options);
  return json({ couponCodes, activeOrder });
};

// Action to handle coupon application and removal
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const couponCode = formData.get('couponCode') as string;
  const actionType = formData.get('actionType') as string;

  if (actionType === 'apply') {
    if (!couponCode) {
      return json({ error: 'Coupon code is required.' }, { status: 400 });
    }

    try {
      const options: QueryOptions = { request };
      const couponCodes = await getCouponCodeList(options);
      const coupon = couponCodes.find((c: Coupon) => c.couponCode === couponCode);

      if (!coupon || !coupon.couponCode) {
        return json({ error: 'Invalid coupon code.' }, { status: 400 });
      }

      const minAmountCondition = coupon.conditions.find(
        (c) => c.code === 'minimum_order_amount' || c.code === 'minimumOrderAmount' || c.code === 'minimumAmount'
      );

      if (minAmountCondition) {
        const amountArg = minAmountCondition.args.find((a) => a.name === 'amount') ?? minAmountCondition.args[0];
        const minAmountPaise = parseInt(amountArg.value, 10) || 0;
        const order = await getActiveOrder(options);
        const totalWithTaxPaise = order?.totalWithTax ?? 0;

        if (totalWithTaxPaise < minAmountPaise) {
          const diffPaise = minAmountPaise - totalWithTaxPaise;
          const diffRupees = (diffPaise / 100).toFixed(2);
          return json(
            { error: `Add ₹${diffRupees} more to apply this coupon. Current total: ₹${(totalWithTaxPaise / 100).toFixed(2)}.` },
            { status: 400 }
          );
        }
      }

      const activeOrder = await getActiveOrder(options);
      const cartItems = activeOrder?.lines ?? [];
      const variantIds: string[] = [];
      if (cartItems.length === 0) {
        for (const condition of coupon.conditions) {
          if (condition.code === 'productVariantIds') {
            for (const arg of condition.args) {
              if (arg.name === 'productVariantIds') {
                try {
                  const parsedIds = JSON.parse(arg.value);
                  if (Array.isArray(parsedIds)) {
                    variantIds.push(...parsedIds.map((id: any) => id.toString()));
                  } else {
                    variantIds.push(arg.value);
                  }
                } catch {
                  variantIds.push(arg.value);
                }
              }
            }
          }
        }

        const existingVariantIds = new Set(cartItems.map(item => item.productVariant.id));
        for (const variantId of variantIds) {
          if (!existingVariantIds.has(variantId)) {
            const addFormData = new FormData();
            addFormData.append('action', 'addItemToOrder');
            addFormData.append('variantId', variantId);
            const addResponse = await fetch('/api/active-order', {
              method: 'POST',
              body: addFormData,
              headers: { 'Cookie': request.headers.get('Cookie') || '' },
            });
            const addResult: ActiveOrderResponse = await addResponse.json();
            if (addResult.error) {
              return json(
                { error: `Failed to add product variant ${variantId} to cart: ${addResult.error}` },
                { status: 400 }
              );
            }
          }
        }
      }

      const result = await applyCouponCode(couponCode, options);
      if (result?.__typename === 'Order') {
        const order = result as Order;
        return json({
          success: true,
          message: `Coupon "${couponCode}" applied to your order!${
            cartItems.length === 0 && variantIds.length > 0 ? ' Required products added to cart.' : ''
          }`,
          orderTotal: order.totalWithTax,
          appliedCoupon: couponCode,
        });
      } else if (result?.__typename === 'CouponCodeExpiredError') {
        const err = result as CouponCodeExpiredError;
        return json({ error: err.message || 'Coupon code has expired.' }, { status: 400 });
      } else if (result?.__typename === 'CouponCodeInvalidError') {
        const err = result as CouponCodeInvalidError;
        return json({ error: err.message || 'Invalid coupon code.' }, { status: 400 });
      } else if (result?.__typename === 'CouponCodeLimitError') {
        const err = result as CouponCodeLimitError;
        return json({ error: err.message || 'Coupon usage limit reached.' }, { status: 400 });
      }

      return json({ error: 'Unexpected response from server.' }, { status: 500 });
    } catch (error) {
      console.error('Failed to apply coupon:', error);
      return json({ error: 'An error occurred while applying the coupon.' }, { status: 500 });
    }
  } else if (actionType === 'remove') {
    if (!couponCode) {
      return json({ error: 'Coupon code is required for removal.' }, { status: 400 });
    }

    try {
      const options: QueryOptions = { request };
      const couponCodes = await getCouponCodeList(options);
      const coupon = couponCodes.find((c: Coupon) => c.couponCode === couponCode);

      if (!coupon || !coupon.couponCode) {
        return json({ error: 'Invalid coupon code.' }, { status: 400 });
      }

      const variantIdsToRemove: string[] = [];
      for (const condition of coupon.conditions) {
        if (condition.code === 'productVariantIds') {
          for (const arg of condition.args) {
            if (arg.name === 'productVariantIds') {
              try {
                const parsedIds = JSON.parse(arg.value);
                if (Array.isArray(parsedIds)) {
                  variantIdsToRemove.push(...parsedIds.map((id: any) => id.toString()));
                } else {
                  variantIdsToRemove.push(arg.value);
                }
              } catch {
                variantIdsToRemove.push(arg.value);
              }
            }
          }
        }
      }

      const activeOrder = await getActiveOrder(options);
      const cartItems = activeOrder?.lines ?? [];
      for (const item of cartItems) {
        if (variantIdsToRemove.includes(item.productVariant.id)) {
          const removeFormData = new FormData();
          removeFormData.append('action', 'removeOrderLine');
          removeFormData.append('orderLineId', item.id);
          const removeResponse = await fetch('/api/active-order', {
            method: 'POST',
            body: removeFormData,
            headers: { 'Cookie': request.headers.get('Cookie') || '' },
          });
          const removeResult: ActiveOrderResponse = await removeResponse.json();
          if (removeResult.error) {
            return json(
              { error: `Failed to remove product variant ${item.productVariant.id} from cart: ${removeResult.error}` },
              { status: 400 }
            );
          }
        }
      }

      const result = await removeCouponCode(couponCode, { request });
      if (result?.__typename === 'Order') {
        const order = result as Order;
        return json({
          success: true,
          message: 'Coupon and associated products removed from your order.',
          orderTotal: order.totalWithTax,
          appliedCoupon: null,
        });
      } else {
        return json({ error: 'Failed to remove coupon.' }, { status: 400 });
      }
    } catch (error) {
      console.error('Failed to remove coupon:', error);
      return json({ error: 'An error occurred while removing the coupon.' }, { status: 500 });
    }
  }

  return json({ error: 'Invalid action type.' }, { status: 400 });
};

// Gradient color pairs for a luxurious feel
const couponGradients = [
  ['#FF6F61', '#DE1A82'], // Coral to Magenta
  ['#6B7280', '#1F2937'], // Gray to Dark Gray
  ['#FBBF24', '#F59E0B'], // Amber to Deep Orange
  ['#34D399', '#059669'], // Teal to Emerald
  ['#A78BFA', '#7C3AED'], // Lavender to Purple
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

  useEffect(() => {
    if (actionData?.error) {
      const match = actionData.error.match(/Add ₹([\d.]+) more to apply this coupon/);
      if (match) {
        const extraAmount = match[1];
        setErrorMessage(
          `🚫 Not eligible yet! Add ₹${extraAmount} more to unlock this coupon.`
        );
      } else {
        setErrorMessage(actionData.error);
      }
      setShowErrorModal(true);
    }
  }, [actionData?.error]);

  const closeErrorModal = () => {
    setShowErrorModal(false);
    setErrorMessage('');
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

  const enabledCoupons = couponCodes.filter((coupon) => coupon.enabled && coupon.couponCode);
  const appliedCoupon = actionData?.appliedCoupon || activeOrder?.couponCodes?.[0];
  const rawTotal = actionData?.orderTotal ?? activeOrder?.totalWithTax ?? order?.totalWithTax ?? 0;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl">
      {/* Load Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400&display=swap" rel="stylesheet" />

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg backdrop-blur-md bg-opacity-90">
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-red-500">⚠️</span> Oops!
            </h3>
            <p className="text-gray-700 mb-4">{errorMessage}</p>
            <button
              onClick={closeErrorModal}
              className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Got It
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg backdrop-blur-md bg-opacity-90">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Confirm Removal</h3>
            <p className="text-gray-700 mb-4">
              Remove this coupon and its products from your cart?
            </p>
            <div className="flex gap-3">
              <button
                onClick={closeConfirmModal}
                className="flex-1 py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemoveCoupon}
                className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 ">
          Order Total: <Price priceWithTax={rawTotal} currencyCode={activeOrder?.currencyCode ?? CurrencyCode.Inr} />
        </h2>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-6  text-center">
        Exclusive Offers
      </h3>

      {actionData?.message && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-center gap-2 text-sm ${
            actionData.success
              ? 'bg-green-100 text-green-800 border-green-300'
              : 'bg-red-100 text-red-800 border-red-300'
          } border`}
        >
          <span>{actionData.success ? '✅' : '❌'}</span> {actionData.message}
        </div>
      )}

      {enabledCoupons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enabledCoupons.map((coupon, index) => {
            const isApplied = appliedCoupon === coupon.couponCode;
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
                        const matchingItem = cartItems.find(
                          (item) => item.productVariant.id === variantId.toString()
                        );
                        if (matchingItem?.productVariant.name) {
                          variantNames.push(matchingItem.productVariant.name);
                        }
                      }
                    } catch {
                      const cartItems = activeOrder?.lines ?? [];
                      const matchingItem = cartItems.find(
                        (item) => item.productVariant.id === arg.value
                      );
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
              className={`coupon-ticket relative p-6 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 backdrop-blur-md ${isApplied ? 'ring-2 ring-green-500' : 'ring-1 ring-gray-200'}`}
              style={{
                background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
              }}
            >
              {/* Ticket Cutouts */}
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full"></div>
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full"></div>
            
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="coupon-code text-xl font-bold text-white tracking-wide">
                      {coupon.couponCode}
                    </span>
                    <span className="ml-2 text-sm text-white/90">({coupon.name})</span>
                  </div>
                  <Form method="post">
                    <input type="hidden" name="actionType" value={isApplied ? 'remove' : 'apply'} />
                    <input type="hidden" name="couponCode" value={coupon.couponCode ?? ''} />
                    <button
                      type="submit"
                      onClick={(e) => {
                        if (isApplied) {
                          e.preventDefault();
                          openConfirmModal(coupon.couponCode ?? '');
                        }
                      }}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 shadow-md ${isApplied ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'}`}
                    >
                      {isApplied ? 'Remove' : 'Apply'}
                    </button>
                  </Form>
                </div>
                <div className="text-sm text-white/90 space-y-2 ">
                  <p>
                    <strong className="">Details:</strong>{' '}
                    <span dangerouslySetInnerHTML={{ __html: coupon.description || 'No details' }} />
                  </p>
                  {variantNames.length > 0 && (
                    <p>
                      <strong className="">Products:</strong> {variantNames.join(', ')}
                    </p>
                  )}
                  {coupon.conditions.length > 0 && (
                    <div>
                      {/* <strong className="">Conditions:</strong>
                      <ul className="list-disc list-inside ml-2">
                        {coupon.conditions.map((condition, index) => (
                          <li key={index}>
                            {condition.code}:{' '}
                            {condition.args.map((arg, i) => {
                              if (condition.code === 'minimum_order_amount' && i === 0) {
                                return `₹${(parseInt(arg.value) / 100).toFixed(2)}`;
                              } else {
                                return arg.value;
                              }
                            }).join(', ')}
                          </li>
                        ))}
                      </ul> */}
                    </div>
                  )}
                  {coupon.endsAt && (
                    <p>
                      <strong className="">Expires:</strong> {new Date(coupon.endsAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-600 py-4 ">No exclusive offers available right now.</p>
      )}
      <style>
        {`
          .coupon-ticket {
            position: relative;
            background-size: 200% 200%;
            animation: gradientShift 8s ease-in-out infinite;
          }
          .coupon-ticket::before,
          .coupon-ticket::after {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            opacity: 0;
            animation: particle 3s infinite ease-in-out;
          }
          .coupon-ticket::before {
            top: 15%;
            left: 10%;
            animation-delay: 0.5s;
          }
          .coupon-ticket::after {
            bottom: 20%;
            right: 15%;
            animation-delay: 1.5s;
          }
          @keyframes gradientShift {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
          @keyframes particle {
            0%, 100% { opacity: 0; transform: scale(0.5) translateY(10px); }
            50% { opacity: 1; transform: scale(1) translateY(0); }
          }
          .coupon-code {
            font-family: '['Playfair_Display']', serif;
          }
        `}
      </style>
    </div>
  );
}