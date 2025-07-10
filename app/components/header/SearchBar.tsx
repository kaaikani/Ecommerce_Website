import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Form } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

export function SearchBar() {
  const { t } = useTranslation();

  let initialQuery = '';
  if (typeof window === 'undefined') {
    // running in a server environment
  } else {
    // running in a browser environment
    initialQuery = new URL(window.location.href).searchParams.get('q') ?? '';
  }

  return (
    <Form method="get" action="/search" key={initialQuery}>
     

       <div className="hidden md:flex flex-1 justify-center max-w-xs sm:max-w-md lg:max-w-xl mx-2 sm:mx-4 lg:mx-8">
            <div className="relative w-full">
               <input
        type="search"
        name="q"
        defaultValue={initialQuery}
        placeholder={t('common.search')}
                className="w-full px-3 py-2 sm:py-3 pr-10 sm:pr-12 bg-[#3C3D37] border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm sm:text-base"
      />
      <button className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-1.5 sm:p-2 rounded-full hover:bg-gray-100">
                <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
            </div>
          </div>
    </Form>
  );
}
