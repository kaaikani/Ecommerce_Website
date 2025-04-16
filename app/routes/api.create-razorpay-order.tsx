import { json } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
  const requestBody = await request.json() as { amount: number; currency: string };

  const { amount, currency } = requestBody;

  try {
    const razorpayResponse = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from('rzp_live_MT7BL3eZs3HHGB:IcFId4SLDKWbSUew1Fpb12xn').toString('base64')}`,
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: 'receipt#1',
        payment_capture: 1,
      }),
    });

    const data = await razorpayResponse.json() as { id?: string; error?: { description?: string } };

    if (!razorpayResponse.ok) {
      throw new Error(data.error?.description || 'Failed to create Razorpay order');
    }

    return json({ orderId: data.id });
  } catch (error: any) {
    console.error('Razorpay order creation failed:', error);
    return json({ error: error.message }, { status: 500 });
  }
};
