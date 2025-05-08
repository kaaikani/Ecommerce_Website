import { CreditCardIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Form, useLoaderData } from '@remix-run/react';
import type { EligiblePaymentMethodsQuery, OrderDetailFragment, ActiveCustomerDetailsQuery } from '~/generated/graphql';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { getActiveCustomerDetails } from '~/providers/customer/customer';
import type { LoaderFunctionArgs } from '@remix-run/server-runtime';
import { json, redirect } from '@remix-run/server-runtime';
import { getSessionStorage } from '~/sessions';

// Razorpay API response shape
type RazorpayOrderResponse = { orderId: string; error?: string, success?: boolean;  };
interface RazorpayInstance { open(): void; on(event: string, callback: (response: any) => void): void; }

// Ensure authenticated customer
export async function loader({ request }: LoaderFunctionArgs) {
  const { activeCustomer } = await getActiveCustomerDetails({ request });

 
  if (!activeCustomer) {
    const sessionStorage = await getSessionStorage();
    const session = await sessionStorage.getSession(request.headers.get('Cookie'));
    session.unset('authToken');
    session.unset('channelToken');
    return json({
      activeCustomer: null,
      message: 'You need to be signed in to proceed with payment.',
      loginUrl: '/sign-in',
    }, {
      headers: { 'Set-Cookie': await sessionStorage.commitSession(session) }
    });
  }

  return json({ activeCustomer });
}

// Payment component
export function DummyPayments({
  paymentMethod,
  paymentError,
  order,
  activeCustomer,
  
}: {
  paymentMethod: EligiblePaymentMethodsQuery['eligiblePaymentMethods'][number];
  paymentError?: string;
  order?: OrderDetailFragment | null;
  activeCustomer: ActiveCustomerDetailsQuery['activeCustomer'];
}) {
  const { t } = useTranslation();
  const [razorpayError, setRazorpayError] = useState<string | null>(null);

  // Get customer data (nullable until guarded)
  // const { activeCustomer } = useLoaderData<typeof loader>() as {
  //   activeCustomer: ActiveCustomerDetailsQuery['activeCustomer'] | null;
  // };

  // Guard against missing customer
  if (!activeCustomer) {
    return (
      <div className="max-w-md mx-auto p-6 bg-gray-100 rounded">
        <p className="text-center text-red-600">{t('checkout.noCustomer', 'Customer information is not available.')}</p>
      </div>
    );
  }

  // Payment parameters
  const amountInPaise = order?.totalWithTax ? Math.round(order.totalWithTax * 1) : 1000;

  const currency = order?.currencyCode || 'INR';

  // Load Razorpay script
  const loadRazorpayScript = () =>
    new Promise<boolean>((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  // Handle online payment
  const handleRazorpayPayment = async () => {
    setRazorpayError(null);
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      setRazorpayError('Unable to load payment SDK');
      return;
    }

    let orderData: RazorpayOrderResponse;
    try {
      const res = await fetch('/api/create-razorpay-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amountInPaise, currency }),
      });
      if (!res.ok) throw new Error(res.statusText);
      orderData = await res.json();
      if (!orderData.orderId) throw new Error('No orderId');
    } catch (e: any) {
      setRazorpayError(e.message);
      return;
    }

    const options = {
      key: 'rzp_test_FizLXqYeAjTxdN',
      amount: amountInPaise,
      currency,
      name: `${activeCustomer.firstName} ${activeCustomer.lastName}`,
      description: 'Online Payment',
      order_id: orderData.orderId,
      prefill: {
        name: `${activeCustomer.firstName} ${activeCustomer.lastName}`,
        email: activeCustomer.emailAddress,
        contact: activeCustomer.phoneNumber,
      },
      theme: { color: '#3399cc' },
    };

    try {
      const rzp = new (window as any).Razorpay(options) as RazorpayInstance;
      rzp.on('payment.failed', (resp: any) => setRazorpayError(resp.error.description));
      rzp.on('payment.success', async (response: any) => {
        try {
          // Step 1: Verify with your server
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpayOrderId: orderData.orderId,
              razorpayPaymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              
            }),
          });
      
          if (!verifyRes.ok) throw new Error('Payment verification failed.');
      
          // Step 2: Call your Vendure backend to add payment
          const vendureRes = await fetch('/api/add-payment-to-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              method: 'razorpay',
              metadata: {
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: orderData.orderId,
                razorpaySignature: response.razorpay_signature,
              },
            }),
          });
          
          if (vendureRes.ok) {
            window.location.href = '/checkout/confirmation';
          } else {
            throw new Error('Failed to register payment in Vendure');
          }
        } catch (err) {
          setRazorpayError('Error verifying or registering payment. Please try again.');
        }
      });
      
      rzp.open();
    } catch (e: any) {
      setRazorpayError(e.message || 'Payment initialization failed');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl">
    {/* Header */}
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-2">
      {t('checkout.title', 'Payment Checkout')}
    </h2>
  

  
    {/* Error Message */}
    {(paymentError || razorpayError) && (
      <div className="mb-4 p-4 bg-red-100 border border-red-300 rounded-lg flex items-start space-x-2">
        <XCircleIcon className="w-6 h-6 text-red-500 mt-1" />
        <span className="text-red-700 font-medium">{paymentError || razorpayError}</span>
      </div>
    )}
  
    {/* Payment Button */}
    {paymentMethod.name.toLowerCase() === 'online' ? (
      <button
        onClick={handleRazorpayPayment}
        className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-semibold text-lg shadow-md transition-transform transform hover:scale-[1.02]"
      >
        <CreditCardIcon className="w-6 h-6" />
        <span>{t('checkout.payWith')} {paymentMethod.name}</span>
      </button>
    ) : (
      <Form method="post">
        <input type="hidden" name="paymentMethodCode" value={paymentMethod.code} />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-semibold text-lg shadow-md transition-transform transform hover:scale-[1.02]"
        >
          <CreditCardIcon className="w-6 h-6" />
          <span>{t('checkout.payWith')} {paymentMethod.name}</span>
        </button>
      </Form>
    )}
  </div>
  
  );
}
