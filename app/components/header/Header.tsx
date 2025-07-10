'use client';

import type React from 'react';
import { useState, useMemo } from 'react';
import { Link } from '@remix-run/react';
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useScrollingUp } from '~/utils/use-scrolling-up';
import { classNames } from '~/utils/class-names';
import { useTranslation } from 'react-i18next';
import { SearchBar } from './SearchBar';

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sort collections based on slug endings
  const sortedCollections = useMemo(() => {
    return [...collections].sort((a, b) => {
      const aEnding = a.slug.slice(-1);
      const bEnding = b.slug.slice(-1);

      const getPriority = (ending: string) => {
        if (ending === '1') return 1;
        if (ending === '2') return 2;
        return 3;
      };

      const aPriority = getPriority(aEnding);
      const bPriority = getPriority(bEnding);

      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }

      return a.name.localeCompare(b.name);
    });
  }, [collections]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header
      className={classNames(
        isScrollingUp ? 'sticky top-0 z-20 backdrop-blur-lg shadow-lg' : '',
        'bg-black text-white',
      )}
    >
      {/* Main header section - responsive */}
      <div className="w-full px-4 sm:px-4 py-2 sm:py-4 bg-[#3C3D37]">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center space-x-2 flex-shrink-0"
          >
            <img
              src="/KaaiKani White.png"
              className="w-20"
              alt="KaaiKani Logo"
            />
          </Link>

          {/* Desktop Search bar - centered in desktop view */}
          <div className="hidden md:flex flex-1 justify-center max-w-xs sm:max-w-md lg:max-w-xl mx-2 sm:mx-4 lg:mx-8">
                     <SearchBar></SearchBar>
          </div>

          {/* Icons Container - Account, Search (mobile/tablet), and Cart */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Link
              to={isSignedIn ? '/account' : '/sign-in'}
              className="flex items-center gap-1 sm:gap-2 hover:text-gray-300 whitespace-nowrap"
            >
              <UserIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">
                {isSignedIn ? 'My Account' : 'Log In'}
              </span>
            </Link>
            {/* Search Icon - visible on mobile and tablet */}
            <button
              className="md:hidden p-1.5 bg-white/10 hover:bg-white/20 rounded-full"
              onClick={toggleSearch}
              aria-label="Toggle search"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            <button
              className="relative p-1.5 sm:p-2 bg-white/10 hover:bg-white/20 rounded-full"
              onClick={onCartIconClick}
              aria-label="Open cart tray"
            >
              <ShoppingBagIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              {cartQuantity > 0 && (
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-primary-600 text-white text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-medium">
                  {cartQuantity}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search bar - toggleable, visible only when isSearchOpen is true */}
        {isSearchOpen && (
          <div className="md:hidden mt-3 pb-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search a product"
                className="w-full px-3 py-3 pr-12 bg-[#3C3D37] border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm"
                autoFocus
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-100">
                <MagnifyingGlassIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Scrollable Navigation Carousel - responsive with sorted collections */}
      <div className="bg-white border-t border-gray-200">
        <div className="w-full">
          <div
            className="overflow-x-auto"
            style={
              {
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                WebkitScrollbar: { display: 'none' },
              } as React.CSSProperties
            }
          >
            <nav className="flex gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 min-w-max">
              {sortedCollections.map((collection) => (
                <Link
                  key={collection.id}
                  to={`/collections/${collection.slug}`}
                  prefetch="intent"
                  className="text-xs sm:text-sm font-medium text-black hover:text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-black whitespace-nowrap flex-shrink-0 transition-colors duration-200"
                >
                  {collection.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Add CSS for vertical cycle animation with slight smoothness */}
      <style>
        {`
          @keyframes vertical-cycle {
            0%, 45% {
              transform: translateY(0);
            }
            50%, 95% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }
          .animate-vertical-cycle {
            animation: vertical-cycle 6s ease-in-out infinite;
            display: flex;
            flex-direction: column;
            height: 48px;
          }
          .animate-vertical-cycle > div {
            height: 24px;
            line-height: 24px;
            text-align: center;
          }
        `}
      </style>
    </header>
  );
}
