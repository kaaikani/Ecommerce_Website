import { useState, type MouseEvent } from 'react';
import { Dialog } from '@headlessui/react';
import {
  Menu as MenuIcon,
  X as XIcon,
  ExternalLink as ExternalLinkIcon,
  Star as StarIcon,
} from 'lucide-react';
import { Link, useLocation, useNavigate } from '@remix-run/react';

const navigation = [
  { name: "Features", href: "#features", external: true },
  { name: "Essentials", href: "#Essentials" , external: true },
  { name: "Testimonials", href: "#Testimonials", external: true },
 
];



export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    item: { href: string; external?: boolean }
  ) => {
    if (item.external) return; // Let anchor tag handle external links

    e.preventDefault();
    const isHomePage = location.pathname === '/';

    if (isHomePage && item.href.startsWith('#')) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.href);
    }
  };

  return (
    <>
      <div className="bg-[#BFFF00] text-gray-900 text-center py-2 text-sm font-medium">
       No Platform Fees — Register Now & Unlock Exclusive Offers!
      </div>

      <header className="sticky top-0 z-50 w-full bg-black text-white shadow-lg">
        <nav className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <div className="flex lg:flex-1">
            <a href="/" className="flex flex-col items-start -m-1.5 p-1.5">
             <img
                alt="Kaaikani Logo"
                src="/KaaiKani White.png"
                className="h-12 w-auto transition-transform hover:scale-105"
              />
              
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                
                onClick={(e) => handleNavClick(e, item)}
                className="relative text-sm font-medium transition-colors px-3 py-2 rounded-lg group cursor-pointer text-white hover:text-gray-300 flex items-center gap-x-1"
              >
                {item.name}
                
              </a>
            ))}
          </div>

          <div className="flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
<div className="inline-flex rounded-full bg-white/30 backdrop-blur-sm p-1 transition-all duration-150">
            <Link
  to="/sign-in"
  className="px-4 py-2 text-sm font-medium text-white rounded-full transition-colors duration-100 ease-in hover:bg-white/20 active:scale-95"
>
  Log In
</Link>
<Link
  to="/sign-up"
  className="px-4 py-2 text-sm font-semibold text-black bg-white rounded-full shadow-sm transition-all duration-100 ease-in hover:bg-white/90 active:scale-95"
>
  Get Started
</Link>

            </div>
          </div>

          {/* <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div> */}
        </nav>
      </header>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
          <div className="flex items-center justify-between">
            <a href="/" className="flex flex-col items-start -m-1.5 p-1.5">
              <span className="sr-only">COMMMERCE</span>
              <span className="text-2xl font-bold tracking-tight text-gray-900">COMMMERCE™</span>
              <span className="flex items-center text-xs text-gray-500 mt-1">
                <StarIcon className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                4.8 Rating
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      handleNavClick(e, item);
                      setMobileMenuOpen(false);
                    }}
                    className="-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                    {item.external && <ExternalLinkIcon className="h-5 w-5 text-gray-400" />}
                  </a>
                ))}
              </div>

              <div className="py-6 space-y-4">
                <a
                  href="/log-in"
                  className="block w-full rounded-full px-6 py-2.5 text-center text-sm font-semibold transition-all duration-200 border border-gray-300 text-gray-900 hover:bg-gray-100"
                >
                  Log in
                </a>
                <a
                  href="/get-started"
                  className="block w-full rounded-full px-6 py-2.5 text-center text-sm font-semibold transition-all duration-200 bg-black text-white hover:bg-gray-800"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}