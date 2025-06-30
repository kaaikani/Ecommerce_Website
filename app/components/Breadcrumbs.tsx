import { HomeIcon } from '@heroicons/react/24/solid';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

export function Breadcrumbs({
  items,
}: {
  items: { name: string; slug: string; id: string }[];
}) {
  const { t } = useTranslation();

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex border-b border-gray-200 bg-white"
    >
      <ol
        role="list"
        className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-y"
      >
        <li className="flex">
          <div className="flex items-center">
            <Link to="/home" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">{t('home')}</span>
            </Link>
          </div>
        </li>
        {items
          .filter((item) => item.name !== '__root_collection__')
          .map((item, index) => (
            <li key={item.name} className="flex">
              <div className="flex items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="h-full w-6 flex-shrink-0 text-gray-200"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <Link
                  to={'/collections/' + item.slug}
                  aria-current={index === items.length - 1 ? 'page' : undefined}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
}
