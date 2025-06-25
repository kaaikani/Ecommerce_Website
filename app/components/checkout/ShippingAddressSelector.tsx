import { RadioGroup } from '@headlessui/react';
import { classNames } from '~/utils/class-names';
import { Price } from '~/components/products/Price';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import {
  ActiveCustomerAddressesQuery,
  CurrencyCode,
  EligibleShippingMethodsQuery,
} from '~/generated/graphql';

export type SelectedAddress = NonNullable<
  NonNullable<ActiveCustomerAddressesQuery['activeCustomer']>['addresses']
>[number];

export function ShippingAddressSelector({
  addresses,
  selectedAddressIndex,
  onChange,
}: {
  addresses: SelectedAddress[];
  selectedAddressIndex: number;
  onChange: (value: number) => void;
}) {
  return (
  <RadioGroup value={selectedAddressIndex} onChange={onChange}>
  <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
    {addresses.map((address, index) => (
      <RadioGroup.Option
        key={index}
        value={index}
        className={({ checked, active }) =>
          classNames(
            checked ? 'border-primary-500 ring-2 ring-primary-300' : 'border-gray-300',
            'relative bg-white border rounded-lg shadow-sm p-4 flex items-start cursor-pointer focus:outline-none transition'
          )
        }
      >
        {({ checked }) => (
          <>
            <div className="flex-1">
              <RadioGroup.Label
                as="span"
                className="block text-sm font-semibold text-gray-900"
              >
                {address.fullName || `${address.streetLine1}, ${address.city}`}
              </RadioGroup.Label>
              <RadioGroup.Description as="div" className="text-sm text-gray-600 mt-1 space-y-0.5">
                <p>
                  {address.streetLine1}
                  {address.streetLine2 ? `, ${address.streetLine2}` : ''},{' '}
                  {address.city}, {address.province}, {address.country.name}
                </p>
                <p>
                  {address.postalCode}
                  {address.phoneNumber ? ` • ${address.phoneNumber}` : ''}
                </p>
              </RadioGroup.Description>
            </div>
            {checked && (
              <CheckCircleIcon className="h-5 w-5 text-primary-600 ml-2" aria-hidden="true" />
            )}
            <span
              className={classNames(
                checked ? 'border-primary-500' : 'border-transparent',
                'absolute -inset-px rounded-lg pointer-events-none border-2'
              )}
              aria-hidden="true"
            />
          </>
        )}
      </RadioGroup.Option>
    ))}
  </div>
</RadioGroup>

  );
}
