import { DataFunctionArgs, json, redirect } from '@remix-run/server-runtime';
import {
  addPaymentToOrder,
  createStripePaymentIntent,
  generateBraintreeClientToken,
  getEligiblePaymentMethods,
  getNextOrderStates,
  transitionOrderToState,
} from '~/providers/checkout/checkout';
import { useLoaderData, useOutletContext } from '@remix-run/react';
import { OutletContext } from '~/types';
import { CurrencyCode, ErrorCode, ErrorResult } from '~/generated/graphql';
import { StripePayments } from '~/components/checkout/stripe/StripePayments';
import {DummyPayments} from '~/components/checkout/DummyPayments';

import { BraintreeDropIn } from '~/components/checkout/braintree/BraintreePayments';
import { getActiveOrder } from '~/providers/orders/order';
import { getSessionStorage } from '~/sessions';
import { useTranslation } from 'react-i18next';
import { getActiveCustomerDetails } from '~/providers/customer/customer';
import { RazorpayPayments } from '~/components/checkout/razopay/RezopayPayments';

export async function loader({ params, request }: DataFunctionArgs) {
  const session = await getSessionStorage().then((sessionStorage) =>
    sessionStorage.getSession(request?.headers.get('Cookie')),
  );
  const activeOrder = await getActiveOrder({ request });
  const { activeCustomer } = await getActiveCustomerDetails({ request });
  if (!activeCustomer) {
    // If you want to redirect away when there’s no logged‑in customer:
    const sessionStorage = await getSessionStorage();
    const session = await sessionStorage.getSession(request.headers.get('Cookie'));
    session.unset('authToken');
    session.unset('channelToken');
    return redirect('/sign-in', {
      headers: { 'Set-Cookie': await sessionStorage.commitSession(session) },
    });
  }
  if (
    !session ||
    !activeOrder ||
    !activeOrder.active ||
    activeOrder.lines.length === 0
  ) {
    return redirect('/');
  }

  const { eligiblePaymentMethods } = await getEligiblePaymentMethods({
    request,
  });
  const error = session.get('activeOrderError');
  let stripePaymentIntent: string | undefined;
  let stripePublishableKey: string | undefined;
  let stripeError: string | undefined;
  let razorpayOrderId: string | undefined;
  let razorpayKeyId: string | undefined;
  let razorpayError: string | undefined;

  // Stripe handling
  if (eligiblePaymentMethods.find((method) => method.code.includes('stripe'))) {
    try {
      const stripePaymentIntentResult = await createStripePaymentIntent({
        request,
      });
      stripePaymentIntent =
        stripePaymentIntentResult.createStripePaymentIntent ?? undefined;
      stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    } catch (e: any) {
      stripeError = e.message;
    }
  }

  // Braintree handling
  let brainTreeKey: string | undefined;
  let brainTreeError: string | undefined;
  if (
    eligiblePaymentMethods.find((method) => method.code.includes('braintree'))
  ) {
    try {
      const generateBrainTreeTokenResult = await generateBraintreeClientToken({
        request,
      });
      brainTreeKey =
        generateBrainTreeTokenResult.generateBraintreeClientToken ?? '';
    } catch (e: any) {
      brainTreeError = e.message;
    }
  }

  // Razorpay handling
  const razorpayEnabled = eligiblePaymentMethods.some((m) =>
    m.code.includes('razorpay'),
  );
  if (razorpayEnabled && activeOrder) {
    try {
      const response = await fetch(
        `http://localhost:3000/payments/razorpay/order/${activeOrder.id}`,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      if (!response.ok) {
        throw new Error('Failed to create Razorpay order');
      }
  
      const data: { orderId: string; keyId: string } = await response.json(); // <--- type added here
      razorpayOrderId = data.orderId;
      razorpayKeyId = data.keyId;
    } catch (e: any) {
      razorpayError = e.message;
    }
  }
  
  return json({
    eligiblePaymentMethods,
    stripePaymentIntent,
    stripePublishableKey,
    stripeError,
    brainTreeKey,
    brainTreeError,
    error,
    razorpayEnabled,
    razorpayOrderId,
    razorpayKeyId,
    razorpayError,
    activeCustomer,    
  });
}
export async function action({ params, request }: DataFunctionArgs) {
  const body = await request.formData();
  const paymentMethodCode = body.get('paymentMethodCode') as string;

  if (!paymentMethodCode) {
    throw new Response('Payment method code is required', { status: 400 });
  }

  const { nextOrderStates } = await getNextOrderStates({ request });
  if (nextOrderStates.includes('ArrangingPayment')) {
    const transitionResult = await transitionOrderToState('ArrangingPayment', {
      request,
    });
    if (transitionResult.transitionOrderToState?.__typename !== 'Order') {
      throw new Response('Order state transition failed', {
        status: 400,
        statusText: transitionResult.transitionOrderToState?.message,
      });
    }
  }

  let metadata: Record<string, any> = {};
  if (paymentMethodCode === 'razorpay') {
    metadata = {
      razorpay_payment_id: body.get('razorpay_payment_id'),
      razorpay_order_id: body.get('razorpay_order_id'),
      razorpay_signature: body.get('razorpay_signature'),
    };
  } else {
    metadata = { nonce: body.get('paymentNonce') };
  }

  const result = await addPaymentToOrder(
    { method: paymentMethodCode, metadata },
    { request },
  );

  if (result.addPaymentToOrder.__typename === 'Order') {
    return redirect(`/checkout/confirmation/${result.addPaymentToOrder.code}`);
  } else {
    throw new Response('Payment failed', {
      status: 400,
      statusText: result.addPaymentToOrder?.message,
    });
  }
}
export default function CheckoutPayment() {
  const {
    eligiblePaymentMethods,
    stripePaymentIntent,
    stripePublishableKey,
    stripeError,
    brainTreeKey,
    brainTreeError,
    error,
    razorpayOrderId,
    razorpayKeyId,
    razorpayError,
    activeCustomer,  
  } = useLoaderData<typeof loader>();
  const { activeOrderFetcher, activeOrder } = useOutletContext<OutletContext>();
  const { t } = useTranslation();

  const paymentError = getPaymentError(error);

  return (
    <div className="flex flex-col items-center divide-gray-200 divide-y">
      {eligiblePaymentMethods.map((paymentMethod) =>
        paymentMethod.code.includes('braintree') ? (
          <div className="py-3 w-full" key={paymentMethod.id}>
            {brainTreeError ? (
              <div>
                <p className="text-red-700 font-bold">
                  {t('checkout.braintreeError')}
                </p>
                <p className="text-sm">{brainTreeError}</p>
              </div>
            ) : (
              <BraintreeDropIn
                fullAmount={activeOrder?.totalWithTax ?? 0}
                currencyCode={
                  activeOrder?.currencyCode ?? ('USD' as CurrencyCode)
                }
                show={true}
                authorization={brainTreeKey!}
              />
            )}
          </div>
        ) : paymentMethod.code.includes('stripe') ? (
          <div className="py-12" key={paymentMethod.id}>
            {stripeError ? (
              <div>
                <p className="text-red-700 font-bold">
                  {t('checkout.stripeError')}
                </p>
                <p className="text-sm">{stripeError}</p>
              </div>
            ) : (
              <StripePayments
                orderCode={activeOrder?.code ?? ''}
                clientSecret={stripePaymentIntent!}
                publishableKey={stripePublishableKey!}
              />
            )}
          </div>
        ) : paymentMethod.code.includes('razorpay') ? (
          <div className="py-12" key={paymentMethod.id}>
            {razorpayError ? (
              <div>
                <p className="text-red-700 font-bold">
                  {t('checkout.razorpayError', { defaultValue: 'Razorpay Error' })}
                </p>
                <p className="text-sm">{razorpayError}</p>
              </div>
            ) : (
              <RazorpayPayments
                orderCode={activeOrder?.code ?? ''}
                amount={activeOrder?.totalWithTax ?? 0}
                currency={activeOrder?.currencyCode ?? 'INR'}
              />
            )}
          </div>
        ) : (
          <div className="py-12" key={paymentMethod.id}>
           <DummyPayments
              paymentMethod={paymentMethod}
              paymentError={paymentError}
              order={activeOrder as any}
        activeCustomer={activeCustomer} 
           />

          </div>
        ),
      )}
    </div>
  );
}

function getPaymentError(error?: ErrorResult): string | undefined {
  if (!error || !error.errorCode) {
    return undefined;
  }
  switch (error.errorCode) {
    case ErrorCode.OrderPaymentStateError:
    case ErrorCode.IneligiblePaymentMethodError:
    case ErrorCode.PaymentFailedError:
    case ErrorCode.PaymentDeclinedError:
    case ErrorCode.OrderStateTransitionError:
    case ErrorCode.NoActiveOrderError:
      return error.message;
  }
}