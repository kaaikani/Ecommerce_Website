import { MetaFunction, useLoaderData, useSubmit } from '@remix-run/react';
import { DataFunctionArgs } from '@remix-run/server-runtime';
import { withZod } from '@remix-validated-form/with-zod';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ValidatedForm } from 'remix-validated-form';

import { Breadcrumbs } from '~/components/Breadcrumbs';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { FacetFilterTracker } from '~/components/facet-filter/facet-filter-tracker';
import { FiltersButton } from '~/components/FiltersButton';
import { FilterableProductGrid } from '~/components/products/FilterableProductGrid';
import { Header } from '~/components/header/Header';

import { APP_META_TITLE } from '~/constants';
import { filteredSearchLoaderFromPagination } from '~/utils/filtered-search-loader';
import { useActiveOrder } from '~/utils/use-active-order';

import { getCollections } from '~/providers/collections/collections';
import { getSessionStorage } from '~/sessions';
import { CHANNEL_TOKEN_SESSION_KEY } from '~/graphqlWrapper';
import { getActiveCustomer } from '~/providers/customer/customer';

import { sdk } from '../graphqlWrapper';
import Footer from '~/components/footer/Footer';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      title: data?.collection
        ? `${data.collection?.name} - ${APP_META_TITLE}`
        : APP_META_TITLE,
    },
  ];
};

const paginationLimitMinimumDefault = 25;
const allowedPaginationLimits = new Set<number>([
  paginationLimitMinimumDefault,
  50,
  100,
]);

const { validator, filteredSearchLoader } = filteredSearchLoaderFromPagination(
  allowedPaginationLimits,
  paginationLimitMinimumDefault,
);

export async function loader({ params, request, context }: DataFunctionArgs) {
  const {
    result,
    resultWithoutFacetValueFilters,
    facetValueIds,
    appliedPaginationLimit,
    appliedPaginationPage,
    term,
  } = await filteredSearchLoader({
    params,
    request,
    context,
  });

  const collection = (await sdk.collection({ slug: params.slug })).collection;
  if (!collection?.id || !collection?.name) {
    throw new Response('Not Found', {
      status: 404,
    });
  }

  const collections = await getCollections(request, { take: 20 });

  const sessionStorage = await getSessionStorage();
  const session = await sessionStorage.getSession(request.headers.get('Cookie'));
  const channelToken = session.get(CHANNEL_TOKEN_SESSION_KEY);

  const activeCustomer = await getActiveCustomer({ request });

  return {
    term,
    collection,
    result,
    resultWithoutFacetValueFilters,
    facetValueIds,
    appliedPaginationLimit,
    appliedPaginationPage,
    collections,
    activeCustomer,
  };
}

export default function CollectionSlug() {
  const loaderData = useLoaderData<typeof loader>();
  const {
    collection,
    result,
    resultWithoutFacetValueFilters,
    facetValueIds,
    collections,
    activeCustomer,
  } = loaderData;

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(
    !!activeCustomer?.activeCustomer?.id
  );

  const { activeOrder, refresh } = useActiveOrder();

  useEffect(() => {
    setIsSignedIn(!!activeCustomer?.activeCustomer?.id);
  }, [activeCustomer?.activeCustomer?.id]);

  useEffect(() => {
    refresh();
  }, []);

  const facetValuesTracker = useRef(new FacetFilterTracker());
  facetValuesTracker.current.update(
    result,
    resultWithoutFacetValueFilters,
    facetValueIds
  );

  const submit = useSubmit();
  const { t } = useTranslation();

  return (
    <>
      <Header
        onCartIconClick={() => setOpen(!open)}
        cartQuantity={activeOrder?.totalQuantity ?? 0}
        isSignedIn={isSignedIn}
        collections={collections}
      />
 <div className="max-w-6xl mx-auto px-4">
    

      <div className="flex justify-between items-center">
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8">
          {collection.name}
        </h2>

        <FiltersButton
          filterCount={facetValueIds.length}
          onClick={() => setMobileFiltersOpen(true)}
        />
      </div>

      <Breadcrumbs items={collection.breadcrumbs} />

      {collection.children?.length ? (
        <div className="max-w-2xl mx-auto py-16 sm:py-16 lg:max-w-none border-b mb-16">
          <h2 className="text-2xl font-light text-gray-900">
            {t('product.collections')}
          </h2>
          <div className="mt-6 grid max-w-xs sm:max-w-none mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
            {collection.children.map((child) => (
              <CollectionCard key={child.id} collection={child} />
            ))}
          </div>
        </div>
      ) : null}

      <ValidatedForm
        validator={withZod(validator)}
        method="get"
        onChange={(e) => submit(e.currentTarget, { preventScrollReset: true })}
      >
        <FilterableProductGrid
          allowedPaginationLimits={allowedPaginationLimits}
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          {...loaderData}
        />
      </ValidatedForm>
    </div>
        <Footer collections={collections} />

    </>
   
  );
}

export function CatchBoundary() {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8">
        {t('product.collectionNotFound')}
      </h2>
      <div className="mt-6 grid sm:grid-cols-5 gap-x-4">
        <div className="space-y-6">
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div className="sm:col-span-5 lg:col-span-4">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="h-64 bg-slate-200 rounded"></div>
            <div className="h-64 bg-slate-200 rounded"></div>
            <div className="h-64 bg-slate-200 rounded"></div>
            <div className="h-64 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
