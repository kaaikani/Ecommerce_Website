'use client';

import { Price } from '~/components/products/Price';
import { OrderDetailFragment, CurrencyCode } from '~/generated/graphql';
import { useTranslation } from 'react-i18next';
import { useFetcher } from '@remix-run/react';
import { removeLoyaltyPoints } from '~/providers/customPlugins/customPlugin'; // Import the removeLoyaltyPoints function

interface Coupon {
  id: string;
  couponCode: string;
  actions: Array<{
    code: string;
    args: Array<{ name: string; value: string }>;
  }>;
}

interface CartTotalsProps {
  order?: OrderDetailFragment | null;
  coupons?: Coupon[];
}

type RemoveLoyaltyPointsFetcherData = {
  success?: boolean;
  error?: string;
};

export function CartTotals({ order, coupons }: CartTotalsProps) {
  const { t } = useTranslation();
  const fetcher = useFetcher<RemoveLoyaltyPointsFetcherData>(); // Fetcher for removing loyalty points

  if (!order) {
    return null;
  }

  // Calculate subtotal from order lines
  const subtotal = order.lines.reduce(
    (acc: number, line) => acc + (line.linePriceWithTax ?? 0),
    0,
  );
  const shipping = order.shippingWithTax ?? 0;
  const total = order.totalWithTax ?? 0;

  // Calculate reward point discount from surcharges
  const rewardPointDiscount = Math.abs(
    order.surcharges
      ?.filter((s) => s.price < 0)
      .reduce((acc, s) => acc + s.price, 0) ?? 0,
  );

  // Extract coupon discount from coupons' actions
  let couponDiscountAmount = 0;
  if (coupons && order.couponCodes) {
    couponDiscountAmount = order.couponCodes.reduce(
      (acc: number, code: string) => {
        const coupon = coupons.find((c) => c.couponCode === code);
        if (coupon && coupon.actions) {
          return (
            acc +
            coupon.actions.reduce(
              (actionAcc: number, action: Coupon['actions'][number]) => {
                const discountArg = action.args.find(
                  (arg) =>
                    arg.name === 'discount' || arg.name === 'discountAmount',
                );
                if (discountArg && discountArg.value) {
                  const parsed = parseFloat(discountArg.value);
                  return actionAcc + (isNaN(parsed) ? 0 : parsed);
                }
                return actionAcc;
              },
              0,
            )
          );
        }
        return acc;
      },
      0,
    );
  }

  // Fallback: Calculate coupon discount as subtotal + shipping - rewardPointDiscount - total
  if (!couponDiscountAmount && order.couponCodes?.length) {
    couponDiscountAmount = subtotal + shipping - rewardPointDiscount - total;
  }

  // Ensure couponDiscountAmount is non-negative
  couponDiscountAmount = Math.max(couponDiscountAmount, 0);

  // Determine if a discount is applied
  const hasDiscount =
    (order.couponCodes?.length ?? 0) > 0 && couponDiscountAmount > 0;

  // Function to handle removing loyalty points
  const handleRemoveLoyaltyPoints = () => {
    fetcher.submit({ action: 'removeLoyaltyPoints' }, { method: 'post' });
  };

  return (
    <dl className="border-gray-200 py-3 space-y-3">
      <div className="flex items-center justify-between">
        <dt className="text-sm">Subtotal</dt>
        <dd className="text-sm font-medium text-gray-900">
          <Price
            priceWithTax={subtotal}
            currencyCode={order.currencyCode as CurrencyCode}
          />
        </dd>
      </div>

      <div className="flex items-center justify-between">
        <dt className="text-sm">Shipping</dt>
        <dd className="text-sm font-medium text-gray-900">
          <Price
            priceWithTax={shipping}
            currencyCode={order.currencyCode as CurrencyCode}
          />
        </dd>
      </div>

      <div className="flex items-center justify-between">
        <dt className="text-sm">Coupon Discounts</dt>
        <dd className="text-sm font-medium text-red-600">
          {hasDiscount ? (
            <>
              -
              <Price
                priceWithTax={couponDiscountAmount}
                currencyCode={order.currencyCode as CurrencyCode}
              />
              <span className="text-xs text-gray-500 ml-2">
                ({order.couponCodes?.join(', ')})
              </span>
            </>
          ) : (
            '--'
          )}
        </dd>
      </div>

      <div className="flex items-center justify-between">
        <dt className="text-sm">Reward Point Discount</dt>
        <dd className="text-sm font-medium text-green-700 flex items-center space-x-2">
          {rewardPointDiscount > 0 ? (
            <>
              -
              <Price
                priceWithTax={rewardPointDiscount}
                currencyCode={order.currencyCode as CurrencyCode}
              />
              <button
                type="button"
                onClick={handleRemoveLoyaltyPoints}
                className="ml-2 px-2 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-xs hover:bg-red-200 transition-colors duration-200"
                disabled={fetcher.state === 'submitting'}
              >
                {fetcher.state === 'submitting' ? 'Removing...' : 'Remove'}
              </button>
            </>
          ) : (
            '--'
          )}
        </dd>
      </div>

      <div className="flex items-center justify-between border-t border-b border-gray-200 pt-6 pb-6">
        <dt className="text-base font-medium">Total</dt>
        <dd className="text-base font-medium text-gray-900">
          <Price
            priceWithTax={total}
            currencyCode={order.currencyCode as CurrencyCode}
          />
        </dd>
      </div>
    </dl>
  );
}
