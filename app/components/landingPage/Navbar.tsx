"use client";

import { useState, type MouseEvent } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "@remix-run/react";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Essentials", href: "#Essentials" },
  { name: "Marketplace", href: "#marketplace" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const isHomePage = location.pathname === "/";

    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <nav className="flex items-center justify-between gap-x-6 rounded-full px-6 py-3 border backdrop-blur-lg bg-white text-gray-900 shadow-lg border-gray-200/80">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="flex items-center space-x-2 -m-1.5 p-1.5">
              <span className="sr-only">Kaaikani</span>
              <img
                alt="Kaaikani Logo"
                src="/KK-Logo.png"
                className="h-12 w-auto transition-transform hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-sm font-medium transition-colors px-3 py-2 rounded-lg group cursor-pointer text-gray-900 hover:text-indigo-600 hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
            <a
              href="/sign-in"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 shadow-sm hover:scale-105 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500"
            >
              Sign-in
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:text-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dialog */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2 -m-1.5 p-1.5">
              <span className="sr-only">Kaaikani</span>
<img
                alt="Kaaikani Logo"
                src="/KK-Logo.png"
                className="h-12 w-auto transition-transform hover:scale-105"
              />            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setMobileMenuOpen(false);
                    }}
                    className="group -mx-3 flex items-center gap-x-6 rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="py-6 space-y-4">
                <a
              href="/sign-in"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 shadow-sm hover:scale-105 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500"
            >
              Sign-in
            </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
