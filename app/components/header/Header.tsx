import { Link } from '@remix-run/react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { SearchBar } from '~/components/header/SearchBar';
import { useScrollingUp } from '~/utils/use-scrolling-up';
import { classNames } from '~/utils/class-names';
import { useTranslation } from 'react-i18next';
import { UserIcon } from '@heroicons/react/24/solid';

export function Header({
  onCartIconClick,
  cartQuantity,
  isSignedIn,
  collections,
}: {
  onCartIconClick: () => void;
  cartQuantity: number;
  isSignedIn: boolean;
  collections: { id: string; slug: string; name: string }[];
}) {
  const isScrollingUp = useScrollingUp();
  const { t } = useTranslation();

  return (
    <header
      className={classNames(
        isScrollingUp ? 'sticky top-0 z-20 backdrop-blur-lg shadow-lg' : '',
        'bg-gradient-to-r from-gray-800 to-gray-900 text-white'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center border-b border-gray-700">
        <Link to="/home" className="flex items-center space-x-2">
          <img
            src="/cube-logo-small.webp"
            width={40}
            height={31}
            alt="Logo"
            className="rounded-md shadow-md"
          />
          <span className="text-xl font-semibold hidden sm:inline">KaaiKani</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to={isSignedIn ? '/account' : '/sign-in'}
            className="flex items-center gap-1 text-sm hover:text-primary-400"
          >
            <UserIcon className="w-5 h-5" />
            <span>{isSignedIn ? t('account.myAccount') : t('account.signIn')}</span>
          </Link>
          <button
            className="relative p-2 bg-white/10 hover:bg-white/20 rounded-full"
            onClick={onCartIconClick}
            aria-label="Open cart tray"
          >
            <ShoppingBagIcon className="w-6 h-6" />
            {cartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartQuantity}
              </span>
            )}
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-4">
        <nav className="flex flex-wrap gap-4">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.slug}`}
              prefetch="intent"
              className="text-sm font-medium text-gray-300 hover:text-white"
            >
              {collection.name}
            </Link>
          ))}
        </nav>
        <div className="flex-1">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
