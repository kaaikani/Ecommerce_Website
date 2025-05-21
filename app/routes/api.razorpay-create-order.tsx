import { json } from "@remix-run/node"
import type { ActionFunction } from "@remix-run/node"

interface RazorpayOrderRequest {
  amount: number
  currency: string
  orderCode: string
}

interface RazorpayOrderResponse {
  id: string
  entity: string
  amount: number
  amount_paid: number
  amount_due: number
  currency: string
  receipt: string
  status: string
  attempts: number
  notes: Record<string, string>
  created_at: number
}

export const action: ActionFunction = async ({ request }) => {
  try {
    // Get request data with proper typing
    const requestBody = (await request.json()) as RazorpayOrderRequest
    const { amount, currency, orderCode } = requestBody

    if (!amount || !currency) {
      return json({ error: "Amount and currency are required" }, { status: 400 })
    }

    // Get Razorpay credentials from environment variables
    const razorpayKeyId = process.env.RAZORPAY_KEY_ID
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET

    if (!razorpayKeyId || !razorpayKeySecret) {
      console.error("Razorpay credentials not configured")
      return json({ error: "Payment gateway not properly configured" }, { status: 500 })
    }

    // Create a receipt ID
    const receiptId = `receipt_${orderCode || Date.now()}`

    // Create Razorpay order
    const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString("base64")}`,
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
        notes: {
          orderCode: orderCode || "",
        },
      }),
    })

    // Type the response data
    const data = (await razorpayResponse.json()) as RazorpayOrderResponse | { error: { description: string } }

    // Check if there's an error in the response
    if (!razorpayResponse.ok || "error" in data) {
      console.error("Razorpay API error:", data)
      return json(
        {
          error: "error" in data ? data.error.description : "Failed to create Razorpay order",
        },
        { status: razorpayResponse.status },
      )
    }

    return json({
      orderId: data.id,
      success: true,
    })
  } catch (error: any) {
    console.error("Razorpay order creation failed:", error)
    return json(
      {
        error: error.message || "Internal server error",
        success: false,
      },
      { status: 500 },
    )
  }
}
