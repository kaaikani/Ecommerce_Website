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

// Action to handle coupon application, removal, and product variant addition/removal
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

      // --- Fixed minimum amount condition check ---
      const minAmountCondition = coupon.conditions.find(
        (c) =>
          c.code === 'minimum_order_amount' ||
          c.code === 'minimumOrderAmount' ||
          c.code === 'minimumAmount'
      );

      if (minAmountCondition) {
        // Prefer arg named 'amount', fallback to first arg
        const amountArg =
          minAmountCondition.args.find((a) => a.name === 'amount') ??
          minAmountCondition.args[0];
        const minAmountPaise = parseInt(amountArg.value, 10) || 0;

        // Fetch current order totalWithTax in paise
        const order = await getActiveOrder(options);
        const totalWithTaxPaise = order?.totalWithTax ?? 0;

        console.log(
          `Coupon requires ≥ ${minAmountPaise} paise; order total is ${totalWithTaxPaise} paise.`
        );

        if (totalWithTaxPaise < minAmountPaise) {
          const diffPaise = minAmountPaise - totalWithTaxPaise;
          const diffRupees = (diffPaise / 100).toFixed(2);
          return json(
            {
              error: `Add ₹${diffRupees} more to apply this coupon. Current total: ₹${(
                totalWithTaxPaise / 100
              ).toFixed(2)}.`,
            },
            { status: 400 }
          );
        }
      }
      // -----------------------------------------

      // Check if cart is empty and add product variants if needed
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

        // Add unique variants to cart via /api/active-order
        const existingVariantIds = new Set(cartItems.map(item => item.productVariant.id));
        for (const variantId of variantIds) {
          if (!existingVariantIds.has(variantId)) {
            console.log(`Adding variant ${variantId} to cart`);
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
              console.error(`Failed to add variant ${variantId}: ${addResult.error}`);
              return json(
                { error: `Failed to add product variant ${variantId} to cart: ${addResult.error}` },
                { status: 400 }
              );
            }
          }
        }
      }

      // Apply the coupon
      console.log(`Applying coupon: ${couponCode}`);
      const result = await applyCouponCode(couponCode, options);
      if (result?.__typename === 'Order') {
        const order = result as Order;
        console.log(`Coupon ${couponCode} applied successfully. New total: ${order.totalWithTax} paise`);
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

      console.error('Unexpected response from applyCouponCode:', result);
      return json({ error: 'Unexpected response from server.' }, { status: 500 });
    } catch (error) {
      console.error('Failed to apply coupon:', error);
      return json({ error: 'An error occurred while applying the coupon.' }, { status: 500 });
    }
  } else if (actionType === 'remove') {
    // ... (remove logic unchanged) ...
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

      // Collect variant IDs associated with the coupon
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
          console.log(`Removing variant ${item.productVariant.id} from cart`);
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
            console.error(`Failed to remove variant ${item.productVariant.id}: ${removeResult.error}`);
            return json(
              { error: `Failed to remove product variant ${item.productVariant.id} from cart: ${removeResult.error}` },
              { status: 400 }
            );
          }
        }
      }

      console.log(`Removing coupon: ${couponCode}`);
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

export default function CouponsComponent({ order, }: { order?: OrderDetailFragment | null; }) {
  const { couponCodes, activeOrder } = useLoaderData<{ couponCodes: Coupon[]; activeOrder: Order | null; }>();
  const actionData = useActionData<{ success?: boolean; message?: string; error?: string; orderTotal?: number; appliedCoupon?: string | null; }>();
 
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [couponToRemove, setCouponToRemove] = useState<string | null>(null);
  useEffect(() => {
    if (actionData?.error) {
      // Custom logic to detect "add ₹XXX more" error and format it
      const match = actionData.error.match(/Add ₹([\d.]+) more to apply this coupon/);
      if (match) {
        const extraAmount = match[1];
        setErrorMessage(
          `🚫 Not eligible yet! You need to add ₹${extraAmount} more worth of products to activate this coupon code.`
        );
      } else {
        setErrorMessage(actionData.error);
      }
      setShowErrorModal(true);
    }
  }, [actionData?.error]);
  
  // useEffect(() => {
  //   if (actionData?.error) {
  //     setErrorMessage(actionData.error);
  //     setShowErrorModal(true);
  //   }
  // }, [actionData?.error]);

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
      // Submit the removal form programmatically
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
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Coupon Error</h3>
            </div>
            <p className="text-gray-600 mb-6">{errorMessage}</p>
            <button
              onClick={closeErrorModal}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl transform transition-all duration-300 scale-100">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Remove Coupon?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              This will remove the coupon and associated product(s) from your cart. Are you sure?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={closeConfirmModal}
                className="px-4 py-2 rounded-md text-sm font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemoveCoupon}
                className="px-4 py-2 rounded-md text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                Yes, Remove
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-4xl font-bold text-gray-900">
          Order Total: <Price priceWithTax={rawTotal} currencyCode={activeOrder?.currencyCode ?? CurrencyCode.Inr} />
        </h2>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Coupons</h3>

      {actionData?.message && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            actionData.success
              ? 'bg-green-100 text-green-800 border border-green-300'
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}
        >
          {actionData.message}
        </div>
      )}

      {enabledCoupons.length > 0 ? (
        <div className="space-y-4">
          {enabledCoupons.map((coupon) => {
            const isApplied = appliedCoupon === coupon.couponCode;

            // Get product variant names for display
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
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  isApplied
                    ? 'bg-green-50 border-green-200'
                    : 'bg-gray-50 border-gray-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-semibold text-gray-900">
                      {coupon.couponCode}
                    </span>
                    <span className="ml-2 text-sm text-gray-600">({coupon.name})</span>
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
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        isApplied
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {isApplied ? 'Remove' : 'Apply'}
                    </button>
                  </Form>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    <strong>Description:</strong> <div dangerouslySetInnerHTML={{ __html: coupon.description  || "No discription  avalible" }} />

                  </p>
                  {variantNames.length > 0 && (
                    <p>
                      <strong>Products:</strong> {variantNames.join(', ')}
                    </p>
                  )}
                {coupon.conditions.length > 0 && (
  <div>
    <strong>Conditions:</strong>
    <ul className="list-disc list-inside ml-4">
      {coupon.conditions.map((condition, index) => (
        <li key={index}>
          {condition.code}: {' '}
          {condition.args.map((arg, i) => {
            if (condition.code === 'minimum_order_amount' && i === 0) {
              // Convert only the first arg of 'minimum_order_amount'
              return `₹${(parseInt(arg.value) / 100).toFixed(2)}`;
            } else {
              return arg.value;
            }
          }).join(', ')}
        </li>
      ))}
    </ul>
  </div>
)}

                  {coupon.endsAt && (
                    <p>
                      <strong>Expires:</strong>{' '}
                      {new Date(coupon.endsAt).toLocaleDateString()}
                    </p>
                  )}
                  {coupon.usageLimit && (
                    <p>
                      <strong>Usage Limit:</strong> {coupon.usageLimit}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-4">
          No enabled coupon codes available at the moment.
        </p>
      )}
    </div>
  );
}