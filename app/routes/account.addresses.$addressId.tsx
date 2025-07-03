"use client"

import { useActionData, useLoaderData, useNavigate, useSubmit, useNavigation } from "@remix-run/react"
import { type DataFunctionArgs, json, redirect } from "@remix-run/server-runtime"
import { useRef, useEffect } from "react"
import { validationError } from "remix-validated-form"
import Modal from "~/components/modal/Modal"
import type { Address } from "~/generated/graphql"
import useToggleState from "~/utils/use-toggle-state"
import CustomerAddressForm, { validator } from "~/components/account/CustomerAddressForm"
import { updateCustomerAddress } from "~/providers/account/account"
import { getAvailableCountries } from "~/providers/checkout/checkout"
import { getActiveCustomerAddresses } from "~/providers/customer/customer"
import { useTranslation } from "react-i18next"

export async function loader({ request, params }: DataFunctionArgs) {
  const { activeCustomer } = await getActiveCustomerAddresses({ request })
  const address = activeCustomer?.addresses?.find((address) => address.id === params.addressId)

  if (!address) {
    return redirect("/account/addresses")
  }

  const { availableCountries } = await getAvailableCountries({ request })
  return json({ address, availableCountries })
}

export async function action({ request, params }: DataFunctionArgs) {
  const body = await request.formData()
  const result = await validator.validate(body)

  if (result.error) {
    return validationError(result.error)
  }

  const { data } = result

  // Handle the address type and default flags
  const addressTypeData: any = {
    id: params.addressId!,
    city: data.city,
    company: data.company,
    countryCode: data.countryCode,
    fullName: data.fullName,
    phoneNumber: data.phone,
    postalCode: data.postalCode,
    province: data.province,
    streetLine1: data.streetLine1,
    streetLine2: data.streetLine2,
  }

  // Add default address flags if they exist in the form data
  if (data.defaultShippingAddress !== undefined) {
    addressTypeData.defaultShippingAddress = data.defaultShippingAddress === "true"
  }
  if (data.defaultBillingAddress !== undefined) {
    addressTypeData.defaultBillingAddress = data.defaultBillingAddress === "true"
  }

  await updateCustomerAddress(addressTypeData, { request })

  return json({
    saved: true,
  })
}

export default function EditAddress() {
  const { address, availableCountries } = useLoaderData<typeof loader>()
  const actionData = useActionData<{ saved?: boolean }>()
  const navigation = useNavigation()
  const navigate = useNavigate()
  const { state, close } = useToggleState(true)
  const formRef = useRef<HTMLFormElement>(null)
  const { t } = useTranslation()
  const submit = useSubmit()

  useEffect(() => {
    if (actionData?.saved) {
      close()
    }
  }, [actionData])

  const submitForm = () => {
    submit(formRef.current)
  }

  const afterClose = () => {
    navigate(-1)
  }

  return (
    <div>
      <Modal isOpen={state} close={close} afterClose={afterClose}>
        <Modal.Title></Modal.Title>
        <Modal.Body>
          <CustomerAddressForm
            address={address as Address}
            availableCountries={availableCountries}
            formRef={formRef}
            submit={submitForm}
            isEditing={true} // This is the key prop that was missing!
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}
