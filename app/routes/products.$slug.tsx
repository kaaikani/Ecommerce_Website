'use client';

import { type DataFunctionArgs, json } from '@remix-run/server-runtime';
import { useState, useEffect } from 'react';
import { Price } from '~/components/products/Price';
import { getProductBySlug } from '~/providers/products/products';
import {
  type FetcherWithComponents,
  type ShouldRevalidateFunction,
  useLoaderData,
  useOutletContext,
  type MetaFunction,
} from '@remix-run/react';
import { CheckIcon, PhotoIcon } from '@heroicons/react/24/solid';
import { Breadcrumbs } from '~/components/Breadcrumbs';
import { APP_META_TITLE } from '~/constants';
import type { CartLoaderData } from '~/routes/api.active-order';
import { getSessionStorage } from '~/sessions';
import { ErrorCode, type ErrorResult } from '~/generated/graphql';
import Alert from '~/components/Alert';
import { StockLevelLabel } from '~/components/products/StockLevelLabel';
import { ScrollableContainer } from '~/components/products/ScrollableContainer';
import { useTranslation } from 'react-i18next';
import { getCollections } from '~/providers/collections/collections';
import { getActiveCustomer } from '~/providers/customer/customer';
import { Header } from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import { CartTray } from '~/components/cart/CartTray';
import { useActiveOrder } from '~/utils/use-active-order';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      title: data?.product?.name
        ? `${data.product.name} - ${APP_META_TITLE}`
        : APP_META_TITLE,
    },
  ];
};

export async function loader({ params, request }: DataFunctionArgs) {
  const { product } = await getProductBySlug(params.slug!, { request });
  if (!product) {
    throw new Response('Not Found', {
      status: 404,
    });
  }

  const sessionStorage = await getSessionStorage();
  const session = await sessionStorage.getSession(
    request?.headers.get('Cookie'),
  );
  const error = session.get('activeOrderError');
  const collections = await getCollections(request, { take: 20 });
  const activeCustomer = await getActiveCustomer({ request });

  return json(
    { product: product!, error, collections, activeCustomer },
    {
      headers: {
        'Set-Cookie': await sessionStorage.commitSession(session),
      },
    },
  );
}

export const shouldRevalidate: ShouldRevalidateFunction = () => true;

export default function ProductSlug() {
  const { product, error, collections, activeCustomer } =
    useLoaderData<typeof loader>();
  const { activeOrderFetcher } = useOutletContext<{
    activeOrderFetcher: FetcherWithComponents<CartLoaderData>;
  }>();
  const { activeOrder } = activeOrderFetcher.data ?? {};
  const addItemToOrderError = getAddItemToOrderError(error);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(
    !!activeCustomer?.activeCustomer?.id,
  );

  const { adjustOrderLine, removeItem, refresh } = useActiveOrder();

  useEffect(() => {
    setIsSignedIn(!!activeCustomer?.activeCustomer?.id);
  }, [activeCustomer]);

  useEffect(() => {
    refresh();
  }, []);

  const findVariantById = (id: string) =>
    product.variants.find((v) => v.id === id);

  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants[0].id,
  );

  const selectedVariant = findVariantById(selectedVariantId);

  if (!selectedVariant) {
    setSelectedVariantId(product.variants[0].id);
  }

  const qtyInCart =
    activeOrder?.lines.find((l) => l.productVariant.id === selectedVariantId)
      ?.quantity ?? 0;

  const [featuredAsset, setFeaturedAsset] = useState(
    selectedVariant?.featuredAsset,
  );

  return (
    <div>
      <Header
        onCartIconClick={() => setOpen(!open)}
        cartQuantity={activeOrder?.totalQuantity ?? 0}
        isSignedIn={isSignedIn}
        collections={collections}
      />
      <CartTray
        open={open}
        onClose={setOpen}
        activeOrder={activeOrder}
        adjustOrderLine={adjustOrderLine}
        removeItem={removeItem}
      />
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6">
        <Breadcrumbs
          items={
            product.collections[product.collections.length - 1]?.breadcrumbs ??
            []
          }
        />
        <div className="mt-6">
          {/* Card layout */}
          <div className="flex flex-col lg:flex-row items-stretch gap-6">
            <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md flex flex-col">
              {/* Image section */}
              <div className="relative w-full h-96">
                {' '}
                {/* Fixed height for consistency */}
                <img
                  src={
                    (featuredAsset?.preview || product.featuredAsset?.preview) +
                    '?w=800'
                  }
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {product.assets.length > 1 && (
                <div className="mt-4">
                  <ScrollableContainer>
                    {product.assets.map((asset) => (
                      <div
                        key={asset.id}
                        className={`basis-1/3 flex-shrink-0 select-none touch-pan-x rounded-lg cursor-pointer ${
                          featuredAsset?.id === asset.id
                            ? 'border-2 border-primary-500'
                            : 'border border-gray-200'
                        }`}
                        onClick={() => setFeaturedAsset(asset)}
                      >
                        <img
                          draggable="false"
                          className="rounded-lg h-20 w-full object-cover"
                          src={
                            asset.preview + '?preset=full' || '/placeholder.svg'
                          }
                        />
                      </div>
                    ))}
                  </ScrollableContainer>
                </div>
              )}
            </div>

            {/* Product info section */}
            <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div className="flex-1">
                <h2 className="text-3xl font-semibold font-light tracking-tight text-gray-900 mb-4">
                  {product.name}
                </h2>
                <div
                  className="text-base text-gray-700 mb-4"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-2xl font-bold text-gray-900">
                    <Price
                      priceWithTax={selectedVariant?.priceWithTax}
                      currencyCode={selectedVariant?.currencyCode}
                    />
                  </span>
                  <span className="text-gray-500">{selectedVariant?.sku}</span>
                  <StockLevelLabel stockLevel={selectedVariant?.stockLevel} />
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <activeOrderFetcher.Form
                      method="post"
                      action="/api/active-order"
                    >
                      <input
                        type="hidden"
                        name="action"
                        value="addItemToOrder"
                      />
                      {product.variants.length > 1 ? (
                        <div className="mb-[25%]">
                          <label
                            htmlFor="option"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            {t('product.selectOption')}
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {product.variants.map((variant) => (
                              <button
                                key={variant.id}
                                type="button"
                                className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors duration-200 ${
                                  selectedVariantId === variant.id
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-black border-black'
                                }`}
                                onClick={() => {
                                  setSelectedVariantId(variant.id);
                                  setFeaturedAsset(variant.featuredAsset);
                                }}
                              >
                                {variant.name}
                                <input
                                  type="radio"
                                  name="variantId"
                                  value={variant.id}
                                  checked={selectedVariantId === variant.id}
                                  className="hidden"
                                  readOnly
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <input
                          type="hidden"
                          name="variantId"
                          value={selectedVariantId}
                        />
                      )}
                      <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-md hover:bg-white hover:text-black border hover:border-black transition-colors duration-200"
                        disabled={activeOrderFetcher.state !== 'idle'}
                      >
                        {qtyInCart ? (
                          <span className="flex items-center justify-center">
                            <CheckIcon className="w-5 h-5 mr-1" /> {qtyInCart}{' '}
                            In cart
                          </span>
                        ) : (
                          'Add to Cart'
                        )}
                      </button>
                      {addItemToOrderError && (
                        <div className="mt-4">
                          <Alert message={addItemToOrderError} />
                        </div>
                      )}
                    </activeOrderFetcher.Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer collections={collections} />
    </div>
  );
}

export function CatchBoundary() {
  const { t } = useTranslation();
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8">
        {t('product.notFound')}
      </h2>
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12">
        <div className="w-full max-w-2xl mx-auto sm:block lg:max-w-none">
          <span className="rounded-md overflow-hidden">
            <div className="w-full h-96 bg-slate-200 rounded-lg flex content-center justify-center">
              <PhotoIcon className="w-48 text-white" />
            </div>
          </span>
        </div>
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <div className="">{t('product.notFoundInfo')}</div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getAddItemToOrderError(error?: ErrorResult): string | undefined {
  if (!error || !error.errorCode) return undefined;

  switch (error.errorCode) {
    case ErrorCode.OrderModificationError:
    case ErrorCode.OrderLimitError:
    case ErrorCode.NegativeQuantityError:
    case ErrorCode.InsufficientStockError:
      return error.message;
  }
}
