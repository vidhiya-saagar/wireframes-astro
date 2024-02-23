import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import KaviLogo from '../assets/KaviSantokhSingh_128.png';

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-base-100 shadow mb-8">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between mx-auto max-w-3xl">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-base-content hover:bg-neutral hover:text-neutral-focus focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-8 w-auto" src={KaviLogo.src} alt="Kavi Santokh Singh Logo" />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Use "text-primary" for active link, "text-base-content hover:text-primary-focus" for others */}
                  <a
                    id="nav__home"
                    href="/"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-base-content hover:border-primary hover:text-primary-focus"
                  >
                    Home
                  </a>
                  <a
                    id="nav__explore"
                    href="/books"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-base-content hover:border-primary hover:text-primary-focus"
                  >
                    Explore
                  </a>
                  <a
                    id="nav__rut-1"
                    href="/books/rut-1"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-base-content hover:border-primary hover:text-primary-focus"
                  >
                    Rut 1 - Guru Gobind Singh
                  </a>
                  <a
                    id="nav__blog"
                    href="/blog"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-base-content hover:border-primary hover:text-primary-focus"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2 bg-base-100">
              {/* Adjusted to "hover:bg-base-200 hover:text-base-content" for better visibility */}
              <Disclosure.Button
                as="a"
                id="nav__home"
                href="/"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-base-content hover:border-primary hover:bg-base-200 hover:text-base-content"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                id="nav__explore"
                href="/books"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-base-content hover:border-primary hover:bg-base-200 hover:text-base-content"
              >
                Explore Suraj
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                id="nav__rut-1"
                href="/books/rut-1"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-base-content hover:border-primary hover:bg-base-200 hover:text-base-content"
              >
                Rut 1 - Guru Gobind Singh
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                id="nav__blog"
                href="/blog"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-base-content hover:border-primary hover:bg-base-200 hover:text-base-content"
              >
                Blog
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
