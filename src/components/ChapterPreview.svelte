<script>
  import { isOpen, chapterToDisplay } from "../store/chapterPreviewStore";

  function closeModal() {
    const modalContainer = document.querySelector(".chapter-preview-container");
    isOpen.set(false);
    setTimeout(function displayNoneOnModal() {
      modalContainer.style.display = "none";
    }, 300);
  }
</script>

<div
  class={`chapter-preview-container relative z-10 ${
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

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div
      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
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
        class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
      >
        <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
          <button
            type="button"
            class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            on:click={closeModal}
          >
            <span class="sr-only">Close</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="sm:flex sm:items-start">
          <!-- <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"> -->
          <div class="mt-3 text-center">
            <h4 class="text-base text-center">
              {$chapterToDisplay.bookName || "Book Name"}
            </h4>
            <h3
              class="text-2xl p-2 font-semibold leading-6 text-gray-900 text-center"
            >
              {$chapterToDisplay.title_unicode}
            </h3>

            <div class="my-8 flex justify-center items-center">
              <div class="rounded-full p-24 sm:p-36 bg-slate-400" />
            </div>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
                arcu sed mauris feugiat luctus sit amet ut est. Praesent eros
                dolor, faucibus ac semper vel, sollicitudin ac ipsum. Duis
                suscipit eu dui vitae ullamcorper. Aenean venenatis fermentum
                ullamcorper. Sed quis enim tempus, vehicula dui vitae,
                sollicitudin velit. Duis vel rutrum ante. Nunc quis dui
                molestie, venenatis enim ac, consectetur quam. Quisque faucibus
                auctor bibendum. Morbi pellentesque est eget erat tincidunt, et
                faucibus nunc ultrices. Nulla congue arcu et scelerisque
                iaculis. Quisque sit amet risus et risus fringilla tristique.
                Maecenas efficitur, orci vel mollis mollis, quam lectus volutpat
                lectus, in tristique turpis lectus nec enim. Nulla pellentesque
                nulla orci, ac aliquam erat interdum ut. Nunc aliquam dui eu
                dignissim luctus. Nam vel lacus eget lectus tempor dictum. Nunc
                purus enim, fringilla ut consectetur malesuada, finibus vel
                justo.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >Deactivate</button
          >
          <button
            type="button"
            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            on:click={closeModal}
          >
            Cancel
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
