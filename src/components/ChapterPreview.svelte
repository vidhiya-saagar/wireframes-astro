<script>
  import { isOpen, chapter } from "../store/chapterPreviewStore";

  function closeModal() {
    const modalContainer = document.querySelector(".chapter-preview-container");
    isOpen.set(false);
    setTimeout(function displayNoneOnModal() {
      modalContainer.style.display = "none";
    }, 300);
  }
</script>

<div
  class={`relative z-10 chapter-preview-container ${
    $isOpen ? "open" : "close"
  }`}
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
>
  <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

  <div class="fixed inset-0 z-10 overflow-y-auto outside">
    <div
      class={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 chapter-preview-panel ease ${
        $isOpen ? "open" : "close"
      }`}
    >
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div
        class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
      >
        <div>
          <div
            class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
          >
            <svg
              class="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3
              class="text-base font-semibold leading-6 text-gray-900"
              id="modal-title"
            >
              Payment successful
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                $isOpen:
                <code>
                  {JSON.stringify($isOpen, null, 2)}
                </code>
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6 translate-y-4">
          <button
            type="button"
            class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
            on:click|once={closeModal}
          >
            > Go back to dashboard
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .open {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 300ms;
    opacity: 1;
  }

  .open .chapter-preview-panel {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 300ms;
    opacity: 1;
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .close {
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-duration: 200ms;
    opacity: 0;
  }

  .close .chapter-preview-panel {
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-duration: 200ms;
    opacity: 0;
    --tw-translate-y: 1rem /* 16px */;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
</style>
