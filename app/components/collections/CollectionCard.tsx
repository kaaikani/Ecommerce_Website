import { Link } from '@remix-run/react';
import type { CollectionsQuery } from '~/generated/graphql';

export function CollectionCard({
  collection,
}: {
  collection: CollectionsQuery['collections']['items'][number];
}) {
  // Responsive image size logic (optional)
  const getImageSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return '?w=400&h=400';
      if (window.innerWidth >= 768) return '?w=300&h=300';
      if (window.innerWidth >= 640) return '?w=200&h=200';
    }
    return '?w=200&h=200';
  };

  const imageUrl =
    collection.featuredAsset?.preview + getImageSize() || '/placeholder.svg';

  return (
    <Link
      to={`/collections/${collection.slug}`}
      prefetch="intent"
      key={collection.id}
           className="flex flex-col items-center text-center group"
>
       <div className="w-full aspect-square overflow-hidden rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow duration-200">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={collection.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-2 text-lg font-medium text-gray-700 group-hover:text-gray-900">{collection.name}</h3>
    </Link>
  );
}
