import { Price } from '~/components/products/Price';
import { OrderDetailFragment } from '~/generated/graphql';
import { useTranslation } from 'react-i18next';

export function CartTotals({ order }: { order?: OrderDetailFragment | null }) {
  const { t } = useTranslation();

  return (
    <dl className="border-gray-200 py-3 space-y-3">
      <div className="flex items-center justify-between">
        <dt className="text-sm">Subtotal</dt>
        <dd className="text-sm font-medium text-gray-900">
          <Price
            priceWithTax={order?.subTotalWithTax}
            currencyCode={order?.currencyCode}
          ></Price>
        </dd>
      </div>
      <div className="flex items-center justify-between">
        <dt className="text-sm">Shipping</dt>
        <dd className="text-sm font-medium text-gray-900">
          <Price
            priceWithTax={order?.shippingWithTax ?? 0}
            currencyCode={order?.currencyCode}
          ></Price>
        </dd>
      </div>
      <div className="flex items-center justify-between border-t border-b border-gray-200 pt-6 pb-6">
        <dt className="text-base font-medium">Total</dt>
        <dd className="text-base font-medium text-gray-900">
          <Price
            priceWithTax={order?.totalWithTax}
            currencyCode={order?.currencyCode}
          ></Price>
        </dd>
      </div>
    </dl>
  );
}
