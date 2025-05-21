import { json, redirect } from "@remix-run/node" // Using json and redirect utilities from Remix [^1][^2][^3]
import type { ActionFunction } from "@remix-run/node"
import { addPaymentToOrder, transitionOrderToState, getNextOrderStates } from "~/providers/checkout/checkout"

interface RazorpayPaymentResponse {
  success: boolean
  orderCode?: string
  error?: string
  redirectUrl?: string
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  // Get payment details from form data
  const paymentId = formData.get("razorpay_payment_id") as string
  const orderId = formData.get("razorpay_order_id") as string
  const signature = formData.get("razorpay_signature") as string
  const orderCode = formData.get("orderCode") as string
  const amount = formData.get("amount") as string
  const currencyCode = formData.get("currencyCode") as string

  // IMPORTANT: Use "online" as the payment method code instead of "razorpay"
  // This should match what's configured in your backend
  const paymentMethodCode = "online"

  if (!paymentId || !orderId || !signature) {
    return json<RazorpayPaymentResponse>(
      {
        success: false,
        error: "Missing payment information",
      },
      { status: 400 },
    )
  }

  try {
    // In a production environment, you should verify the signature here
    // using the Razorpay SDK or API to ensure the payment data wasn't tampered with

    // Transition order state if needed
    const { nextOrderStates } = await getNextOrderStates({ request })
    if (nextOrderStates.includes("ArrangingPayment")) {
      const transitionResult = await transitionOrderToState("ArrangingPayment", { request })
      if (transitionResult.transitionOrderToState?.__typename !== "Order") {
        console.error("Failed to transition order state:", transitionResult.transitionOrderToState?.message)
        return json<RazorpayPaymentResponse>(
          {
            success: false,
            error: transitionResult.transitionOrderToState?.message || "Failed to transition order state",
          },
          { status: 400 },
        )
      }
    }

    // Add payment to order with the correct payment method code and metadata
    const metadata = {
        method: "online",
      amount: (Number(amount) / 100).toFixed(2) || 0,
      currencyCode: currencyCode || "INR",
      razorpay_payment_id: paymentId,
      razorpay_order_id: orderId,
      razorpay_signature: signature,
      orderCode: orderCode,
    
    }

    const result = await addPaymentToOrder(
      {
        method: paymentMethodCode,
        metadata,
      },
      { request },
    )

    if (result.addPaymentToOrder.__typename === "Order") {
      // IMPORTANT: Use redirect instead of json response for direct server-side redirection
      return redirect(`/checkout/confirmation/${result.addPaymentToOrder.code}`)
    } else {
      console.error("Failed to add payment to order:", result.addPaymentToOrder?.message)
      return json<RazorpayPaymentResponse>(
        {
          success: false,
          error: result.addPaymentToOrder?.message || "Failed to add payment to order",
        },
        { status: 400 },
      )
    }
  } catch (error: any) {
    console.error("Razorpay payment processing error:", error)
    return json<RazorpayPaymentResponse>(
      {
        success: false,
        error: error.message || "An error occurred processing the payment",
      },
      { status: 500 },
    )
  }
}
