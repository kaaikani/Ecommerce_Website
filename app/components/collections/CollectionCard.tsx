import { Link } from '@remix-run/react';
import type { CollectionsQuery } from '~/generated/graphql';

export function CollectionCard({
  collection,
}: {
  collection: CollectionsQuery['collections']['items'][number];
}) {
  // Define image dimensions based on screen size
  const getImageDimensions = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return '?w=300&h=300'; // lg and above
      if (window.innerWidth >= 768) return '?w=250&h=250'; // md
      if (window.innerWidth >= 640) return '?w=200&h=200'; // sm
      return '?w=150&h=150'; // base (mobile)
    }
    return '?w=150&h=150'; // Default for server-side rendering
  };

  return (
    <Link
      to={'/collections/' + collection.slug}
      prefetch="intent"
      key={collection.id}
      className="w-full h-full min-h-[180px] xs:min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px] relative rounded-lg overflow-hidden hover:opacity-75 transition-opacity duration-200 block"
    >
      <div className="relative w-full h-full">
        {/* Image Container with Fixed Aspect Ratio */}
        <div className="w-full h-full relative aspect-square">
          <img
            src={
              collection.featuredAsset?.preview + getImageDimensions() ||
              '/placeholder.svg'
            }
            alt={collection.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 via-transparent to-transparent" />

        {/* Collection Name */}
        <div className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-4">
          <h3 className="text-center text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
            {collection.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
