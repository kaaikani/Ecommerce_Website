"use client"

import { useEffect, useCallback, useState } from "react"
import { useFetcher, useNavigate } from "@remix-run/react"
import { CreditCardIcon } from "@heroicons/react/24/solid"
import { useTranslation } from "react-i18next"
import { classNames } from "~/utils/class-names"
import type { CurrencyCode } from "~/generated/graphql"

interface RazorpayPaymentsProps {
  orderCode: string
  amount: number
  currencyCode: string | CurrencyCode
  customerEmail?: string
  customerName?: string
  customerPhone?: string
  razorpayKeyId: string
}

interface RazorpayOrderResponse {
  orderId?: string
  success?: boolean
  error?: string
}

interface RazorpayPaymentResponse {
  razorpay_payment_id: string
  razorpay_order_id: string
  razorpay_signature: string
}

export function RazorpayPayments({
  orderCode,
  amount,
  currencyCode,
  customerEmail = "",
  customerName = "",
  customerPhone = "",
  razorpayKeyId,
}: RazorpayPaymentsProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fetcher = useFetcher()
  const navigate = useNavigate()
  const { t } = useTranslation()

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true

    script.onload = () => setScriptLoaded(true)
    script.onerror = () => {
      setScriptLoaded(false)
      setError("Failed to load Razorpay script")
    }

    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handlePayment = useCallback(async () => {
    if (!razorpayKeyId) {
      setError("Razorpay configuration is missing")
      return
    }

    if (!scriptLoaded || !(window as any).Razorpay) {
      setError("Razorpay script not loaded yet. Please try again shortly.")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Create a Razorpay order
      const orderResponse = await fetch("/api/razorpay-create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount, // Amount in smallest currency unit
          currency: currencyCode,
          orderCode: orderCode,
        }),
      })

      const orderData = (await orderResponse.json()) as RazorpayOrderResponse

      if (!orderResponse.ok || !orderData.orderId) {
        throw new Error(orderData.error || "Failed to create Razorpay order")
      }

      const options = {
        key: razorpayKeyId,
        amount: amount,
        currency: currencyCode || "INR",
        name: "Kaaikani",
        description: `Payment for order ${orderCode}`,
        order_id: orderData.orderId,
        handler: (response: RazorpayPaymentResponse) => {
          const formData = new FormData()
          formData.append("paymentMethodCode", "online") // Changed to match backend expectation
          formData.append("paymentNonce", response.razorpay_payment_id)
          formData.append("razorpay_payment_id", response.razorpay_payment_id)
          formData.append("razorpay_order_id", response.razorpay_order_id)
          formData.append("razorpay_signature", response.razorpay_signature)
          formData.append("orderCode", orderCode)
          formData.append("amount", amount.toString())
          formData.append("currencyCode", currencyCode.toString())

          // Submit to the payment processing endpoint
          // The server will handle the redirect
          fetcher.submit(formData, {
            method: "post",
            action: "/api/razorpay",
          })
        },
        prefill: {
          name: customerName || "Customer",
          email: customerEmail || "customer@example.com",
          contact: customerPhone || "",
        },
        theme: {
          color: "#3B82F6", // Adjust to match your primary color
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false)
          },
        },
      }

      const rzp = new (window as any).Razorpay(options)
      rzp.open()
    } catch (error: any) {
      console.error("Razorpay payment error:", error)
      setError(error.message || "Failed to initialize payment")
      setIsLoading(false)
    }
  }, [
    razorpayKeyId,
    amount,
    currencyCode,
    orderCode,
    customerName,
    customerEmail,
    customerPhone,
    fetcher,
    scriptLoaded,
  ])

  // Handle fetcher state changes
  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      const data = fetcher.data as { success?: boolean; error?: string }
      if (data.error) {
        setError(data.error)
        setIsLoading(false)
      }
      // We don't need to handle success case here anymore
      // as the server will handle the redirect
    }
  }, [fetcher.state, fetcher.data])

  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-gray-600 text-sm p-6">{t("checkout.onlinePayment")}</p>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md w-full">
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <button
        type="button"
        onClick={handlePayment}
        disabled={!scriptLoaded || isLoading || fetcher.state !== "idle"}
        className={classNames(
          scriptLoaded && !isLoading && fetcher.state === "idle"
            ? "bg-primary-600 hover:bg-primary-700"
            : "bg-gray-400",
          "flex px-6 items-center justify-center space-x-2 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 w-full md:w-auto",
        )}
      >
        <CreditCardIcon className="w-5 h-5" />
        <span>
          {isLoading || fetcher.state !== "idle"
            ? t("checkout.paymentProcessing")
            : !scriptLoaded
              ? t("checkout.paymentLoading")
              : `${t("checkout.payWith")} Online`}
        </span>
        {(isLoading || fetcher.state !== "idle") && (
          <svg
            aria-hidden="true"
            className="ml-3 w-4 h-4 text-indigo-100 animate-spin dark:text-gray-100 fill-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        )}
      </button>
    </div>
  )
}
