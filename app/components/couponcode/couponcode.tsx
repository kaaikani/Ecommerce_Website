import { LoaderFunction, json, ActionFunction } from '@remix-run/node';
import { useLoaderData, Form, useActionData } from '@remix-run/react';
import { getCouponCodeList, applyCouponCode, removeCouponCode, getActiveOrder } from '~/providers/orders/order';
import { QueryOptions } from '~/graphqlWrapper';
import { Price } from '~/components/products/Price';
import { OrderDetailFragment, CurrencyCode } from '~/generated/graphql';
import { useEffect } from 'react';
// Define TypeScript interfaces for type safety
interface Coupon {
  id: string;
  name: string;
  couponCode: string | null | undefined;
  description: string;
  enabled: boolean;
  endsAt?: string | null;
  usageLimit?: number | null;
  conditions: Array<{
    code: string;
    args: Array<{
      name: string;
      value: string;
    }>;
  }>;
}

interface Order {
  __typename: 'Order';
  id: string;
  total: number;
  totalWithTax: number;
  currencyCode: CurrencyCode;
  couponCodes?: string[] | null;
  lines?: Array<{
    productVariant: { id: string };
    quantity: number;
  }> | null;
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

// Action to handle coupon application, removal, and product variant addition
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

      // Check minimumAmount condition
      const minAmountCondition = coupon.conditions.find(
        (condition) => condition.code === 'minimumAmount'
      );
      if (minAmountCondition) {
        const minAmountArg = minAmountCondition.args.find((arg) => arg.name === 'amount');
        if (minAmountArg) {
          const minAmount = parseFloat(minAmountArg.value) / 100; // Convert paise to rupees
          const order = await getActiveOrder(options);
          const totalWithTax = (order?.totalWithTax ?? 0) / 100; // Convert paise to rupees
          console.log(`Checking minimumAmount: Coupon requires ₹${minAmount.toFixed(2)}, order total is ₹${totalWithTax.toFixed(2)}`);

          if (!order || totalWithTax < minAmount) {
            return json(
              {
                error: `Can't apply coupon code. Order total must be at least ₹${minAmount.toFixed(2)} to apply this coupon. Current total: ₹${totalWithTax.toFixed(2)}`,
              
              },
              { status: 400 }
            );
          }
        } else {
          console.warn('minimumAmount condition found but no amount arg provided');
        }
      } else {
        console.log('No minimumAmount condition for coupon', couponCode);
      }

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
        const errorResult = result as CouponCodeExpiredError;
        console.warn(`Coupon expired: ${errorResult.message}`);
        return json({ error: errorResult.message || 'Coupon code has expired.' }, { status: 400 });
      } else if (result?.__typename === 'CouponCodeInvalidError') {
        const errorResult = result as CouponCodeInvalidError;
        console.warn(`Invalid coupon: ${errorResult.message}`);
        return json({ error: errorResult.message || 'Invalid coupon code.' }, { status: 400 });
      } else if (result?.__typename === 'CouponCodeLimitError') {
        const errorResult = result as CouponCodeLimitError;
        console.warn(`Coupon limit reached: ${errorResult.message}`);
        return json({ error: errorResult.message || 'Coupon usage limit reached.' }, { status: 400 });
      }

      console.error('Unexpected response from applyCouponCode:', result);
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
      console.log(`Removing coupon: ${couponCode}`);
      const result = await removeCouponCode(couponCode, { request });
      if (result?.__typename === 'Order') {
        const order = result as Order;
        console.log(`Coupon ${couponCode} removed successfully. New total: ${order.totalWithTax} paise`);
        return json({
          success: true,
          message: 'Coupon removed from your order.',
          orderTotal: order.totalWithTax,
          appliedCoupon: null,
        });
      } else if (
        result?.__typename === 'CouponCodeInvalidError' ||
        result?.__typename === 'CouponCodeExpiredError' ||
        result?.__typename === 'CouponCodeLimitError'
      ) {
        console.warn('Failed to remove coupon:', result);
        return json({ error: 'Failed to remove coupon.' }, { status: 400 });
      }
      console.error('Unexpected response from removeCouponCode:', result);
      return json({ error: 'Unexpected response from server.' }, { status: 500 });
    } catch (error) {
      console.error('Failed to remove coupon:', error);
      return json({ error: 'An error occurred while removing the coupon.' }, { status: 500 });
    }
  }

  return json({ error: 'Invalid action type.' }, { status: 400 });
};

export default function CouponsComponent({
  order,
}: {
  order?: OrderDetailFragment | null;
}) {
  const { couponCodes, activeOrder } = useLoaderData<{ couponCodes: Coupon[], activeOrder: Order | null }>();
  const actionData = useActionData<{
    success?: boolean;
    message?: string;
    error?: string;
    orderTotal?: number;
    appliedCoupon?: string | null;
  }>();
  useEffect(() => {
    if (actionData?.error) {
      window.alert("Coupon code failed"); // Or replace with your custom modal logic
    }
  }, [actionData?.error]);

  const enabledCoupons = couponCodes.filter((coupon) => coupon.enabled && coupon.couponCode);
  const appliedCoupon = actionData?.appliedCoupon || activeOrder?.couponCodes?.[0];
  const rawTotal = actionData?.orderTotal ?? activeOrder?.totalWithTax ?? order?.totalWithTax ?? 0;

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
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
                    <strong>Description:</strong> {coupon.description || 'No description available.'}
                  </p>
                  {coupon.conditions.length > 0 && (
                    <div>
                      <strong>Conditions:</strong>
                      <ul className="list-disc list-inside ml-4">
                        {coupon.conditions.map((condition, index) => (
                          <li key={index}>
                            {condition.code}: {' '}
                            {condition.args.map((arg) => `${arg.value}`).join(', ')}
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