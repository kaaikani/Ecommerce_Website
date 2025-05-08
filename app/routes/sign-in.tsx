import { Link, useFetcher } from '@remix-run/react';
import { ActionFunctionArgs, json, redirect } from '@remix-run/server-runtime';
import { Button } from '~/components/Button';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { getChannelsByCustomerEmail, sendPhoneOtp } from '~/providers/customPlugins/customPlugin';
import { authenticate } from '~/providers/account/account';
import { getSessionStorage } from '~/sessions';

// ✅ Hook to detect client (needed for disabling button before hydration)
function useIsClient() {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const phoneNumber = body.get('phoneNumber') as string;
  const otp = body.get('otp') as string;
  const actionType = body.get('actionType') as string;
  const rememberMe = !!body.get('rememberMe');
  const redirectTo = (body.get('redirectTo') || '/') as string;

  const sessionStorage = await getSessionStorage();
  const session = await sessionStorage.getSession(request.headers.get('Cookie'));

  if (!phoneNumber || phoneNumber.length !== 10) {
    return json({ message: 'Invalid phone number' }, { status: 400 });
  }

  console.log('Incoming actionType:', actionType);
  console.log('Phone Number:', phoneNumber);

  // ✅ Send OTP flow
  if (actionType === 'send-otp') {
    const sent = await sendPhoneOtp(phoneNumber);
    return json({ sent });
  }

  // ✅ Login flow
  if (actionType === 'login' && otp) {
    const email = `${phoneNumber}@kaikani.com`;
    const channels = await getChannelsByCustomerEmail(email);

    if (!channels || channels.length === 0) {
      return json({ message: 'No channel associated with this phone number.' }, { status: 403 });
    }

    const selectedChannelToken = channels[0].token;
    console.log('Using channel token:', selectedChannelToken);

    const result = await authenticate(
      {
        phoneOtp: {
          phoneNumber, code: otp,
          // emailAddress: '',
          // firstName: '',
          // lastName: ''
        },
      },
      {
        request,
        customHeaders: { 'vendure-token': selectedChannelToken }, // ✅ Pass for authentication
      }
    );

    if ('__typename' in result.result && result.result.__typename === 'CurrentUser') {
      const vendureToken = result.headers.get('vendure-auth-token');

      if (vendureToken) {
        // ✅ Save both authToken and channelToken
        session.set('authToken', vendureToken);
        session.set('channelToken', selectedChannelToken);
        session.set('rememberMe', rememberMe);

        const cookieHeaders = await sessionStorage.commitSession(session);

        // ✅ Redirect to home/account + force reload
        const url = new URL(redirectTo, request.url);
        url.searchParams.set('reload', 'true');

        return redirect(url.toString(), {
          headers: {
            'Set-Cookie': cookieHeaders,
          },
        });
      }
    }

    console.log('Auth result:', result.result);
    console.log('vendure-auth-token:', result.headers.get('vendure-auth-token'));

    return json({ message: 'Invalid credentials' }, { status: 401 });
  }

  return json({ message: 'Invalid request' }, { status: 400 });
}


export default function SignInPage() {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [otpSent, setOtpSent] = React.useState(false);
  const isClient = useIsClient();

  const sendOtpFetcher = useFetcher();
  const loginFetcher = useFetcher();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  React.useEffect(() => {
    if ((sendOtpFetcher.data as { sent?: boolean })?.sent) {
      setOtpSent(true);
    }
  }, [sendOtpFetcher.data]);

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
          <h2 className="text-5xl font-bold pt-10 text-gray-900 ">Sign In</h2>

          {!otpSent ? (
            <sendOtpFetcher.Form method="post" className="space-y-6">
              <input type="hidden" name="actionType" value="send-otp" />
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/\D/g, ''); // Keep only digits
                    setPhoneNumber(cleaned.slice(0, 10)); // Max 10 digits
                  }}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
                {phoneNumber && phoneNumber.length !== 10 && (
                  <p className="text-sm text-red-600">Please enter a valid 10-digit phone number.</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={
                  !isClient ||
                  phoneNumber.length !== 10 ||
                  sendOtpFetcher.state !== 'idle'
                }
                className="w-full mt-2 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
              >
                Send OTP
              </Button>



              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <Link to="/sign-up" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Sign Up
                </Link>
              </p>
            </sendOtpFetcher.Form>
          ) : (
            <loginFetcher.Form method="post" className="space-y-6">
              <input type="hidden" name="actionType" value="login" />
              <input type="hidden" name="phoneNumber" value={phoneNumber} />

              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  OTP
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  placeholder="Enter OTP"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-900">
                  Remember Me
                </label>
              </div>

              <Button type="submit" disabled={loginFetcher.state !== 'idle'} className="w-full mt-2 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500">
                Sign In
              </Button>
            </loginFetcher.Form>
          )}
        </div>
        <div className='pb-20' />
      </div>


      {/* Desktop Left Panel */}
      <div className="hidden lg:flex lg:col-span-1 flex-col justify-center rounded-r-3xl shadow-xl  px-6 lg:px-16">
        <div className="mx-auto w-full max-w-md  p-6 sm:p-8">
          <h2 className="text-5xl font-bold text-gray-900">Sign In</h2>
          {/* Your form here */}
          <div className="mt-8 space-y-6">
            {!otpSent ? (
              <sendOtpFetcher.Form method="post" className="space-y-6">
                <input type="hidden" name="actionType" value="send-otp" />
                <div className="space-y-2">
  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
    Phone Number
  </label>
  <input
    id="phoneNumber"
    name="phoneNumber"
    type="tel"
    value={phoneNumber}
    onChange={(e) => {
      const cleaned = e.target.value.replace(/\D/g, '');
      setPhoneNumber(cleaned.slice(0, 10));
    }}
    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
  />
  {hasSubmitted && phoneNumber.length !== 10 && (
    <p className="text-sm text-red-600">
      {phoneNumber.length === 0
        ? 'Please enter your phone number.'
        : 'Please enter a valid 10-digit phone number.'}
    </p>
  )}
</div>


                <Button
                  type="submit"
                  disabled={
                    !isClient ||
                    phoneNumber.length !== 10 ||
                    sendOtpFetcher.state !== 'idle'
                  }
                  className="w-full mt-2 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 disabled:bg-indigo-600 disabled:hover:bg-gray-400 disabled:text-white disabled:hover:text-black disabled:cursor-not-allowed"
                >
                  Send OTP
                </Button>



                <p className="mt-10 text-center  text-gray-500">
                  Not a member?{' '}
                  <Link to="/sign-up" className="font-semibold text-md text-indigo-600 hover:text-indigo-500">
                    Sign Up
                  </Link>
                </p>
              </sendOtpFetcher.Form>
            ) : (
              <loginFetcher.Form method="post" className="space-y-6">
                <input type="hidden" name="actionType" value="login" />
                <input type="hidden" name="phoneNumber" value={phoneNumber} />

                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                    OTP
                  </label>
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    required
                    placeholder="Enter OTP"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-900">
                    Remember Me
                  </label>
                </div>

                <Button type="submit" disabled={loginFetcher.state !== 'idle'} className="w-full mt-2 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500">
                  Sign In
                </Button>
              </loginFetcher.Form>
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

