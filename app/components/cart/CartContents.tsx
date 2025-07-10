import { Form, Link } from '@remix-run/react';
import { Price } from '~/components/products/Price';
import { ActiveOrderQuery, CurrencyCode } from '~/generated/graphql';
import { useTranslation } from 'react-i18next';
import { TrashIcon } from '@heroicons/react/24/outline';

export function CartContents({
  orderLines,
  currencyCode,
  editable = true,
  adjustOrderLine,
  removeItem,
}: {
  orderLines: NonNullable<ActiveOrderQuery['activeOrder']>['lines'];
  currencyCode: CurrencyCode;
  editable: boolean;
  adjustOrderLine?: (lineId: string, quantity: number) => void;
  removeItem?: (lineId: string) => void;
}) {
  const { t } = useTranslation();
  const isEditable = editable !== false;

  const handleQuantityChange = (lineId: string, delta: number) => {
    if (adjustOrderLine) {
      const line = orderLines.find((l) => l.id === lineId);
      if (line) {
        const newQuantity = Math.max(1, Math.min(50, line.quantity + delta));
        adjustOrderLine(lineId, newQuantity);
      }
    }
  };

  return (
    <div className="mt-6 flow-root">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {(orderLines ?? []).map((line) => (
          <li key={line.id} className="py-3 flex">
            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
              <img
                src={line.featuredAsset?.preview + '?preset=thumb'}
                alt={line.productVariant.name}
                className="w-full h-full object-center object-cover"
              />
            </div>

            <div className="ml-4 flex-1 flex flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <Link to={`/products/${line.productVariant.product.slug}`}>
                      {line.productVariant.name}
                    </Link>
                  </h3>
                  <p className="ml-4">
                    <Price
                      priceWithTax={line.linePriceWithTax}
                      currencyCode={currencyCode}
                    />
                  </p>
                </div>
              </div>
              <div className="flex-1 flex items-center text-sm">
                {editable ? (
                  <div className="flex items-center space-x-2">
                    <label htmlFor={`quantity-${line.id}`} className="mr-2">
                      Quantity
                    </label>
                    <button
                      type="button"
                      disabled={!isEditable}
                      onClick={() => handleQuantityChange(line.id, -1)}
                      className="px-2 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{line.quantity}</span>
                    <button
                      type="button"
                      disabled={!isEditable}
                      onClick={() => handleQuantityChange(line.id, 1)}
                      className="px-2 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div className="text-gray-800">
                    <span className="mr-1">Quantity</span>
                    <span className="font-medium">{line.quantity}</span>
                  </div>
                )}
                <div className="flex-1" />
                <div className="flex">
                  {isEditable && (
                    <button
                      type="button"
                      onClick={() => removeItem && removeItem(line.id)}
                      className="p-2 text-red-500 hover:text-red-700"
                      title="Remove item"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
