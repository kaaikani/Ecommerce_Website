import { Price } from '~/components/products/Price';
import { OrderDetailFragment, CurrencyCode } from '~/generated/graphql';
import { useTranslation } from 'react-i18next';

export function CartTotals({ order }: { order?: OrderDetailFragment | null }) {
  const { t } = useTranslation();

  if (!order) {
    return null;
  }

  // Subtotal: sum of all products before discounts/coupons
  const subtotal = order.lines.reduce(
    (acc, line) => acc + (line.linePriceWithTax ?? 0),
    0,
  );
  // Shipping: always show full shippingWithTax
  const shipping = order.shippingWithTax ?? 0;
  // Total: final payable amount
  const total = order.totalWithTax ?? 0;
  // Discount: (subtotal + shipping) - total
  const discount = subtotal + shipping - total;
  const hasDiscount = (order.couponCodes?.length ?? 0) > 0 && discount > 0;

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
        <dt className="text-sm">Coupon & Discount</dt>
        <dd className="text-sm font-medium text-red-600">
          {hasDiscount ? (
            <>
              -
              <Price
                priceWithTax={discount}
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
