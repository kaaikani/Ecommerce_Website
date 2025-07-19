'use client';

import {
  json,
  redirect,
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
} from '@remix-run/server-runtime';
import { useLoaderData, useNavigate, useSubmit } from '@remix-run/react';
import { useRef } from 'react';
import CustomerAddressForm from '~/components/account/CustomerAddressForm';
import { createCustomerAddress } from '~/providers/account/account';
import { getActiveCustomerDetails } from '~/providers/customer/customer';
import { getFixedT } from '~/i18next.server';
import type { ErrorResult } from '~/generated/graphql';
import { ErrorCode } from '~/generated/graphql';
import { getChannelPostalcodes } from '~/lib/hygraph';
import { getSessionStorage } from '~/sessions';
import { getChannelsByCustomerPhonenumber } from '~/providers/customPlugins/customPlugin';

// Define the expected activeCustomer type for CustomerAddressForm
type ActiveCustomerFormType =
  | {
      firstName?: string | undefined;
      lastName?: string | undefined;
      phoneNumber?: string | undefined;
    }
  | undefined;

export async function loader({ request }: LoaderFunctionArgs) {
  const { activeCustomer } = await getActiveCustomerDetails({ request });

  if (!activeCustomer) {
    const sessionStorage = await getSessionStorage();
    const session = await sessionStorage.getSession(
      request.headers.get('Cookie'),
    );

    session.unset('authToken');
    session.unset('channelToken');

    return redirect('/sign-in', {
      headers: {
        'Set-Cookie': await sessionStorage.commitSession(session),
      },
    });
  }

  // Transform activeCustomer to match CustomerAddressForm prop type
  const transformedActiveCustomer: ActiveCustomerFormType = {
    firstName: activeCustomer.firstName,
    lastName: activeCustomer.lastName,
    phoneNumber: activeCustomer.phoneNumber ?? undefined,
  };

  // Fetch channel data using the customer's phone number
  const phoneNumber = transformedActiveCustomer.phoneNumber;
  let channelCode = '';
  if (phoneNumber) {
    const channels = await getChannelsByCustomerPhonenumber(phoneNumber);
    channelCode = channels[0]?.code || '';
  }

  // Fetch Hygraph channel postalcodes
  const channelPostalcodes = await getChannelPostalcodes();

  return json({
    activeCustomer: transformedActiveCustomer,
    channelCode,
    channelPostalcodes,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const t = await getFixedT(request);

  const addressData = {
    fullName: formData.get('fullName') as string,
    streetLine1: formData.get('streetLine1') as string,
    streetLine2: (formData.get('streetLine2') as string) || undefined,
    city: formData.get('city') as string,
    postalCode: formData.get('postalCode') as string,
    phoneNumber: formData.get('phone') as string,
    company: (formData.get('company') as string) || undefined,
    defaultShippingAddress: formData.get('defaultShippingAddress') === 'true',
    defaultBillingAddress: formData.get('defaultBillingAddress') === 'true',
    countryCode: 'IN',
    province: '',
  };

  try {
    const result = await createCustomerAddress(addressData, { request });

    if (result && result.__typename === 'Address') {
      return redirect('/account/addresses');
    } else {
      return json<ErrorResult>(
        {
          errorCode: ErrorCode.UnknownError,
          message: t('address.createError'),
        },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error('Create address error:', error);
    return json<ErrorResult>(
      {
        errorCode: ErrorCode.UnknownError,
        message: t('address.createError'),
      },
      { status: 500 },
    );
  }
}

export default function NewAddress() {
  const { activeCustomer, channelCode, channelPostalcodes } =
    useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const submit = useSubmit();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    if (formRef.current) {
      console.log('Submitting form with data:', new FormData(formRef.current));
      submit(formRef.current, { method: 'post' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl">
        <button
          onClick={() => navigate('/account/addresses')}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-gray-400 hover:text-gray-600"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <CustomerAddressForm
          formRef={formRef}
          submit={handleSubmit}
          isEditing={false}
          activeCustomer={activeCustomer}
          channelCode={channelCode}
          channelPostalcodes={channelPostalcodes}
        />
      </div>
    </div>
  );
}
