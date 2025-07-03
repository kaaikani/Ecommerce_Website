"use client"
import {
  useLoaderData,
  useNavigate,
} from '@remix-run/react';
import { json } from '@remix-run/server-runtime';
import { useRef } from 'react';
import CustomerAddressForm from '~/components/account/CustomerAddressForm';
import { createCustomerAddress } from '~/providers/account/account';
import { getAvailableCountries } from '~/providers/checkout/checkout';
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node"
import {  redirect } from "@remix-run/node"
import { getFixedT } from "~/i18next.server"
import { ErrorCode, type ErrorResult } from "~/generated/graphql"

export async function loader({ request }: LoaderFunctionArgs) {
  const { availableCountries } = await getAvailableCountries({ request })
  return json({ availableCountries })
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const t = await getFixedT(request)

  const addressData = {
    fullName: formData.get("fullName") as string,
    streetLine1: formData.get("streetLine1") as string,
    streetLine2: (formData.get("streetLine2") as string) || undefined,
    city: formData.get("city") as string,
    province: formData.get("province") as string,
    postalCode: formData.get("postalCode") as string,
    countryCode: formData.get("countryCode") as string,
    phoneNumber: formData.get("phone") as string,
    company: (formData.get("company") as string) || undefined,
    defaultShippingAddress: formData.get("defaultShippingAddress") === "true",
    defaultBillingAddress: formData.get("defaultBillingAddress") === "true",
  }

  try {
    const result = await createCustomerAddress(addressData, { request })

    if (result && result.__typename === "Address") {
      return redirect("/account/addresses")
    } else {
      return json<ErrorResult>(
        {
          errorCode: ErrorCode.UnknownError,
          message: t("address.createError"),
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("Create address error:", error)
    return json<ErrorResult>(
      {
        errorCode: ErrorCode.UnknownError,
        message: t("address.createError"),
      },
      { status: 500 },
    )
  }
}

export default function NewAddress() {
  const { availableCountries } = useLoaderData<typeof loader>()
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = () => {
    // The form will handle submission automatically
    console.log("Form submitted")
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl">
        {/* Close button */}
        <button
          onClick={() => navigate("/account/addresses")}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-gray-400 hover:text-gray-600"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <CustomerAddressForm
          formRef={formRef}
          submit={handleSubmit}
          availableCountries={availableCountries}
          isEditing={false}
        />
      </div>
    </div>
  )
}
