import { useLoaderData, useSubmit } from '@remix-run/react';
import { useRef, useState } from 'react';
import { FacetFilterTracker } from '~/components/facet-filter/facet-filter-tracker';
import { filteredSearchLoaderFromPagination } from '~/utils/filtered-search-loader';
import { FiltersButton } from '~/components/FiltersButton';
import { ValidatedForm } from 'remix-validated-form';
import { withZod } from '@remix-validated-form/with-zod';
import { paginationValidationSchema } from '~/utils/pagination';
import { FilterableProductGrid } from '~/components/products/FilterableProductGrid';
import { useTranslation } from 'react-i18next';
import { Header } from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import { getCollections } from '~/providers/collections/collections';
import { getActiveCustomer } from '~/providers/customer/customer';
import { useActiveOrder } from '~/utils/use-active-order';
import { CartTray } from '~/components/cart/CartTray';
import type { LoaderFunctionArgs } from '@remix-run/server-runtime';
import { json } from '@remix-run/node';

const paginationLimitMinimumDefault = 25;
const allowedPaginationLimits = new Set<number>([
  paginationLimitMinimumDefault,
  50,
  100,
]);
const validator = withZod(paginationValidationSchema(allowedPaginationLimits));

// Custom loader to fetch collections, active customer, and search data
export async function loader(args: LoaderFunctionArgs) {
  const collections = await getCollections(args.request, { take: 20 });
  const activeCustomer = await getActiveCustomer({ request: args.request });
  const { filteredSearchLoader } = filteredSearchLoaderFromPagination(
    allowedPaginationLimits,
    paginationLimitMinimumDefault,
  );
  const searchData = await filteredSearchLoader(args);
  return json({ ...searchData, collections, activeCustomer });
}

export default function Search() {
  const loaderData = useLoaderData<Awaited<typeof loader>>();
  const {
    result,
    resultWithoutFacetValueFilters,
    term,
    facetValueIds,
    collections = [],
    activeCustomer,
  } = loaderData;
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const facetValuesTracker = useRef(new FacetFilterTracker());
  facetValuesTracker.current.update(
    result,
    resultWithoutFacetValueFilters,
    facetValueIds,
  );
  const submit = useSubmit();
  const { t } = useTranslation();
  const {
    activeOrderFetcher,
    activeOrder,
    adjustOrderLine,
    removeItem,
    refresh,
  } = useActiveOrder();
  const isSignedIn = !!activeCustomer?.activeCustomer?.id;

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

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 my-8">
            {term ? `Results for "${term}"` : 'All Results'}
          </h2>

          <FiltersButton
            filterCount={facetValueIds.length}
            onClick={() => setMobileFiltersOpen(true)}
          />
        </div>

        <ValidatedForm
          validator={validator}
          method="get"
          onChange={(e) =>
            submit(e.currentTarget, { preventScrollReset: true })
          }
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
