"use client"

import type React from "react"

import { Outlet, useLoaderData, NavLink, Form, useLocation } from "@remix-run/react"
import { type ActionFunctionArgs, json } from "@remix-run/server-runtime"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import AddAddressCard from "~/components/account/AddAddressCard"
import EditAddressCard from "~/components/account/EditAddressCard"
import { type Address, ErrorCode, type ErrorResult } from "~/generated/graphql"
import { deleteCustomerAddress, updateCustomerAddress } from "~/providers/account/account"
import { getActiveCustomerAddresses, getActiveCustomerDetails } from "~/providers/customer/customer"
import { getFixedT } from "~/i18next.server"
import type { LoaderFunctionArgs } from "@remix-run/router"
import { useNavigate } from "@remix-run/react"
// shadcn/ui imports
import { Card, CardContent } from "~/components/ui/card"

// Lucide icons
import { MapPin, ShoppingBag, User, Menu, X, LogOut, Plus } from "lucide-react"
import { HighlightedButton } from "~/components/HighlightedButton"

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await getActiveCustomerAddresses({ request })
  const activeCustomerAddresses = res.activeCustomer

  // Also get customer details for sidebar
  const { activeCustomer } = await getActiveCustomerDetails({ request })

  return json({ activeCustomerAddresses, activeCustomer })
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const id = formData.get("id") as string | null
  const _action = formData.get("_action")
  const t = await getFixedT(request)

  // Verify that id is set
  if (!id || id.length === 0) {
    return json<ErrorResult>(
      {
        errorCode: ErrorCode.IdentifierChangeTokenInvalidError, // TODO: I dont think this error is 100% appropriate - decide later
        message: t("address.idError"),
      },
      {
        status: 400, // Bad request
      },
    )
  }

  if (_action === "setDefaultShipping") {
    updateCustomerAddress({ id, defaultShippingAddress: true }, { request })
    return null
  }

  if (_action === "setDefaultBilling") {
    updateCustomerAddress({ id, defaultBillingAddress: true }, { request })
    return null
  }

  if (_action === "deleteAddress") {
    const { success } = await deleteCustomerAddress(id, { request })
    return json(null, { status: success ? 200 : 400 })
  }

  return json<ErrorResult>(
    {
      message: t("common.unknowError"),
      errorCode: ErrorCode.UnknownError,
    },
    {
      status: 400,
    },
  )
}

export default function AccountAddresses() {
  const { activeCustomerAddresses, activeCustomer } = useLoaderData<typeof loader>()
  const { t } = useTranslation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    {
      name: t("account.details"),
      href: "/account",
      icon: User,
    },
    {
      name: t("account.addresses"),
      href: "/account/addresses",
      icon: MapPin,
    },
    {
      name: t("account.purchaseHistory"),
      href: "/account/history",
      icon: ShoppingBag,
    },
  ]
  const navigate = useNavigate()

  return (
    <>
      <Outlet />
      <div className="min-h-screen bg-gray-50 flex">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
            <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-white shadow-xl">
              <div className="flex h-full flex-col">
                <div className="flex h-16 items-center justify-between px-4 border-b">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <button
                    type="button"
                    className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <SidebarContent
                    navigation={navigation}
                    activeCustomer={activeCustomer}
                    t={t}
                    onNavigate={() => setSidebarOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop sidebar */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
          <div className="flex flex-col flex-grow bg-white border-r overflow-y-auto">
            <SidebarContent navigation={navigation} activeCustomer={activeCustomer} t={t} />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 lg:pl-64">
          {/* Mobile header */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-white px-4 shadow-sm lg:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-semibold">Addresses</h1>
          </div>

          {/* Page content */}
          <div className="bg-white min-h-screen">
            {/* Header Section */}
           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-6 py-8 border-b bg-white">
  <div>
    <h1 className="text-2xl lg:text-3xl font-bold">My Addresses</h1>
    <p className="text-muted-foreground mt-1 text-sm">Manage your shipping and billing addresses</p>
  </div>
  <HighlightedButton
    type="button"
    className="self-start lg:self-auto"
    onClick={() => navigate("/account/addresses/new")}
  >
    Add Address
  </HighlightedButton>
</div>






            {/* Main Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/*  Address Card */}
                {/* <Card className="border-dashed border-2 hover:border-gray-400 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Plus className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Add New Address</h3>
                    <p className="text-sm text-muted-foreground mb-4">Add a new shipping or billing address</p>
                    <AddAddressCard />
                  </CardContent>
                </Card> */}

                {/* Existing Addresses */}
                {activeCustomerAddresses?.addresses?.map((address) => (
                  <EditAddressCard address={address as Address} key={address.id} />
                ))}
              </div>

              {/* Empty state */}
              {(!activeCustomerAddresses?.addresses || activeCustomerAddresses.addresses.length === 0) && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No addresses yet</h3>
                  <p className="text-gray-500 mb-6">Add your first address to get started with faster checkout</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function SidebarContent({
  navigation,
  activeCustomer,
  t,
  onNavigate,
}: {
  navigation: any[]
  activeCustomer: any
  t: any
  onNavigate?: () => void
}) {
  const { firstName, lastName, emailAddress, phoneNumber } = activeCustomer || {}
  const user = { firstName, lastName, emailAddress, phoneNumber }

  const links = navigation.map((item) => ({
    to: item.href,
    label: item.name,
    icon: item.icon,
  }))

  return <Sidebar user={user} links={links} onNavigate={onNavigate} />
}

function Sidebar({
  user,
  links,
  onNavigate,
}: {
  user: { firstName: string; lastName: string; emailAddress: string; phoneNumber?: string }
  links: { to: string; label: string; icon: React.ElementType }[]
  onNavigate?: () => void
}) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col h-full bg-white">
      {/* User profile section */}
      <div className="px-6 py-8 border-b flex space-x-3">
        <a
          href="/home"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
        >
          <img src="/KK-Logo.png" alt="logo" className="w-32 h-auto" />
        </a>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onNavigate}
            end={to === "/account"}
            className={({ isActive }) =>
              `group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                : "text-muted-foreground hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={`h-5 w-5 mr-3 flex-shrink-0 ${isActive ? "text-blue-700" : ""}`} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Sign out */}
      <div className="px-4 py-6 border-t">
        <Form method="post" action="/api/logout">
          <button
            type="submit"
            className="group flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-accent-foreground hover:bg-accent rounded-md w-full transition-colors"
            onClick={() => {
              setTimeout(() => {
                window.location.href = "/"
              }, 50)
            }}
          >
            <LogOut className="h-5 w-5 mr-3 flex-shrink-0" />
            {t("account.signOut")}
          </button>
        </Form>
      </div>
    </div>
  )
}
