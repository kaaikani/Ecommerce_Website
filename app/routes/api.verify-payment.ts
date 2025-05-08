import { json } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import crypto from 'crypto';

export const action: ActionFunction = async ({ request }) => {
    interface RazorpayVerifyPayload {
        razorpayOrderId: string;
        razorpayPaymentId: string;
        signature: string;
        success?: boolean; 
        }
    const body = await request.json() as RazorpayVerifyPayload;
   const { razorpayOrderId, razorpayPaymentId, signature } = body;
  const generatedSignature = crypto
    .createHmac('sha256', process.env.testKeySecret!)
    .update(razorpayOrderId + '|' + razorpayPaymentId)
    .digest('hex');

  if (generatedSignature === signature) {
    // ✅ Optionally update order status in DB here
    return json({ success: true });
  }

  return json({ success: false }, { status: 400 });
};
