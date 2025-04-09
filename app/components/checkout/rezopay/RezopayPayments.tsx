import { CreditCardIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Form, useSubmit } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

// Define prop types
type PaymentMethod = {
  id: string;
  code: string;
  name: string;
  description: string;
  eligibilityMessage?: string | null;
  isEligible: boolean;
};

interface DummyPaymentsProps {
  paymentMethod: PaymentMethod;
  paymentError?: string;
  razorpayOrderId?: string;
  razorpayKey?: string;
  activeOrder?: {
    id: string;
    totalWithTax: number;
    currencyCode: string;
    code: string;
    active: boolean;
    lines: { id: string }[];
  };
}

export function DummyPayments({
  paymentMethod,
  paymentError,
  razorpayOrderId,
  razorpayKey,
  activeOrder,
}: DummyPaymentsProps) {
  const { t } = useTranslation();
  const submit = useSubmit();

  const [razorpayLoaded, setRazorpayLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (paymentMethod.code === 'razorpay' && !razorpayLoaded) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => setRazorpayLoaded(true);
      script.onerror = () => console.error('Failed to load Razorpay script');
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [paymentMethod.code, razorpayLoaded]);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod.code === 'razorpay') {
      if (!razorpayLoaded || !razorpayOrderId || !razorpayKey) {
        alert(t('checkout.razorpayNotLoaded'));
        return;
      }

      const options = {
        key: razorpayKey,
        amount: activeOrder?.totalWithTax ?? 50000,
        currency: activeOrder?.currencyCode ?? 'INR',
        order_id: razorpayOrderId,
        name: 'Your Store Name',
        description: `Payment for Order #${activeOrder?.code ?? ''}`,
        handler: function (response: any) {
          const formData = new FormData();
          formData.set('paymentMethodCode', 'razorpay');
          formData.set('razorpay_payment_id', response.razorpay_payment_id);
          formData.set('razorpay_order_id', response.razorpay_order_id);
          formData.set('razorpay_signature', response.razorpay_signature);

          submit(formData, { method: 'post' });
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } else {
      const formData = new FormData();
      formData.set('paymentMethodCode', paymentMethod.code);
      submit(formData, { method: 'post' });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-600 text-sm p-6">{t('checkout.dummyPayment')}</p>
      {paymentError && (
        <div className="rounded-md bg-red-50 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                {t('checkout.paymentErrorMessage')}
              </h3>
              <div className="mt-2 text-sm text-red-700">{paymentError}</div>
            </div>
          </div>
        </div>
      )}
      <Form method="post" onSubmit={handlePayment}>
        <input
          type="hidden"
          name="paymentMethodCode"
          value={paymentMethod.code}
        />
        <button
          type="submit"
          className="flex px-6 bg-primary-600 hover:bg-primary-700 items-center justify-center space-x-2 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <CreditCardIcon className="w-5 h-5"></CreditCardIcon>
          <span>
            {t('checkout.payWith')} {paymentMethod.name}
          </span>
        </button>
      </Form>
    </div>
  );
}