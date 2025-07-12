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
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-100 px-6 pb-6 pt-48 sm:pt-56 lg:pt-64 shadow-md hover:shadow-lg transition-shadow duration-200 group"
    >
      {/* Background image */}
      <img
        src={imageUrl}
        alt={collection.name}
        className="absolute inset-0 -z-10 h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-black/10 rounded-2xl" />

      {/* Title */}
      <h3 className="text-xl font-bold text-white drop-shadow-sm">
        {collection.name}
      </h3>
    </Link>
  );
}
