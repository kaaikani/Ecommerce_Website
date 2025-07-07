import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Form } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
  isMobile?: boolean;
}

export function SearchBar({ isMobile = false }: SearchBarProps) {
  const { t } = useTranslation();

  let initialQuery = '';
  if (typeof window !== 'undefined') {
    initialQuery = new URL(window.location.href).searchParams.get('q') ?? '';
  }

  return (
    <Form method="get" action="/search" key={initialQuery}>
      <div
        className={
          isMobile
            ? 'block md:hidden w-full px-2'
            : 'hidden md:flex flex-1 justify-center max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-2 sm:mx-4 lg:mx-8'
        }
      >
        <div className="relative w-full">
          <input
            type="text"
            name="q"
            autoComplete="off"
            defaultValue={initialQuery}
            placeholder={t('Search a product')}
            className={`w-full sm:min-w-[300px] md:min-w-[400px] lg:max-w-[700px] px-2 py-2 sm:py-3 pr-10 sm:pr-12 bg-[#3C3D37] border border-gray-600 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder:text-base ${
              isMobile
                ? 'text-sm'
                : 'text-sm sm:text-base lg:text-lg xl:text-xl'
            }`}
            inputMode="search"
            autoFocus={isMobile}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-100"
          >
            <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </Form>
  );
}
