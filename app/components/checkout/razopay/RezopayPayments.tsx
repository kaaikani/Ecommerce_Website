import { useEffect } from 'react';
import { useFetcher, useLoaderData } from '@remix-run/react';
import { CurrencyCode } from '~/generated/graphql';

interface RazorpayPaymentsProps {
  orderCode: string;
  amount: number;
  currency: string | CurrencyCode;
}

export function RazorpayPayments({ orderCode, amount, currency }: RazorpayPaymentsProps) {
  const { razorpayOrderId, razorpayKeyId, razorpayError } = useLoaderData<{
    razorpayOrderId?: string;
    razorpayKeyId?: string;
    razorpayError?: string;
  }>();
  const fetcher = useFetcher();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script); // now it's just a statement, no value returned
    };
  }, []);
  

  const handlePayment = () => {
    if (!razorpayOrderId || !razorpayKeyId) {
      alert('Razorpay configuration is missing.');
      return;
    }

    const options = {
      key: razorpayKeyId,
      amount: amount,
      currency: currency || 'INR',
      name: 'Your Store Name',
      description: `Payment for order ${orderCode}`,
      order_id: razorpayOrderId,
      handler: async (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) => {
        const formData = new FormData();
        formData.append('paymentMethodCode', 'razorpay');
        formData.append('razorpay_payment_id', response.razorpay_payment_id);
        formData.append('razorpay_order_id', response.razorpay_order_id);
        formData.append('razorpay_signature', response.razorpay_signature);

        fetcher.submit(formData, { method: 'post' });
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
  };

  if (razorpayError) {
    return (
      <div>
        <p className="text-red-700 font-bold">Razorpay Error</p>
        <p className="text-sm">{razorpayError}</p>
      </div>
    );
  }

  return (
    <div className="py-3 w-full">
      <button
        onClick={handlePayment}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={fetcher.state !== 'idle'}
      >
        Pay with Razorpay
      </button>
    </div>
  );
}