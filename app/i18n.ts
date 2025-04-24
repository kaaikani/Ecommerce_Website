export default {
  supportedLngs: ['en', 'es', 'pt', 'pt-BR'],
  fallbackLng: 'en',
  // Disabling suspense is recommended
  react: { useSuspense: false },
  backend: {
    loadPath: '../public/locales/{{lng}}/{{ns}}.json',
  },
};
// Assuming you have a similar structure for translations
export const resources = {
  en: {
    checkout: {
      pay: "Pay Now",
      paymentProcessing: "Processing...",
      paymentLoading: "Loading...",
      braintreeError: "Braintree payment unavailable",
      stripeError: "Stripe payment unavailable",
      razorpayError: "Razorpay payment unavailable",
      razorpayScriptError: "Failed to load Razorpay payment gateway",
      razorpayNotLoaded: "Razorpay payment gateway not loaded",
      razorpayPaymentError: "Payment error: {{message}}",
      razorpayPaymentFailed: "Payment failed: {{message}}",
      razorpayInitError: "Failed to initialize Razorpay payment",
      razorpayCancelled: "Payment cancelled",
    },
  },
  // Add other languages as needed
};