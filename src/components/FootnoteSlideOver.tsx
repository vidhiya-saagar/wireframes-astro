import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useStore } from '@nanostores/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const contentfulOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description } = node.data.target.fields;
      const { url } = node.data.target.fields.file;
      return (
        <figure>
          <img src={url} alt={title} loading="lazy" />
          {description && <figcaption>{description}</figcaption>}
        </figure>
      );
    },
  },
};
import './styles/FootnoteSlideOver.css';
import {
  isOpen,
  originalTuk,
  bhaiVirSinghFootnote,
  customFootnotes,
} from '../store/tukFootnoteStore';

export default function FootnoteSlideOver(): JSX.Element {
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
                        <Dialog.Title className="dialog-title text-base font-semibold leading-6 text-gray-500">
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
                          <p className="text-gray-800 sm:text-xl dark:text-black">{$originalTuk}</p>
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
                      <div className="relative flex-1 px-4 sm:px-6">
                        {Object.entries($customFootnotes).map(([key, value]) => {
                          if (value !== null) {
                            return (
                              <div key={key}>
                                <div className="flex items-center mb-4">
                                  <img
                                    className="inline-block h-8 w-8 rounded-full mr-2"
                                    src="https://i.postimg.cc/x8kb5d3C/image.png"
                                    alt={`Avatar of ${key}`}
                                    loading="lazy"
                                  />
                                  <h4 style={{ marginBottom: 0 }}>{key}:</h4>
                                </div>

                                {/* Create HTML Dom Elements from Contenful CMS Rich Text */}
                                {documentToReactComponents(value.content, contentfulOptions)}

                                {/* Create <img /> */}
                                {value.media && (
                                  <figure>
                                    <img
                                      src={value.media.fields.file.url}
                                      alt={value.media.fields.title}
                                      loading="lazy"
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
