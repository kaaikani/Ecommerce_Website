'use client';

import type React from 'react';
import { useState, useMemo, useEffect } from 'react';
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
import {
  remoteConfig,
  fetchAndActivate,
  getBoolean,
  getString,
} from '~/firebase/firebase';
import { Dialog } from '@headlessui/react';

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
  const [isAppLeavingz, setIsAppLeaving] = useState(false);
  const [showLeaveDialog, setShowLeaveDialog] = useState(false);
  const [leaveMessage, setLeaveMessage] = useState('We are currently closed.');
  const [LeaveDialogtitle, Dialogtitle] = useState('Sorry for incovninece.');
  // Fetch Remote Config values once
  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchAndActivate(remoteConfig)
        .then(() => {
          const shouldLeave = getBoolean(remoteConfig, 'is_app_leavingz');
          const message = getString(remoteConfig, 'leave_dialog_message');
          setIsAppLeaving(shouldLeave);
          setLeaveMessage(message || 'We are currently closed.');
        })
        .catch((err) => console.error('Remote Config fetch failed:', err));
    }
  }, []);

  // Sort collections
  const sortedCollections = useMemo(() => {
    return [...collections].sort((a, b) => {
      const aEnding = a.slug.slice(-1);
      const bEnding = b.slug.slice(-1);
      const getPriority = (ending: string) =>
        ending === '1' ? 1 : ending === '2' ? 2 : 3;
      const aPriority = getPriority(aEnding);
      const bPriority = getPriority(bEnding);
      return aPriority !== bPriority
        ? aPriority - bPriority
        : a.name.localeCompare(b.name);
    });
  }, [collections]);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header
      className={classNames(
        isScrollingUp ? 'sticky top-0 z-20 backdrop-blur-lg shadow-lg' : '',
        'bg-black text-white',
      )}
    >
      <div className="w-full px-4 py-2 sm:py-4 bg-[#3C3D37]">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
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

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 justify-center max-w-4xl mx-4">
            <SearchBar />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Link
              to={isSignedIn ? '/account' : '/sign-in'}
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <UserIcon className="w-4 h-4" />
              <span className="text-sm">
                {isSignedIn ? 'My Account' : 'Log In'}
              </span>
            </Link>

            {/* Mobile search */}
            <button
              className="md:hidden p-1.5 bg-white/10 hover:bg-white/20 rounded-full"
              onClick={toggleSearch}
              aria-label="Toggle search"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>

            {/* Cart Icon */}
            <button
              className="relative p-1.5 sm:p-2 bg-white/10 hover:bg-white/20 rounded-full"
              onClick={(e) => {
                if (isAppLeavingz) {
                  e.preventDefault();
                  setShowLeaveDialog(true);
                } else {
                  onCartIconClick();
                }
              }}
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

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden mt-3 pb-1">
            <SearchBar isMobile />
          </div>
        )}
      </div>

      {/* Scrollable Navigation Carousel - responsive with sorted collections */}
      <div className="bg-white border-t border-gray-200">
      <div className="w-full flex justify-center">
  <div
    className="overflow-x-auto"
    style={{
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
    } as React.CSSProperties}
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

      {/* Leave Dialog */}
      {showLeaveDialog && (
        <Dialog
          open={showLeaveDialog}
          onClose={() => setShowLeaveDialog(false)}
          className="fixed z-30 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4 text-center bg-black bg-opacity-50">
            <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-sm mx-auto">
              <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
                Sorry for the inconvenience
              </Dialog.Title>
              <p className="text-gray-700 mb-6">{leaveMessage}</p>
              <button
                className="bg-white border border-black text-black hover:text-white hover:bg-black px-6 py-1 rounded"
                onClick={() => setShowLeaveDialog(false)}
              >
                OK
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </header>
  );
}
