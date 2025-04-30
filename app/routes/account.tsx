import {
  HashtagIcon,
  MapPinIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import { Form, Outlet, useLoaderData, useSearchParams } from '@remix-run/react';
import { LoaderFunctionArgs, json, redirect } from '@remix-run/server-runtime';
import { TabProps } from '~/components/tabs/Tab';
import { TabsContainer } from '~/components/tabs/TabsContainer';
import { getActiveCustomerDetails } from '~/providers/customer/customer';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { getSessionStorage } from '~/sessions';

export async function loader({ request }: LoaderFunctionArgs) {
  const { activeCustomer } = await getActiveCustomerDetails({ request });

  if (!activeCustomer) {
    const sessionStorage = await getSessionStorage();
    const session = await sessionStorage.getSession(request.headers.get('Cookie'));

    session.unset('authToken');
    session.unset('channelToken');

    return redirect('/sign-in', {
      headers: {
        'Set-Cookie': await sessionStorage.commitSession(session),
      },
    });
  }

  return json({ activeCustomer });
}

export default function AccountDashboard() {
  const { activeCustomer } = useLoaderData<typeof loader>();
  const { firstName, lastName } = activeCustomer!;
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('reload') === 'true') {
      // Clean the URL by removing `reload=true`
      const url = new URL(window.location.href);
      url.searchParams.delete('reload');
      window.history.replaceState({}, '', url.toString());

      // Refresh data by hard-reloading the page once
      window.location.reload();
    }
  }, [searchParams]);

  const tabs: TabProps[] = [
    {
      Icon: UserCircleIcon,
      text: t('account.details'),
      to: './_index',
    },
    {
      Icon: ShoppingBagIcon,
      text: t('account.purchaseHistory'),
      to: './history',
    },
    {
      Icon: MapPinIcon,
      text: t('account.addresses'),
      to: './addresses',
    },
    {
      Icon: HashtagIcon,
      text: t('account.password'),
      to: './password',
    },
  ];

  return (
    <div className="max-w-6xl xl:mx-auto px-4">
      <h2 className="text-3xl sm:text-5xl font-light text-gray-900 my-8">
        {t('account.myAccount')}
      </h2>
      <p className="text-gray-700 text-lg -mt-4">
        {t('account.welcomeBack')}, {firstName} {lastName}
      </p>
      <Form method="post" action="/api/logout">
  <button
    type="submit"
    className="underline text-primary-600 hover:text-primary-800"
    onClick={() => {
      // Wait briefly, then force full reload to reset state
      setTimeout(() => {
        window.location.href = '/home';
      }, 50); // Allow Remix to process the POST first
    }}
  >
    {t('account.signOut')}
  </button>
</Form>


      <TabsContainer tabs={tabs}>
        <Outlet />
      </TabsContainer>
    </div>
  );
}
