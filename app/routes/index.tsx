import { useLoaderData } from "@remix-run/react"
import { getCollections } from "~/providers/collections/collections"
import { getCustomBanners } from "~/providers/customPlugins/customPlugin" // Import the getCustomBanners function
import { CollectionCard } from "~/components/collections/CollectionCard"
import { BannerCarousel } from "~/components/BannerCarousel" // Import the BannerCarousel component
import { BookOpenIcon } from "@heroicons/react/24/solid"
import type { LoaderFunctionArgs } from "@remix-run/server-runtime"
import { useTranslation } from "react-i18next"
import { json } from "@remix-run/node"
import { getSessionStorage } from "~/sessions"
import { CHANNEL_TOKEN_SESSION_KEY } from '~/graphqlWrapper'; // Adjust path as needed

export async function loader({ request }: LoaderFunctionArgs) {
  // Get collections
  const collections = await getCollections(request, { take: 20 })

  // Get channel ID from session or default to "1"
  const sessionStorage = await getSessionStorage()
  const session = await sessionStorage.getSession(request.headers.get("Cookie"))
  
  // Get channel token from session
  const channelToken = session.get(CHANNEL_TOKEN_SESSION_KEY)
  
  // Extract channel ID from URL or use default
  const url = new URL(request.url)
  const channelId = url.searchParams.get("channelId") || "5" // Default to '1' if not provided

  // Fetch banners with the request object to ensure auth context is passed
  const bannersResponse = await getCustomBanners(request, channelId)
  const banners = bannersResponse ? bannersResponse.data : []

  return json(
    {
      collections,
      banners,
      channelToken, // Pass channel token to the frontend for debugging if needed
    },
    {
      headers: {
        ...(bannersResponse ? bannersResponse.headers : {}),
      },
    }
  )
}
export default function Index() {
  const { collections, banners } = useLoaderData<typeof loader>()
  const { t } = useTranslation()
  const headerImage = collections[0]?.featuredAsset?.preview

  return (
    <>
     

      {/* Banner Carousel Section */}
      {banners && banners.length > 0 && (
        <section className="mt-8 mb-12 px-4 sm:px-6 lg:px-8 xl:max-w-7xl xl:mx-auto">
          <BannerCarousel banners={banners} />
        </section>
      )}

      <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-0">
          <h2 id="category-heading" className="text-2xl font-light tracking-tight text-gray-900">
            {t("common.shopByCategory")}
          </h2>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible">
              <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8">
                {collections.map((collection) => (
                  <CollectionCard key={collection.id} collection={collection} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a
            href="~/routes/__cart/index#"
            className="block text-sm font-semibold text-primary-600 hover:text-primary-500"
          >
            {t("common.browseCategories")}
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </section>
    </>
  )
}
