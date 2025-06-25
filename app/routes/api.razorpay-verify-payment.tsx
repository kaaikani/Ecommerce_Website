import { json, redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { transitionOrderToState, getNextOrderStates, addPaymentToOrder } from "~/providers/checkout/checkout";
import { getActiveOrder } from "~/providers/orders/order";
import { getRazorpayOrderId } from "~/providers/customPlugins/customPlugin";
import crypto from 'crypto';


interface RazorpayPaymentResponse {
    success: boolean
    orderCode?: string
    error?: string
    redirectUrl?: string
}



export const action: ActionFunction = async ({ request }) => {
  // try {
  //   const formData = await request.formData();
  //   const orderCode = formData.get("orderCode") as string;

  //   if (!orderCode) {
  //     return json<RazorpayOrderResponse>(
  //       { success: false, error: "Order code is required" },
  //       { status: 400 },
  //     );
  //   }

  //   const activeOrder = await getActiveOrder({ request });

  //   if (!activeOrder || activeOrder.code !== orderCode) {
  //     return json<RazorpayOrderResponse>(
  //       { success: false, error: "Invalid order" },
  //       { status: 400 },
  //     );
  //   }

  //   const { nextOrderStates } = await getNextOrderStates({ request });
  //   if (nextOrderStates.includes("ArrangingPayment")) {
  //     const transitionResult = await transitionOrderToState("ArrangingPayment", { request });

  //     if (transitionResult.transitionOrderToState?.__typename !== "Order") {
  //       return json<RazorpayOrderResponse>(
  //         {
  //           success: false,
  //           error:
  //             transitionResult.transitionOrderToState?.message ||
  //             "Failed to transition order state",
  //         },
  //         { status: 400 },
  //       );
  //     }
  //   }

  //   // 🔄 Dynamically get Razorpay order from backend (channel-specific)
  //   const razorpayOrderResult = await getRazorpayOrderId(activeOrder.id, request);

  //   if (!razorpayOrderResult || "message" in razorpayOrderResult) {
  //     return json<RazorpayOrderResponse>(
  //       {
  //         success: false,
  //         error:
  //           (razorpayOrderResult as any)?.message || "Failed to generate Razorpay order",
  //       },
  //       { status: 500 },
  //     );
  //   }

  //   return json<RazorpayOrderResponse>({
  //     success: true,
  //     razorpayOrderId: razorpayOrderResult.razorpayOrderId,
  //     keyId: razorpayOrderResult.keyId,
  //   });
  // } catch (error: any) {
  //   console.error("Razorpay order generation failed:", error);
  //   return json<RazorpayOrderResponse>(
  //     { success: false, error: error.message || "Internal server error" },
  //     { status: 500 },
  //   );
  // }
      const formData = await request.formData()
  
    const paymentId = formData.get("razorpay_payment_id") as string
    const orderId = formData.get("razorpay_order_id") as string
    const signature = formData.get("razorpay_signature") as string
    const orderCode = formData.get("orderCode") as string
    const amount = formData.get("amount") as string
    const currencyCode = formData.get("currencyCode") as string
 const paymentMethodCode = "online"
      if (!paymentId || !orderId || !signature) { return json<RazorpayPaymentResponse>({ success: false, error: "Missing payment information", }, { status: 400 },) }
      try {    // Transition order state if needed  
          const { nextOrderStates } = await getNextOrderStates({ request })
          if (nextOrderStates.includes("ArrangingPayment")) {
              const transitionResult = await transitionOrderToState("ArrangingPayment", { request })
              if (transitionResult.transitionOrderToState?.__typename !== "Order") {
                  console.error("Failed to transition order state:", transitionResult.transitionOrderToState?.message)
                  return json<RazorpayPaymentResponse>({ success: false, error: transitionResult.transitionOrderToState?.message || "Failed to transition order state", }, { status: 400 },)
              }
          }
          // Get the paymentNonce from form data (if sent)  
          const paymentNonce = formData.get("paymentNonce") as string
          // Create metadata exactly like offline payments do  
          const metadata = {
              method: "online", status: "completed", // Mark as completed since Razorpay confirmed payment  
               orderCode: orderCode,
              payment_details: { razorpay_payment_id: paymentId, razorpay_order_id: orderId, razorpay_signature: signature, },
          }
          console.log("Adding payment to order with metadata:", metadata)
          
          const result = await addPaymentToOrder({
              method: paymentMethodCode, metadata, ...(paymentNonce && { nonce: paymentNonce }),
              // Include nonce if provided   
          }, { request },)
          if (result.addPaymentToOrder.__typename === "Order") {
              console.log("Payment added successfully, redirecting to confirmation")
              return redirect(`/checkout/confirmation/${result.addPaymentToOrder.code}`)
          } else {
              console.error("Failed to add payment to order:", result.addPaymentToOrder?.message)
              return json<RazorpayPaymentResponse>({ success: false, error: result.addPaymentToOrder?.message || "Failed to add payment to order", }, { status: 400 },)
          }
      } catch (error: any) {
          console.error("Razorpay payment processing error:", error)
          return json<RazorpayPaymentResponse>({ success: false, error: error.message || "An error occurred processing the payment", }, { status: 500 },)
      }
 
};
