'use client';

import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { getCustomBanners } from '~/providers/customPlugins/customPlugin';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { BannerCarousel } from '~/components/BannerCarousel';
import type { LoaderFunctionArgs } from '@remix-run/server-runtime';
import { json, redirect } from '@remix-run/node';
import { getSessionStorage } from '~/sessions';
import { CHANNEL_TOKEN_SESSION_KEY } from '~/graphqlWrapper';
import type { CustomBannersQuery } from '~/generated/graphql';
import { Header } from '~/components/header/Header';
import { useEffect, useState } from 'react';
import { useActiveOrder } from '~/utils/use-active-order';
import type { RootLoaderData } from '~/root';
import { getActiveCustomer } from '~/providers/customer/customer';
import Footer from '~/components/footer/Footer';
import { CartTray } from '~/components/cart/CartTray';

export async function loader({ request }: LoaderFunctionArgs) {
  // Check if user is authenticated
  const activeCustomer = await getActiveCustomer({ request });

  // If user is NOT logged in, redirect to sign-in page
  if (!activeCustomer.activeCustomer?.id) {
    return redirect('/sign-in');
  }

  // User is authenticated, proceed with loading data
  const collections = await getCollections(request, { take: 20 });

  const sessionStorage = await getSessionStorage();
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie'),
  );
  const channelToken = session.get(CHANNEL_TOKEN_SESSION_KEY);

  let banners: CustomBannersQuery['customBanners'] = [];

  try {
    const bannersResponse = await getCustomBanners(request, channelToken);
    banners = bannersResponse ? bannersResponse.data : [];
  } catch (error) {
    console.error('Error fetching banners:', error);
  }

  return json(
    {
      collections,
      activeCustomer,
      banners,
    },
    {
      headers: {},
    },
  );
}

export default function home() {
  const { collections, banners } = useLoaderData<typeof loader>();
  const loaderData = useLoaderData<RootLoaderData>();
  const { activeCustomer } = loaderData;

  const [open, setOpen] = useState(false);

  const {
    activeOrderFetcher,
    activeOrder,
    adjustOrderLine,
    removeItem,
    refresh,
  } = useActiveOrder();

  const [isSignedIn, setIsSignedIn] = useState(
    !!activeCustomer.activeCustomer?.id,
  );

  useEffect(() => {
    setIsSignedIn(!!loaderData.activeCustomer.activeCustomer?.id);
  }, [loaderData.activeCustomer.activeCustomer?.id]);

  useEffect(() => {
    refresh();
  }, [loaderData]);

  return (
    <>
      <Header
        onCartIconClick={() => setOpen(!open)}
        cartQuantity={activeOrder?.totalQuantity ?? 0}
        isSignedIn={isSignedIn}
        collections={collections}
      />

      <CartTray
        open={open}
        onClose={setOpen}
        activeOrder={activeOrder as any}
        adjustOrderLine={adjustOrderLine}
        removeItem={removeItem}
      />

      {/* Banner Carousel Section */}
      {banners && banners.length > 0 && (
        <section className="mt-8 mb-8 xl:mb-5 px-2 sm:px-3 lg:px-4">
          <BannerCarousel banners={banners} />
        </section>
      )}

      {/* Enhanced Responsive Collections Section */}
      <section
        aria-labelledby="category-heading"
        className="mb-15 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-7 w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 xl:px-4 2xl:px-0"
      >
        {/* Image and Heading Container */}
        <div className="flex flex-col text-lg items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <p>Discover Our Finest Selection</p>
          <h3
            id="category-heading"
            className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-gray-900 text-center"
          >
            SHOP BY CATEGORY
          </h3>
        </div>

        {/* Responsive Grid Container with Equal Heights */}
        <div className="w-full">
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 auto-rows-fr">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="w-full h-full min-h-[180px] xs:min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px]"
              >
                <CollectionCard collection={collection} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer collections={collections} />
    </>
  );
}
