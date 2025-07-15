"use client"

import { Link } from "@remix-run/react"
import { ArrowUpRight, Mail, Phone } from "lucide-react"
import { Marquee } from "./marquee"
import { AppStoreLink } from "./AppStoreLink"
const navigation = {
  social: [
    {
      name: 'Facebook',
      href: 'https://m.facebook.com/KaaiKani/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          {...props}
          className="h-8 w-8"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/kaaikani.official/?hl=en',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/kaaikani-official/',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@kaaikani?si=fJRcmofJI0oUJXx5',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          {...props}
          className="h-8 w-8"
        >
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
} as const;

export default function Footer() {
  return (
    <footer className="bg-black/95 text-white">
      {/* 🔁 Marquee */}
      <Link to="/sign-in">
      <Marquee text="Login to avail more offers." />
      </Link>
      

      {/* 📦 Main content container */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-5 gap-10">
        
        {/* 🟩 Logo + App Store (left) */}
        <div className="lg:col-span-2 flex flex-col justify-between items-center lg:items-start text-center lg:text-left space-y-8">
          <img
            src="/KaaiKani White.png"
            alt="KaaiKani Logo"
            className="w-56 md:w-64 lg:w-80"
          />
<div className="items-start">
 <AppStoreLink />
</div>
         
        </div>

        {/* 🟨 Links + Contact (right) */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-0 text-center sm:text-left">
          
         

          {/* 📜 Policies */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-300 mb-2">Policies</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <Link to="/terms-and-conditions" className=" text-lg hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-and-policy" className="text-lg hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

           {/* 📞 Contact */}
           <div className="w-full flex flex-col items-center text-center space-y-4">
      <h3 className="text-sm font-semibold uppercase text-gray-300 tracking-wide">
        Contact
      </h3>

      <div className="flex items-center space-x-2">
        <Phone className="h-5 w-5 text-green-400" />
        <a
          href="tel:18003094983"
          className="text-sm text-gray-100 hover:text-white transition"
        >
          1800 309 4983
        </a>
      </div>

      <div className="flex items-center space-x-2">
        <Mail className="h-5 w-5 text-blue-400" />
        <a
          href="mailto:kaaikanionline@gmail.com"
          className="text-sm text-gray-100 hover:text-white transition"
        >
          kaaikanionline@gmail.com
        </a>
      </div>

      <div className="text-sm text-gray-400">
        <p>Monday to Sunday</p>
        <p>7:00 AM – 9:30 PM</p>
      </div>
    </div>

       

          
          <div className="flex flex-col items-center sm:items-start lg:items-end justify-between">
            
            <div className="flex flex-col items-center sm:items-start lg:items-end space-y-2">

              <ArrowUpRight className="w-8 h-8 text-white" />
              <p className="text-lg font-semibold">Talk to us.</p>
            </div>
            <p className="text-xs text-gray-400 mt-4 lg:mt-auto">© KaaiKani 2025</p>
          </div>

        </div>
      </div>

      <div className="w-full px-3 pb-5 sm:px-6 lg:px-3">
              <div className="mt-5 border-t border-white/10 pt-6">
      
      
                <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 w-full">
                  {/* Contact and About Links - visible on all views, horizontal on desktop */}
                  <div className="flex flex-wrap justify-center items-center space-x-8 order-1 md:order-1">
                   <Link
                      to="/privacy-and-policy"
                      className="text-white transition-colors duration-200 text-xs"
                    >
                      Privacy & Policy
                    </Link>
                    <Link
                      to="/terms-and-conditions"
                      className="text-white transition-colors duration-200 text-xs"
                    >
                      T&C
                    </Link>
                  </div>
      
                  {/* Copyright Text - always centered */}
                  <p className="text-center text-xs leading-4 text-white order-2 ">
                    &copy; 2025 KaaiKani, Inc. All rights reserved.
                  </p>
      
                  {/* Social Media Icons - right on desktop, bottom on mobile */}
                  <div className="flex justify-center md:justify-end space-x-6 order-3 w-full md:w-auto">
                    {navigation.social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors duration-200"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon aria-hidden="true" className="h-8 w-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
    </footer>
  )
}
