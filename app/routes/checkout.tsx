"use client"

import { type FormEvent, useState, useEffect } from "react"
import { Form, useLoaderData, useOutletContext } from "@remix-run/react"
import type { OutletContext } from "~/types"
import { type DataFunctionArgs, json, redirect } from "@remix-run/server-runtime"
import {
  getAvailableCountries,
  getEligibleShippingMethods,
  getEligiblePaymentMethods,
  createStripePaymentIntent,
  generateBraintreeClientToken,
  getNextOrderStates,
  transitionOrderToState,
  addPaymentToOrder,
} from "~/providers/checkout/checkout"
import { shippingFormDataIsValid } from "~/utils/validation"
import { getSessionStorage } from "~/sessions"
import { classNames } from "~/utils/class-names"
import { getActiveCustomerAddresses } from "~/providers/customer/customer"
import { AddressForm } from "~/components/account/AddressForm"
import { ShippingMethodSelector } from "~/components/checkout/ShippingMethodSelector"
import { ShippingAddressSelector } from "~/components/checkout/ShippingAddressSelector"
import { getActiveOrder, getCouponCodeList } from "~/providers/orders/order"
import { useTranslation } from "react-i18next"
import AddAddressCard from "~/components/account/AddAddressCard"
import { ErrorCode, type ErrorResult } from "~/generated/graphql"
import { CartContents } from "~/components/cart/CartContents"
import { CartTotals } from "~/components/cart/CartTotals"
import { Link } from "@remix-run/react"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { RazorpayPayments } from "~/components/checkout/razorpay/RazorpayPayments"
import { OrderInstructions } from "~/components/checkout/OrderInstructions"
import { otherInstructions } from "~/providers/customPlugins/customPlugin"

export async function loader({ request }: DataFunctionArgs) {
  const session = await getSessionStorage().then((sessionStorage) =>
    sessionStorage.getSession(request?.headers.get("Cookie")),
  )

  const activeOrder = await getActiveOrder({ request })
  const couponCodes = await getCouponCodeList({ request })

  //check if there is an active order if not redirect to homepage
  if (!session || !activeOrder || !activeOrder.active || activeOrder.lines.length === 0) {
    return redirect("/")
  }

  const { availableCountries } = await getAvailableCountries({ request })
  const { eligibleShippingMethods } = await getEligibleShippingMethods({
    request,
  })
  const { activeCustomer } = await getActiveCustomerAddresses({ request })
  const { eligiblePaymentMethods } = await getEligiblePaymentMethods({
    request,
  })

  // Add this after getting eligiblePaymentMethods
  // console.log(
  //   "Eligible payment methods:",
  //   eligiblePaymentMethods.map((m) => ({ id: m.id, code: m.code, name: m.name })),
  // )

  const error = session.get("activeOrderError")

  let stripePaymentIntent: string | undefined
  let stripePublishableKey: string | undefined
  let stripeError: string | undefined

  if (eligiblePaymentMethods.find((method) => method.code.includes("stripe"))) {
    try {
      const stripePaymentIntentResult = await createStripePaymentIntent({
        request,
      })
      stripePaymentIntent = stripePaymentIntentResult.createStripePaymentIntent ?? undefined
      stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY
    } catch (e: any) {
      stripeError = e.message
    }
  }

  let brainTreeKey: string | undefined
  let brainTreeError: string | undefined

  if (eligiblePaymentMethods.find((method) => method.code.includes("braintree"))) {
    try {
      const generateBrainTreeTokenResult = await generateBraintreeClientToken({
        request,
      })
      brainTreeKey = generateBrainTreeTokenResult.generateBraintreeClientToken ?? ""
    } catch (e: any) {
      brainTreeError = e.message
    }
  }

  const orderInstructions = activeOrder?.customFields?.otherInstructions || ""

  return json({
    availableCountries,
    eligibleShippingMethods,
    activeCustomer,
    error,
    activeOrder,
    couponCodes,
    eligiblePaymentMethods,
    stripePaymentIntent,
    stripePublishableKey,
    stripeError,
    brainTreeKey,
    brainTreeError,
    orderInstructions,
  })
}

export async function action({ request }: DataFunctionArgs) {
  const body = await request.formData()
  const action = body.get("action")

  // Get active order to include amount in metadata
  const activeOrder = await getActiveOrder({ request })

  if (action === "setOrderCustomer" || action === "setCheckoutShipping") {
    // Handle customer and shipping data
    return json({ success: true })
  }

  if (action === "updateOrderInstructions") {
    const orderId = body.get("orderId")
    const instructions = body.get("instructions")

    if (typeof orderId === "string" && typeof instructions === "string") {
      try {
        await otherInstructions(orderId, instructions, { request })
        return json({ success: true })
      } catch (error) {
        return json({ success: false, error: "Failed to save instructions" })
      }
    }

    return json({ success: false, error: "Invalid data" })
  }

  const paymentMethodCode = body.get("paymentMethodCode")
  const paymentNonce = body.get("paymentNonce")

  if (typeof paymentMethodCode === "string") {
    const { nextOrderStates } = await getNextOrderStates({
      request,
    })

    if (nextOrderStates.includes("ArrangingPayment")) {
      const transitionResult = await transitionOrderToState("ArrangingPayment", { request })

      if (transitionResult.transitionOrderToState?.__typename !== "Order") {
        throw new Response("Not Found", {
          status: 400,
          statusText: transitionResult.transitionOrderToState?.message,
        })
      }
    }

    // Create metadata object based on payment method
    let metadata = {}

    if (paymentMethodCode === "online" && paymentNonce) {
      try {
        // For Razorpay payments, parse the JSON metadata
        const paymentData = JSON.parse(paymentNonce as string)
        metadata = {
          method: "online",
          amount: (Number(paymentData.amount) / 100).toFixed(2) || 0,
          currencyCode: paymentData.currencyCode || "INR",
          razorpay_payment_id: paymentData.razorpay_payment_id,
          razorpay_order_id: paymentData.razorpay_order_id,
          razorpay_signature: paymentData.razorpay_signature,
          orderCode: paymentData.orderCode,
        }
      } catch (e) {
        console.error("Error parsing payment nonce:", e)
        metadata = { nonce: paymentNonce }
      }
    } else if (paymentMethodCode === "offline") {
      // For offline payments, include basic metadata with amount
      metadata = {
        method: "offline",
        amount: Number(((activeOrder?.totalWithTax || 0) / 100).toFixed(2)),
        currencyCode: activeOrder?.currencyCode || "INR",
      }
    }

    console.log("Adding payment to order with:", {
      method: paymentMethodCode,
      metadata,
    })

    const result = await addPaymentToOrder({ method: paymentMethodCode, metadata }, { request })

    if (result.addPaymentToOrder.__typename === "Order") {
      return redirect(`/checkout/confirmation/${result.addPaymentToOrder.code}`)
    } else {
      throw new Response("Not Found", {
        status: 400,
        statusText: result.addPaymentToOrder?.message,
      })
    }
  }

  return json({ success: false })
}

export default function CheckoutPage() {
  const {
    availableCountries,
    eligibleShippingMethods,
    activeCustomer,
    error,
    activeOrder,
    couponCodes,
    eligiblePaymentMethods,
    orderInstructions,
  } = useLoaderData<typeof loader>()

  const { activeOrderFetcher, removeItem, adjustOrderLine } = useOutletContext<OutletContext>()
  const [customerFormChanged, setCustomerFormChanged] = useState(false)
  const [addressFormChanged, setAddressFormChanged] = useState(false)
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0)
  const [currentStep, setCurrentStep] = useState<"shipping" | "payment">("shipping")
  const { t } = useTranslation()

  const { customer, shippingAddress } = activeOrder ?? {}
  const isSignedIn = !!activeCustomer?.id
  const addresses = activeCustomer?.addresses ?? []
  const defaultFullName = shippingAddress?.fullName ?? (customer ? `${customer.firstName} ${customer.lastName}` : ``)

  const canProceedToPayment =
    customer &&
    ((shippingAddress?.streetLine1 && shippingAddress?.postalCode) || selectedAddressIndex != null) &&
    activeOrder?.shippingLines?.length &&
    activeOrder?.lines?.length

  const submitCustomerForm = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget)
    const { emailAddress, firstName, lastName } = Object.fromEntries<any>(formData.entries())
    const isValid = event.currentTarget.checkValidity()
    if (customerFormChanged && isValid && emailAddress && firstName && lastName) {
      activeOrderFetcher.submit(formData, {
        method: "post",
        action: "/api/active-order",
      })
      setCustomerFormChanged(false)
    }
  }

  const submitAddressForm = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget)
    const isValid = event.currentTarget.checkValidity()
    if (addressFormChanged && isValid) {
      setShippingAddress(formData)
    }
  }

  const submitSelectedAddress = (index: number) => {
    const selectedAddress = activeCustomer?.addresses?.[index]
    if (selectedAddress) {
      setSelectedAddressIndex(index)
      const formData = new FormData()
      Object.keys(selectedAddress).forEach((key) => formData.append(key, (selectedAddress as any)[key]))
      formData.append("countryCode", selectedAddress.country.code)
      formData.append("action", "setCheckoutShipping")
      setShippingAddress(formData)
    }
  }

  function setShippingAddress(formData: FormData) {
    if (shippingFormDataIsValid(formData)) {
      activeOrderFetcher.submit(formData, {
        method: "post",
        action: "/api/active-order",
      })
      setAddressFormChanged(false)
    }
  }

  const submitSelectedShippingMethod = (value?: string) => {
    if (value) {
      activeOrderFetcher.submit(
        {
          action: "setShippingMethod",
          shippingMethodId: value,
        },
        {
          method: "post",
          action: "/api/active-order",
        },
      )
    }
  }

  function proceedToPayment() {
    setCurrentStep("payment")
    window.scrollTo(0, 0)
  }

  const paymentError = getPaymentError(error)

  // Auto-select default shipping address on component mount
  useEffect(() => {
    if (isSignedIn && activeCustomer?.addresses?.length && !addressFormChanged && !shippingAddress?.streetLine1) {
      const defaultShippingAddress = activeCustomer.addresses.find((addr) => addr.defaultShippingAddress)
      const addressToShow = defaultShippingAddress || activeCustomer.addresses[0]

      if (addressToShow) {
        const formData = new FormData()
        Object.keys(addressToShow).forEach((key) => formData.append(key, (addressToShow as any)[key]))
        formData.append("countryCode", addressToShow.country.code)
        formData.append("action", "setCheckoutShipping")
        setShippingAddress(formData)
      }
    }
  }, [isSignedIn, activeCustomer?.addresses, addressFormChanged, shippingAddress?.streetLine1])

  return (
    <div className="bg-gray-50">
      <div className="lg:max-w-7xl max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">{t("cart.checkout")}</h2>

        {/* Checkout Progress */}
        <nav aria-label={t("cart.progress")} className="hidden sm:block pb-8 mb-8 border-b border-gray-200">
          <ol role="list" className="flex space-x-4 justify-center">
            {["shipping", "payment", "confirmation"].map((step, stepIdx) => (
              <li key={step} className="flex items-center">
                {step === currentStep ||
                  (step === "shipping" && currentStep === "payment") ||
                  (step === "confirmation" && false) ? (
                  <span aria-current="page" className="text-primary-600 font-medium">
                    {t(`checkout.steps.${step}`)}
                  </span>
                ) : (
                  <span className="text-gray-500">{t(`checkout.steps.${step}`)}</span>
                )}
                {stepIdx !== 2 ? <ChevronRightIcon className="w-5 h-5 text-gray-300 ml-4" aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
            {currentStep === "shipping" ? (
              <>
                {/* Customer Information */}
                <div>
                  <h2 className="text-lg font-medium text-gray-900">{t("checkout.detailsTitle")}</h2>

                  {/* {isSignedIn ? (
                    <div>
                      <p className="mt-2 text-gray-600">
                        {customer?.firstName} {customer?.lastName}
                      </p>
                      <p>{customer?.emailAddress}</p>
                    </div>
                  ) : (
                    <Form
                      method="post"
                      action="/api/active-order"
                      onBlur={submitCustomerForm}
                      onChange={() => setCustomerFormChanged(true)}
                      hidden={isSignedIn}
                    >
                      <input type="hidden" name="action" value="setOrderCustomer" />
                      <div className="mt-4">
                        <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
                          {t("account.emailAddress")}
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            id="emailAddress"
                            name="emailAddress"
                            autoComplete="email"
                            defaultValue={customer?.emailAddress}
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                          />
                        </div>
                        {error?.errorCode === "EMAIL_ADDRESS_CONFLICT_ERROR" && (
                          <p className="mt-2 text-sm text-red-600" id="email-error">
                            {error.message}
                          </p>
                        )}
                      </div>
                      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            {t("account.firstName")}
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              autoComplete="given-name"
                              defaultValue={customer?.firstName}
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            {t("account.lastName")}
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              autoComplete="family-name"
                              defaultValue={customer?.lastName}
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </Form>
                  )} */}
                </div>

                {/* Shipping Address */}
                <Form
                  method="post"
                  action="/api/active-order"
                  onBlur={submitAddressForm}
                  onChange={() => setAddressFormChanged(true)}
                >
                  <input type="hidden" name="action" value="setCheckoutShipping" />
                  <div className="mt-10 ">
                    {/* <h2 className="text-lg font-medium text-gray-900">{t("checkout.shippingTitle")}</h2> */}
                  </div>
                  {isSignedIn && activeCustomer.addresses?.length ? (
                    <div className="mt-4 bg-white border rounded-lg shadow-sm p-4">
                      {(() => {
                        const defaultShippingAddress = activeCustomer.addresses.find(
                          (addr) => addr.defaultShippingAddress,
                        )
                        const addressToShow = defaultShippingAddress || activeCustomer.addresses[0]

                        return (
                          <>
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="text-sm font-medium text-gray-900">
                                {defaultShippingAddress
                                  ? "Default Shipping Address"
                                  : "Saved Address"}
                              </h3>
                              <Link
                                to="/account/addresses"
                                className="text-sm font-medium text-primary-600 hover:text-primary-500"
                              >
                                {t("common.edit")}
                              </Link>
                            </div>

                            <div className="text-sm text-gray-700 leading-5">
                              <p className="font-medium">
                                {addressToShow?.fullName} • {addressToShow?.phoneNumber}
                              </p>
                              <p className="text-gray-600">
                                {[
                                  addressToShow?.streetLine1,
                                  addressToShow?.streetLine2,
                                  addressToShow?.city,
                                  addressToShow?.province,
                                  addressToShow?.postalCode,
                                  addressToShow?.country?.name,
                                ]
                                  .filter(Boolean)
                                  .join(', ')}
                              </p>
                            </div>


                            <div className="mt-4 flex space-x-3">
                              <button
                                type="button"
                                onClick={() => {
                                  setAddressFormChanged(true)
                                }}
                                className="text-sm text-primary-600 hover:text-primary-500 font-medium"
                              >
                                UseAnotherAddress
                              </button>
                            </div>
                          </>
                        )
                      })()}

                      {/* Show address selector or form if user clicked "Use another address" */}
                      {addressFormChanged && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <h3 className="text-sm font-medium text-gray-900 mb-4">
                            Select Another Address
                          </h3>
                          <ShippingAddressSelector
                            addresses={activeCustomer.addresses}
                            selectedAddressIndex={selectedAddressIndex}
                            onChange={submitSelectedAddress}
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <AddressForm
                      availableCountries={activeOrder ? availableCountries : undefined}
                      address={shippingAddress}
                      defaultFullName={defaultFullName}
                    ></AddressForm>
                  )}
                </Form>
                {/* <AddAddressCard /> */}

                {/* Shipping Method */}
                <div className="mt-10 border-t border-gray-200 pt-10">
                  <ShippingMethodSelector
                    eligibleShippingMethods={eligibleShippingMethods}
                    currencyCode={activeOrder?.currencyCode}
                    shippingMethodId={activeOrder?.shippingLines[0]?.shippingMethod.id ?? ""}
                    onChange={submitSelectedShippingMethod}
                  />
                </div>

                {/* Continue to Payment Button */}
                <button
                  type="button"
                  disabled={!canProceedToPayment}
                  onClick={proceedToPayment}
                  className={classNames(
                    canProceedToPayment ? "bg-primary-600 hover:bg-primary-700" : "bg-gray-400",
                    "flex w-full items-center justify-center space-x-2 mt-10 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                  )}
                >
                  <span>{t("checkout.continueToPayment")}</span>
                </button>
              </>
            ) : (
              <>
                {currentStep === "payment" && (
                  <>
                    {/* Payment Methods */}
                    <div className="mb-6">
                      <h2 className="text-lg font-medium text-gray-900 mb-6">{t("checkout.paymentTitle")}</h2>

                      <div className="flex flex-col items-center divide-gray-200 divide-y space-y-6">
                        {eligiblePaymentMethods.map((method) => (
                          <div key={method.id} className="py-6 w-full">
                            <h3 className="text-base font-medium text-gray-900 mb-4">{method.name}</h3>
                            {method.code === "online" ? (
                              <RazorpayPayments
                                orderCode={activeOrder?.code ?? ""}
                                amount={activeOrder?.totalWithTax ?? 0}
                                currencyCode={activeOrder?.currencyCode ?? "INR"}
                                customerEmail={customer?.emailAddress ?? ""}
                                customerName={`${customer?.firstName ?? ""} ${customer?.lastName ?? ""}`.trim()}
                                customerPhone={shippingAddress?.phoneNumber ?? ""}
                              />
                            ) : method.code === "offline" ? (
                              <Form method="post">
                                <input type="hidden" name="paymentMethodCode" value="offline" />
                                <input
                                  type="hidden"
                                  name="paymentNonce"
                                  value={JSON.stringify({
                                    method: "offline",
                                    status: "pending",
                                    amount: activeOrder?.totalWithTax || 0,
                                    currencyCode: activeOrder?.currencyCode || "INR",
                                    orderCode: activeOrder?.code || "",
                                  })}
                                />
                                <div className="w-full">
                                  <p className="text-sm text-gray-500 mb-4">
                                    Pay with cash when your order is delivered.
                                  </p>
                                  <button
                                    type="submit"
                                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-3 px-4 text-base font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                  >
                                    Place Order
                                  </button>
                                </div>
                              </Form>
                            ) : (
                              <div className="text-sm text-gray-500">Payment method "{method.code}" not supported</div>
                            )}
                          </div>
                        ))}
                        {!eligiblePaymentMethods.find((m) => m.code === "online") && (
                          <div className="py-6 w-full">
                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                              <p className="text-sm text-yellow-800">
                                Online payment is not available. Please contact support if you need to pay online.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Back to Shipping Button */}
                    <button
                      type="button"
                      onClick={() => setCurrentStep("shipping")}
                      className="w-full mb-4 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      {t("checkout.backToShipping")}
                    </button>
                  </>
                )}
              </>
            )}
          </div>

          {/* Order Summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900 mb-6">{t("order.summary")}</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <CartContents
                orderLines={activeOrder?.lines ?? []}
                currencyCode={activeOrder?.currencyCode!}
                editable={currentStep === "shipping"}
                removeItem={removeItem}
                adjustOrderLine={adjustOrderLine}
              />
              <div className="mt-4">
                <Link to="/coupon">
                  <button
                    type="button"
                    className="w-full bg-primary-600 text-white font-medium py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                  >
                    {t("checkout.availOffer")}
                  </button>
                </Link>
              </div>
              <CartTotals order={activeOrder as any} />

              {/* Order Instructions */}
              {activeOrder?.id && (
                <OrderInstructions
                  orderId={activeOrder.id}
                  initialValue={orderInstructions}
                  disabled={currentStep === "payment"}
                />
              )}

              {/* Shipping Address Summary (when on payment step) */}
              {currentStep === "payment" && shippingAddress && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{t("checkout.shippingSummary")}</h3>
                  <div className="text-sm text-gray-600">
                    <p>{shippingAddress.fullName}</p>
                    <p>{shippingAddress.streetLine1}</p>
                    {shippingAddress.streetLine2 && <p>{shippingAddress.streetLine2}</p>}
                    <p>
                      {shippingAddress.city}, {shippingAddress.province} {shippingAddress.postalCode}
                    </p>
                    <p>{shippingAddress.countryCode}</p>
                  </div>

                  {activeOrder?.shippingLines?.[0]?.shippingMethod && (
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">{t("checkout.shippingMethod")}</h3>
                      <p className="text-sm text-gray-600">
                        {activeOrder.shippingLines[0].shippingMethod.name} -{activeOrder.currencyCode}
                        {activeOrder.shippingLines[0].priceWithTax}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function getPaymentError(error?: ErrorResult): string | undefined {
  if (!error || !error.errorCode) {
    return undefined
  }
  switch (error.errorCode) {
    case ErrorCode.OrderPaymentStateError:
    case ErrorCode.IneligiblePaymentMethodError:
    case ErrorCode.PaymentFailedError:
    case ErrorCode.PaymentDeclinedError:
    case ErrorCode.OrderStateTransitionError:
    case ErrorCode.NoActiveOrderError:
      return error.message
  }
}
