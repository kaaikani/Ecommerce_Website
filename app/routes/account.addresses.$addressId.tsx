'use client';

import {
  useActionData,
  useLoaderData,
  useNavigate,
  useSubmit,
  useNavigation,
} from '@remix-run/react';
import {
  type DataFunctionArgs,
  json,
  redirect,
} from '@remix-run/server-runtime';
import { useRef, useEffect } from 'react';
import { validationError } from 'remix-validated-form';
import Modal from '~/components/modal/Modal';
import type { Address } from '~/generated/graphql';
import useToggleState from '~/utils/use-toggle-state';
import CustomerAddressForm, {
  validator,
} from '~/components/account/CustomerAddressForm';
import { updateCustomerAddress } from '~/providers/account/account';
import { getAvailableCountries } from '~/providers/checkout/checkout';
import { getActiveCustomerAddresses } from '~/providers/customer/customer';
import { useTranslation } from 'react-i18next';
import { ChannelPostalcode, getChannelPostalcodes } from '~/lib/hygraph';
import { getChannelsByCustomerPhonenumber } from '~/providers/customPlugins/customPlugin';
import { getActiveCustomerDetails } from '~/providers/customer/customer';

// Define the address update type based on updateCustomerAddress expectations
type AddressUpdateInput = {
  id: string;
  city: string;
  company?: string | undefined;
  countryCode: string;
  fullName: string;
  phoneNumber: string;
  postalCode: string;
  province?: string | undefined;
  streetLine1: string;
  streetLine2?: string | undefined;
  defaultShippingAddress?: boolean | undefined;
  defaultBillingAddress?: boolean | undefined;
};

export async function loader({ request, params }: DataFunctionArgs) {
  const { activeCustomer } = await getActiveCustomerAddresses({ request });
  const address = activeCustomer?.addresses?.find(
    (address) => address.id === params.addressId,
  );

  if (!address) {
    return redirect('/account/addresses');
  }

  // Fetch active customer details for phone number
  const { activeCustomer: detailedCustomer } = await getActiveCustomerDetails({
    request,
  });
  const phoneNumber = detailedCustomer?.phoneNumber ?? undefined;
  let channelCode = '';
  if (phoneNumber) {
    const channels = await getChannelsByCustomerPhonenumber(phoneNumber);
    channelCode = channels[0]?.code || ''; // Use the first channel's code, or empty if none
  }

  // Fetch Hygraph channel postalcodes
  const channelPostalcodes = await getChannelPostalcodes();
  console.log(
    'Loader data - channelCode:',
    channelCode,
    'channelPostalcodes:',
    channelPostalcodes,
    'address:',
    address,
  );

  const { availableCountries } = await getAvailableCountries({ request });
  return json({ address, availableCountries, channelCode, channelPostalcodes });
}

export async function action({ request, params }: DataFunctionArgs) {
  // Consume formData only once
  const formData = await request.formData();

  // Validate form data using the zod validator
  const result = await validator.validate(formData);

  if (result.error) {
    console.log('Validation error:', result.error); // Debug validation failures
    return validationError(result.error);
  }

  const { data } = result;

  // Log postalCode to ensure it's being read correctly
  console.log('Submitted postalCode:', data.postalCode);

  // Handle the address type and default flags
  const addressTypeData: AddressUpdateInput = {
    id: params.addressId!,
    city: data.city,
    company: data.company,
    countryCode: data.countryCode || 'IN', // Default to "IN" if not provided
    fullName: data.fullName,
    phoneNumber: data.phone,
    postalCode: data.postalCode,
    province: data.province || '', // Default to empty string if not provided
    streetLine1: data.streetLine1,
    streetLine2: data.streetLine2,
  };

  // Add default address flags if they exist in the form data
  if (data.defaultShippingAddress !== undefined) {
    addressTypeData.defaultShippingAddress =
      data.defaultShippingAddress === 'true';
  }
  if (data.defaultBillingAddress !== undefined) {
    addressTypeData.defaultBillingAddress =
      data.defaultBillingAddress === 'true';
  }

  try {
    console.log('Updating address with data:', addressTypeData); // Debug the data being sent
    await updateCustomerAddress(addressTypeData, { request });
    return json({
      saved: true,
    });
  } catch (error) {
    console.error('Update address error:', error); // Debug any errors
    return json(
      {
        saved: false,
        error: 'Failed to update address',
      },
      { status: 500 },
    );
  }
}

export default function EditAddress() {
  const { address, availableCountries, channelCode, channelPostalcodes } =
    useLoaderData<typeof loader>();
  const actionData = useActionData<{ saved?: boolean; error?: string }>();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const { state, close } = useToggleState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const submit = useSubmit();

  useEffect(() => {
    if (actionData?.saved) {
      close();
    } else if (actionData?.error) {
      console.log('Action error:', actionData.error); // Debug action errors
    }
  }, [actionData]);

  const submitForm = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      console.log('Submitting form with data:', Object.fromEntries(formData)); // Debug form data as object
      submit(formRef.current);
    }
  };

  const customClose = () => {
    console.log('Modal closing triggered'); // Debug modal close
    close();
  };

  const afterClose = () => {
    navigate(-1);
  };

  return (
    <div>
      <Modal isOpen={state} close={customClose} afterClose={afterClose}>
        <Modal.Title></Modal.Title>
        <Modal.Body>
          <CustomerAddressForm
            address={address as Address}
            availableCountries={availableCountries}
            formRef={formRef}
            submit={submitForm}
            isEditing={true}
            channelCode={channelCode}
            channelPostalcodes={channelPostalcodes}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
