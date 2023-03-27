import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useStore } from '@nanostores/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './styles/FootnoteSlideOver.css';
import {
  isOpen,
  originalTuk,
  bhaiVirSinghFootnote,
  customFootnotes,
} from '../store/tukFootnoteStore';

export default function FootnoteSlideOver() {
  const $isOpen = useStore(isOpen);
  const $bhaiVirSinghFootnote = useStore(bhaiVirSinghFootnote);
  const $originalTuk = useStore(originalTuk);
  const $customFootnotes = useStore(customFootnotes);

  return (
    <Transition.Root show={$isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => isOpen.set(false)}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="footnote-content flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Footnotes
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => isOpen.set(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Bhai Vir Singh Footnotes BELOW */}
                    {$bhaiVirSinghFootnote && (
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <p className="text-lg font-semibold py-2">Dr. Bhai Vir Singh</p>

                        <blockquote className="relative">
                          <svg
                            className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                              fill="currentColor"
                            />
                            <div className="relative z-10">
                              <p className="text-gray-800 sm:text-xl dark:text-black">
                                {$originalTuk}
                              </p>
                            </div>
                          </svg>
                        </blockquote>
                        <div
                          className="mt-6 footnote"
                          dangerouslySetInnerHTML={{
                            __html: $bhaiVirSinghFootnote,
                          }}
                        ></div>
                      </div>
                    )}
                    {/* Bhai Vir Singh Footnotes ABOVE */}

                    {/* ------------------------------- */}

                    {/* Custom Footnotes BELOW */}
                    {$customFootnotes && (
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {Object.entries($customFootnotes).map(([key, value]) => {
                          if (value !== null) {
                            return (
                              <div key={key}>
                                <p className="font-semibold py-2">{key}:</p>

                                {/* Create HTML Dom Elements from CMS Rich Text */}
                                {documentToReactComponents(value.content)}

                                {/* Create <img /> */}
                                {value.media && (
                                  <figure>
                                    <img
                                      src={value.media.fields.file.url}
                                      alt={value.media.fields.title}
                                    />
                                    {value.media.fields.description && (
                                      <figcaption>{value.media.fields.description}</figcaption>
                                    )}
                                  </figure>
                                )}
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                    {/* Custom Footnotes ABOVE */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
