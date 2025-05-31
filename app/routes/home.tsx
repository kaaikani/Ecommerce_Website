import { useLoaderData } from "@remix-run/react"
import { getCollections } from "~/providers/collections/collections"
import { getCustomBanners } from "~/providers/customPlugins/customPlugin"
import { CollectionCard } from "~/components/collections/CollectionCard"
import { BannerCarousel } from "~/components/BannerCarousel"
import type { LoaderFunctionArgs } from "@remix-run/server-runtime"
import { useTranslation } from "react-i18next"
import { json } from "@remix-run/node"
import { getSessionStorage } from "~/sessions"
import { CHANNEL_TOKEN_SESSION_KEY } from "~/graphqlWrapper"
import { CustomBannersQuery } from "~/generated/graphql"

export async function loader({ request }: LoaderFunctionArgs) {
  const collections = await getCollections(request, { take: 20 })

  const sessionStorage = await getSessionStorage()
  const session = await sessionStorage.getSession(request.headers.get("Cookie"))
  const channelToken = session.get(CHANNEL_TOKEN_SESSION_KEY)

  let banners: CustomBannersQuery["customBanners"] = []  // <-- typed here

  try {
    const bannersResponse = await getCustomBanners(request, channelToken)
    banners = bannersResponse ? bannersResponse.data : []
  } catch (error) {
    console.error("Error fetching banners:", error)
  }

  return json(
    {
      collections,
      banners,
    },
    {
      headers: {},
    },
  )
}

export default function home() {
const { collections, banners } = useLoaderData<typeof loader>()
  const { t } = useTranslation()
  return (
    <>
      {/* Banner Carousel Section */}
      {banners && banners.length > 0 && (
        <section className="mt-8 mb-12 px-4 sm:px-6 lg:px-8 xl:max-w-7xl xl:mx-auto">
          <BannerCarousel banners={banners} />
        </section>
      )}

      <section aria-labelledby="category-heading" className="pt-5 sm:pt-10 xl:max-w-7xl xl:mx-auto xl:px-8">
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