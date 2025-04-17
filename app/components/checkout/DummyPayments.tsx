import { CreditCardIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Form } from '@remix-run/react';
import { EligiblePaymentMethodsQuery,OrderDetailFragment } from '~/generated/graphql';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
// Define the expected response type for the Razorpay order creation API
interface RazorpayOrderResponse {
  orderId: string;
  error?: string; // Optional error field for API failures
}

export function DummyPayments({
  paymentMethod,
  paymentError,
  order, 
}: {
  paymentMethod: EligiblePaymentMethodsQuery['eligiblePaymentMethods'][number];
  paymentError?: string;
  order?: OrderDetailFragment | null;
}) {
  const { t } = useTranslation();
  const [razorpayError, setRazorpayError] = useState<string | null>(null);
  const amountInPaise = order?.totalWithTax
    ? Math.round(order.totalWithTax *1):1000; // default 100.00 INR
  
  const currency = order?.currencyCode || 'INR';

  // Function to load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        console.log('Razorpay script loaded successfully');
        resolve(true);
      };
      script.onerror = () => {
        console.error('Failed to load Razorpay script');
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  // Function to handle Razorpay payment
  const handleRazorpayPayment = async () => {
    setRazorpayError(null); // Clear previous errors
    console.log('Initiating Razorpay payment for method:', paymentMethod.name);

    // Load Razorpay script
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      setRazorpayError('Failed to load Razorpay SDK. Please try again.');
      return;
    }

    // Fetch order ID from your backend
    let orderData: RazorpayOrderResponse;
    try {
      const response = await fetch('/api/create-razorpay-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: currency,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      orderData = await response.json();
      if (!orderData.orderId) {
        throw new Error('No order ID received from backend');
      }
      console.log('Order ID received:', orderData.orderId);
    } catch (error: any) {
      console.error('Error fetching order ID:', error);
      setRazorpayError(`Failed to create order: ${error.message || 'Please try again.'}`);
      return;
    }

    // Razorpay options
    const options = {
      key: 'rzp_live_MT7BL3eZs3HHGB',
      amount: amountInPaise,
      currency: currency,
      name: 'Kaaikani',
      description: 'Online Payment',
      order_id: orderData.orderId,
      
      prefill: {
        name: 'Kaaikani',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Customer Address',
      },
      theme: {
        color: '#3399cc',
      },
    };
   
     
    
    
    // Initialize Razorpay
    try {
      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        // Handle payment failure
        console.error('Payment failed:', response.error);
        setRazorpayError(
          `Payment failed: ${response.error.description || 'Please try again.'}`
        );
      });

      // Open Razorpay checkout
      console.log('Opening Razorpay checkout');
      rzp.open();
    } catch (error) {
      console.error('Error initializing Razorpay:', error);
      setRazorpayError('Failed to initialize payment. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-600 text-sm p-6">{t('')}</p>
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
      {razorpayError && (
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
                Razorpay Error
              </h3>
              <div className="mt-2 text-sm text-red-700">{razorpayError}</div>
            </div>
          </div>
        </div>
      )}
      {paymentMethod.name.toLowerCase() === 'online' ? (
        // Button for Online (Razorpay) payment
        <button
          onClick={handleRazorpayPayment}
          className="flex px-6 bg-primary-600 hover:bg-primary-700 items-center justify-center space-x-2 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <CreditCardIcon className="w-5 h-5" />
          <span>{t('checkout.payWith')} {paymentMethod.name}</span>
        </button>
      ) : (
        // Form for Offline payment
        <Form method="post">
          <input
            type="hidden"
            name="paymentMethodCode"
            value={paymentMethod.code}
          />
          <button
            type="submit"
            className="flex px-6 bg-primary-600 hover:bg-primary-700 items-center justify-center space-x-2 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <CreditCardIcon className="w-5 h-5" />
            <span>
              {t('checkout.payWith')} {paymentMethod.name}
            </span>
          </button>
        </Form>
      )}
    </div>
  );
}