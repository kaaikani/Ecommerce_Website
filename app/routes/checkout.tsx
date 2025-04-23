import { useLoaderData, useActionData, Form } from '@remix-run/react';
import { DataFunctionArgs, json, redirect } from '@remix-run/node';
import { getAvailableCountries, getEligibleShippingMethods } from '~/providers/checkout/checkout';
import { getSessionStorage } from '~/sessions';
import { getActiveCustomerAddresses } from '~/providers/customer/customer';
import { getActiveOrder, getCouponCodeList, applyCouponCode, removeCouponCode } from '~/providers/orders/order';
import { CartContents } from '~/components/cart/CartContents';
import { CartTotals } from '~/components/cart/CartTotals';
import { useTranslation } from 'react-i18next';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useLocation, useOutletContext } from '@remix-run/react';
import { OutletContext } from '~/types';
import { classNames } from '~/utils/class-names';
import CheckoutShipping from '~/routes/checkout._index'; // Import CheckoutShipping component
import CouponsComponent from './coupon';
  
// Define the type for the loader data
type LoaderData = {
  availableCountries: any; // Replace with actual type
  eligibleShippingMethods: any; // Replace with actual type
  activeCustomer: any; // Replace with actual type
  error: any; // Replace with actual type
  activeOrder: any; // Replace with actual type
  couponCodes: string[];
};

// Define the type for the action data
type ActionData = {
  couponError?: string;
};

// Loader function
export async function loader({ request }: DataFunctionArgs) {
  const session = await getSessionStorage().then((sessionStorage) =>
    sessionStorage.getSession(request?.headers.get('Cookie')),
  );
  const activeOrder = await getActiveOrder({ request });
  const couponCodes = await getCouponCodeList({ request });

  if (!session || !activeOrder || !activeOrder.active || activeOrder.lines.length === 0) {
    console.log('Redirect would occur, but bypassed for debugging');
    // return redirect('/');
  }

  const { availableCountries } = await getAvailableCountries({ request });
  const { eligibleShippingMethods } = await getEligibleShippingMethods({ request });
  const { activeCustomer } = await getActiveCustomerAddresses({ request });
  const error = session.get('activeOrderError');

  return json({
    availableCountries,
    eligibleShippingMethods,
    activeCustomer,
    error,
    activeOrder,
    couponCodes,
  });
}

// Action function
export async function action({ request }: DataFunctionArgs) {
  const formData = await request.formData();
  const actionType = formData.get('actionType') as string;
  const couponCode = formData.get('couponCode') as string;

  if (actionType === 'apply') {
    if (!couponCode) {
      return json({ couponError: 'Coupon code is required.' }, { status: 400 });
    }
    try {
      const result = await applyCouponCode(couponCode, { request });
      if (result?.__typename === 'Order') {
        return redirect('/checkout');
      } else if (result?.__typename === 'CouponCodeInvalidError') {
        return json({ couponError: result.message || 'Invalid coupon code.' }, { status: 400 });
      }
      return json({ couponError: 'Failed to apply coupon.' }, { status: 500 });
    } catch (error) {
      console.error('Failed to apply coupon:', error);
      return json({ couponError: 'An error occurred while applying the coupon.' }, { status: 500 });
    }
  } else if (actionType === 'remove') {
    if (!couponCode) {
      return json({ couponError: 'Coupon code is required for removal.' }, { status: 400 });
    }
    try {
      const result = await removeCouponCode(couponCode, { request });
      if (result?.__typename === 'Order') {
        return redirect('/checkout');
      }
      return json({ couponError: 'Failed to remove coupon.' }, { status: 500 });
    } catch (error) {
      console.error('Failed to remove coupon:', error);
      return json({ couponError: 'An error occurred while removing the coupon.' }, { status: 500 });
    }
  }

  return json({ couponError: 'Invalid action type.' }, { status: 400 });
}

// CouponsComponent
interface CouponsComponentProps {
  couponCodes: string[];
  appliedCoupon?: string | null;
}


// Main Checkout component
export default function Checkout() {
  const {
    availableCountries,
    eligibleShippingMethods,
    activeCustomer,
    error,
    activeOrder,
    couponCodes,
  } = useLoaderData<LoaderData>();
  const { activeOrderFetcher, removeItem, adjustOrderLine, refresh } = useOutletContext<OutletContext>();
  const location = useLocation();
  const { t } = useTranslation();

  let state = 'shipping';
  if (location.pathname === '/checkout/payment') {
    state = 'payment';
  } else if (location.pathname.startsWith('/checkout/confirmation')) {
    state = 'confirmation';
  }
  let isConfirmationPage = state === 'confirmation';

  return (
    <div className="bg-gray-50">
      <div
        className={classNames(
          isConfirmationPage ? 'lg:max-w-3xl mx-auto' : 'lg:max-w-7xl',
          'max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:px-8',
        )}
      >
        <h2 className="sr-only">{t('cart.checkout')}</h2>
        <nav
          aria-label={t('cart.progress')}
          className="hidden sm:block pb-8 mb-8 border-b border-gray-200"
        >
          <ol role="list" className="flex space-x-4 justify-center">
            {steps.map((step, stepIdx) => (
              <li key={step} className="flex items-center">
                {step === state ? (
                  <span aria-current="page" className="text-primary-600 font-medium">
                    {t(`checkout.steps.${step}`)}
                  </span>
                ) : (
                  <span className="text-gray-500">{t(`checkout.steps.${step}`)}</span>
                )}
                {stepIdx !== steps.length - 1 ? (
                  <ChevronRightIcon
                    className="w-5 h-5 text-gray-300 ml-4"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div className={isConfirmationPage ? 'lg:col-span-2' : ''}>
            {/* Render CheckoutShipping component here for /checkout */}
            <CheckoutShipping />
          </div>

          {/* Order Summary */}
          {!isConfirmationPage && (
            <div className="mt-10 lg:mt-0">
              <h2 className="text-lg font-medium text-gray-900 mb-6">{t('order.summary')}</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <CartContents
                  orderLines={activeOrder?.lines ?? []}
                  currencyCode={activeOrder?.currencyCode!}
                  editable={state === 'shipping'}
                  removeItem={removeItem}
                  adjustOrderLine={adjustOrderLine}
                />
                <CouponsComponent/>

                <CartTotals order={activeOrder as any} />
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const steps = ['shipping', 'payment', 'confirmation'];