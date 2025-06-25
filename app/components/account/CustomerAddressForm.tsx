"use client"

import type React from "react"

import { withZod } from "@remix-validated-form/with-zod"
import { z } from "zod"
import type { RefObject } from "react"
import { ValidatedForm } from "remix-validated-form"
import type { Address, AvailableCountriesQuery } from "~/generated/graphql"
import { Input } from "~/components/Input"
import { Select } from "~/components/Select"
import { useTranslation } from "react-i18next"
import { cn } from "~/lib/utils"

export const validator = withZod(
  z.object({
    fullName: z.string().min(1, { message: "Name is required" }),
    // doorNo: z.string().min(1, { message: "Door number is required" }),
    city: z.string().min(1, { message: "City is required" }),
    countryCode: z.string().min(1, { message: "Country is required" }),
    postalCode: z.string().min(1, { message: "Pincode is required" }),
    province: z.string().min(1, { message: "State is required" }),
    streetLine1: z.string().min(1, { message: "Address is required" }),
    streetLine2: z.string().optional(),
    phone: z.string().min(1, { message: "Phone number is required" }),
    company: z.string().optional(),
  }),
)

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("flex w-full flex-col space-y-1", className)}>{children}</div>
}

const ModernInput = ({
  label,
  name,
  required = false,
  autoComplete,
  type = "text",
}: {
  label: string
  name: string
  required?: boolean
  autoComplete?: string
  type?: string
}) => (
  <LabelInputContainer>
    <label htmlFor={name} className="text-sm font-medium text-neutral-800">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <Input
      id={name}
      name={name}
      type={type}
      required={required}
      autoComplete={autoComplete}
      className="block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm placeholder-neutral-400 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/20"
    />
  </LabelInputContainer>
)

export default function CustomerAddressForm({
  address,
  formRef,
  submit,
  availableCountries,
}: {
  address?: Address
  formRef: RefObject<HTMLFormElement>
  submit: () => void
  availableCountries: AvailableCountriesQuery["availableCountries"]
}) {
  const { t } = useTranslation()

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden bg-white">
      {/* Form Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-neutral-800">New Address Information</h3>
          <p className="text-sm text-neutral-600">Please provide your complete address details for delivery</p>
        </div>

        <ValidatedForm
          id="editAddressForm"
          validator={validator}
          formRef={formRef}
          method="post"
          onSubmit={(data, event) => {
            console.log("Form data:", data)
            submit()
          }}
          defaultValues={{
            fullName: address?.fullName || "",
            city: address?.city || "",
            streetLine1: address?.streetLine1 || "",
            streetLine2: address?.streetLine2 || "",
            countryCode: address?.country?.code || "",
            postalCode: address?.postalCode || "",
            phone: address?.phoneNumber || "",
            company: address?.company || "",
            province: address?.province || "",
          }}
        >
          <input type="hidden" name="intent" value="updateAddress" />

          <div className="space-y-4">
            {/* Name - Full width */}
            <ModernInput label="Full Name" name="fullName" required autoComplete="name" />

            {/* Door No and Address in same row */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Company (Optional) - Full width */}
            {/* <ModernInput label="Company (Optional)" name="company" autoComplete="organization" /> */}
              <ModernInput label="Door No" name="streetLine2" required autoComplete="address-line2" />
              <div className="md:col-span-2">
                <ModernInput label="Address" name="streetLine1" required autoComplete="address-line1" />
              </div>
            </div>

            {/* City and State in same row */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <ModernInput label="City" name="city" required autoComplete="address-level2" />
              <ModernInput label="State/Province" name="province" required autoComplete="address-level1" />
            </div>

            {/* Country and Pincode in same row */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <LabelInputContainer>
                <label htmlFor="countryCode" className="text-sm font-medium text-neutral-800">
                  Country <span className="text-red-500">*</span>
                </label>
                <Select
                  name="countryCode"
                  required
                  className="block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm transition-all duration-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/20"
                >
                  <option value="">Select Country</option>
                  {availableCountries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </Select>
              </LabelInputContainer>
              <ModernInput label="Pincode" name="postalCode" required autoComplete="postal-code" />
            </div>

            {/* Phone Number - Full width */}
            <ModernInput label="Phone Number" name="phone" required type="tel" autoComplete="tel" />

          
          </div>

          <input type="submit" hidden />
        </ValidatedForm>
      </div>

      {/* Footer with Button */}
      <div className="border-t border-gray-200 px-6 py-4">
        <button
          type="submit"
          form="editAddressForm"
          className="group/btn relative h-11 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all duration-200 hover:shadow-lg"
        >
          Update Address
          <BottomGradient />
        </button>
      </div>
    </div>
  )
}
