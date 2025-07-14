'use client';

import {
  json,
  redirect,
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
} from '@remix-run/server-runtime';
import { useLoaderData, useNavigate, useSubmit, useActionData } from '@remix-run/react';
import { useRef, useEffect } from 'react';
import CustomerAddressForm from '~/components/account/CustomerAddressForm';
import { createCustomerAddress } from '~/providers/account/account';
import { getActiveCustomerDetails } from '~/providers/customer/customer';
import { getFixedT } from '~/i18next.server';
import type { ErrorResult } from '~/generated/graphql';
import { ErrorCode } from '~/generated/graphql';
import { getChannelPostalcodes } from '~/lib/hygraph';
import { getSessionStorage } from '~/sessions';
import { getChannelsByCustomerPhonenumber } from '~/providers/customPlugins/customPlugin';
import useToggleState from '~/utils/use-toggle-state';
import Modal from '~/components/modal/Modal';

type ActiveCustomerFormType =
  | {
      firstName?: string;
      lastName?: string;
      phoneNumber?: string;
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

  const transformedActiveCustomer: ActiveCustomerFormType = {
    firstName: activeCustomer.firstName,
    lastName: activeCustomer.lastName,
    phoneNumber: activeCustomer.phoneNumber ?? undefined,
  };

  const phoneNumber = transformedActiveCustomer.phoneNumber;
  let channelCode = '';
  if (phoneNumber) {
    const channels = await getChannelsByCustomerPhonenumber(phoneNumber);
    channelCode = channels[0]?.code || '';
  }

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

  // Get the redirectTo query parameter from the request URL
  const url = new URL(request.url);
  const redirectTo = url.searchParams.get('redirectTo') || '/account/addresses';

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
      return json({ saved: true, redirectTo }); // Return redirectTo for client-side navigation
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
  const { activeCustomer, channelCode, channelPostalcodes } = useLoaderData<typeof loader>();
  const actionData = useActionData<{ saved?: boolean; redirectTo?: string; error?: string }>();
  const navigate = useNavigate();
  const submit = useSubmit();
  const formRef = useRef<HTMLFormElement>(null);
  const { state, close } = useToggleState(true);

  const handleSubmit = () => {
    if (formRef.current) {
      console.log('Submitting form with data:', new FormData(formRef.current));
      submit(formRef.current, { method: 'post' });
    }
  };

  useEffect(() => {
    if (actionData?.saved && actionData?.redirectTo) {
      close(); // Close the modal
    } else if (actionData?.error) {
      console.log('Action error:', actionData.error);
    }
  }, [actionData, close]);

  const afterClose = () => {
    if (actionData?.saved && actionData?.redirectTo) {
      navigate(actionData.redirectTo); // Navigate to redirectTo after modal closes
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6">
      <Modal isOpen={state} close={close} afterClose={afterClose}>
        <Modal.Title></Modal.Title>
        <Modal.Body>
          <CustomerAddressForm
            formRef={formRef}
            submit={handleSubmit}
            isEditing={false}
            activeCustomer={activeCustomer}
            channelCode={channelCode}
            channelPostalcodes={channelPostalcodes}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
