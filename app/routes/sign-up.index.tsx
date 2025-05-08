import {
  Form,
  Link,
  useActionData,
  useSearchParams,
  useLoaderData,
  useNavigation,
  useFetcher,
} from '@remix-run/react';
import {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  redirect,
} from '@remix-run/server-runtime';
import { authenticate } from '~/providers/account/account';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import {
  getChannelList,
  sendPhoneOtp,
} from '~/providers/customPlugins/customPlugin';
import { getSessionStorage } from '~/sessions';
import { useState } from 'react';
import React from 'react';

interface RegisterValidationErrors {
  form?: string;
  fieldErrors?: {
    phoneNumber?: string;
    otp?: string;
    emailAddress?: string;
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const channels = await getChannelList({ request });
  return json({ channels });
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const intent = body.get('intent')?.toString();
  const phoneNumber = body.get('phoneNumber')?.toString();
  const code = body.get('otp')?.toString();
  const selectedChannelToken = String(body.get('channel') || '');

  const redirectTo = (body.get('redirectTo') || '/account') as string;
  const firstName = body.get('firstName') as string;
const lastName = body.get('lastName') as string;
const emailAddress = body.get('emailAddress') as string;

  const sessionStorage = await getSessionStorage();
  const session = await sessionStorage.getSession(request.headers.get('Cookie'));

  if (selectedChannelToken) {
    session.set('channelToken', selectedChannelToken);
  }

  if (intent === 'send-otp' && phoneNumber) {
    const otpSent = await sendPhoneOtp(phoneNumber);
    return json(
      otpSent ? { otpSent: true } : { form: 'Failed to send OTP' },
      {
        headers: {
          'Set-Cookie': await sessionStorage.commitSession(session),
        },
      }
    );
  }

  if (intent === 'submit-form') {
    if (!phoneNumber || !code) {
      return json<RegisterValidationErrors>(
        { form: 'Phone number and OTP are required' },
        {
          status: 400,
          headers: {
            'Set-Cookie': await sessionStorage.commitSession(session),
          },
        }
      );
    }

    try {
      if (!selectedChannelToken) {
        return json<RegisterValidationErrors>(
          { form: 'No channel was selected. Please try again.' },
          {
            status: 400,
          }
        );
      }
      const { result, headers } = await authenticate(
        {
          phoneOtp: {
            phoneNumber,
            code,

            // emailAddress,
            firstName,
            lastName,
          },
        },
        {
          request,
          customHeaders: {
            'vendure-token': selectedChannelToken,
          },
        }
      );
      const vendureToken = headers.get('vendure-auth-token'); // ✅ CORRECT

      if ('__typename' in result && result.__typename === 'CurrentUser') {


        if (vendureToken) {
          session.set('authToken', vendureToken);
        }

        return redirect(`${redirectTo}?reload=true`, {
          headers: { 'Set-Cookie': await sessionStorage.commitSession(session) },
        });

      } else {
        return json<RegisterValidationErrors>(
          { form: 'Authentication failed' },
          {
            status: 401,
            headers: {
              'Set-Cookie': await sessionStorage.commitSession(session),
            },
          }
        );
      }
    } catch (error: any) {
      return json<RegisterValidationErrors>(
        { form: error.message || 'Unexpected error' },
        {
          status: 500,
          headers: {
            'Set-Cookie': await sessionStorage.commitSession(session),
          },
        }
      );
    }
  }

  return json(
    { form: 'Invalid request' },
    {
      status: 400,
      headers: {
        'Set-Cookie': await sessionStorage.commitSession(session),
      },
    }
  );
}

export default function SignUpPage() {
  const { t } = useTranslation();
  const { channels } = useLoaderData<typeof loader>();
  const formErrors = useActionData<RegisterValidationErrors>();
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const sendOtpFetcher = useFetcher<{ otpSent?: boolean; form?: string }>();
  const otpSent = sendOtpFetcher.data?.otpSent;

  const [formData, setFormData] = useState({
    phoneNumber: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    channel: channels.length === 1 ? channels[0].token : '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === 'phoneNumber') {
      // Keep only digits and limit to 10 characters
      newValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };
  const SendOtpForm = sendOtpFetcher.Form;

  return (
    <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-3  rounded-xl">
      {/* Mobile Top Image */}
      <div
        className="absolute inset-0 bg-cover bg-center   lg:hidden"
        style={{
          backgroundImage: `url('https://www.beckydorner.com/wp-content/uploads/2021/09/Fruits-and-vegetables.jpg')`,
        }}
      />


      {/* Left Panel or Full Form on Mobile */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 z-10 bg-white rounded-t-3xl shadow-xl p-6 sm:p-8">

        <div className="mt-8 space-y-6 max-w-sm mx-auto">
          <h2 className="text-5xl font-bold pt-10 text-gray-900 ">Sign Up</h2>

          {!otpSent ? (
            <SendOtpForm method="post" className="space-y-6">
                            <input type="hidden" name="intent" value="send-otp" />
              <input type="hidden" name="emailAddress" value={formData.emailAddress} />
              <input type="hidden" name="phoneNumber" value={formData.phoneNumber} />

              <div className="space-y-2">
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
                {formData.emailAddress && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress) && (
                  <p className="text-sm text-red-600">Please enter a valid email address.</p>
                )}
              </div>


              <div className="space-y-2">

                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
                {formData.phoneNumber && formData.phoneNumber.length !== 10 && (
                  <p className="text-sm text-red-600">Please enter a valid 10-digit phone number.</p>
                )}

              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>

              {channels.length > 1 && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Available City</label>
                  <select
                    name="channel"
                    value={formData.channel}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  >
                    <option value="">Select a city</option>
                    {channels.map((channel) => (
                      <option key={channel.id} value={channel.token}>
                        {channel.code}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-2 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={sendOtpFetcher.state !== 'idle'}
              >
                {sendOtpFetcher.state === 'submitting' ? 'Sending...' : 'Send OTP'}
              </button>

              {sendOtpFetcher.data?.form && (
                <p className="text-sm text-red-600">{sendOtpFetcher.data.form}</p>
              )}


              <p className="mt-10 text-center text-sm text-gray-500">
                Already a member ?{' '}
                <Link to="/sign-in" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  login to your existing account
                </Link>
              </p>
            </SendOtpForm>
          ) : (
            <Form method="post" className="space-y-4 mt-6">
              <input type="hidden" name="intent" value="submit-form" />
              <input type="hidden" name="phoneNumber" value={formData.phoneNumber} />
              <input type="hidden" name="firstName" value={formData.firstName} />
              <input type="hidden" name="lastName" value={formData.lastName} />
              <input type="hidden" name="channel" value={formData.channel} />
              <input type="hidden" name="emailAddress" value={formData.emailAddress} />

              <div>
                <label className="block text-sm">OTP</label>
                <input
                  type="text"
                  name="otp"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              {formErrors?.form && (
                <div className="bg-red-100 text-red-700 p-3 rounded">
                  {formErrors.form}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2 bg-primary-600 text-white rounded-md"
                disabled={navigation.state === 'submitting' || navigation.state === 'loading'}
                >
                Register
              </button>
            </Form>
          )}
        </div>
        <div className='pb-20' />
      </div>


      {/* Desktop Left Panel */}
      <div className="hidden lg:flex lg:col-span-1 flex-col justify-center rounded-r-3xl shadow-xl  px-6 lg:px-16">
        <div className="mx-auto w-full max-w-md  p-6 sm:p-8">
          <h2 className="text-5xl font-bold text-gray-900">Sign Up</h2>
          {/* Your form here */}
          <div className="mt-8 space-y-6">
            {!otpSent ? (
              <SendOtpForm method="post" className="space-y-6">
                                <input type="hidden" name="intent" value="send-otp" />
                
                <div className="space-y-2">
                  <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                  {formData.emailAddress && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress) && (
                    <p className="text-sm text-red-600">Please enter a valid email address.</p>
                  )}
                </div>


                <div className="space-y-2">

                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                  {formData.phoneNumber && formData.phoneNumber.length !== 10 && (
                    <p className="text-sm text-red-600">Please enter a valid 10-digit phone number.</p>
                  )}

                </div>


                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </div>

                {channels.length > 1 && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Available City</label>
                    <select
                      name="channel"
                      value={formData.channel}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    >
                      <option value="">Select a city</option>
                      {channels.map((channel) => (
                        <option key={channel.id} value={channel.token}>
                          {channel.code}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full mt-2 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={sendOtpFetcher.state !== 'idle'}
                >
                  {sendOtpFetcher.state === 'submitting' ? 'Sending...' : 'Send OTP'}
                </button>

                {sendOtpFetcher.data?.form && (
                  <p className="text-sm text-red-600">{sendOtpFetcher.data.form}</p>
                )}


                <p className="mt-10 text-center text-sm text-gray-500">
                  Already a member ?{' '}
                  <Link to="/sign-in" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    login to your existing account
                  </Link>
                </p>
              </SendOtpForm>
            ) : (
              <Form method="post" className="space-y-4 mt-6">
                <input type="hidden" name="intent" value="submit-form" />
                <input type="hidden" name="phoneNumber" value={formData.phoneNumber} />
                <input type="hidden" name="firstName" value={formData.firstName} />
                <input type="hidden" name="lastName" value={formData.lastName} />
                <input type="hidden" name="channel" value={formData.channel} />
                <input type="hidden" name="emailAddress" value={formData.emailAddress} />

                <div>
                  <label className="block text-sm">OTP</label>
                  <input
                    type="text"
                    name="otp"
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                {formErrors?.form && (
                  <div className="bg-red-100 text-red-700 p-3 rounded">
                    {formErrors.form}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-2 bg-primary-600 text-white rounded-md"
                  disabled={navigation.state !== 'idle'}
                >
                  Register
                </button>
              </Form>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel for Desktop */}
      <div className="hidden lg:flex lg:col-span-2 items-center justify-center relative p-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
          style={{
            backgroundImage: `url('https://www.beckydorner.com/wp-content/uploads/2021/09/Fruits-and-vegetables.jpg')`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl  p-8 ">

          <img
            src="/banner.jpg"
            alt="Product"
            className="mx-auto w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
