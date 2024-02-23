<script lang="ts">
  import { isOpen, chapterToDisplay } from '../store/chapterPreviewStore';

  function closeModal() {
    const container: HTMLElement = document.querySelector('.chapter-preview-container');
    isOpen.set(false);
    setTimeout(function displayNoneOnModal() {
      container.style.display = 'none';
    }, 300);
  }
</script>

<div
  class={`chapter-preview-container relative z-10 ${$isOpen ? 'open' : 'close'}`}
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
  style="display: none"
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

  <div class="fixed inset-0 bg-base-200 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div
      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 chapter-preview-panel"
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
        class="relative transform overflow-hidden rounded-lg bg-base-100 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
      >
        <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
          <button
            type="button"
            class="rounded-md bg-base-100 text-base-content hover:text-primary-focus focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center">
            <h4 class="text-base text-center text-base-content">
              {$chapterToDisplay?.bookName || 'Book Name'}
            </h4>
            <h3 class="text-2xl p-2 font-semibold leading-6 text-base-content text-center">
              {$chapterToDisplay?.title || 'Chapter Title'}
            </h3>

            <div class="my-8 flex justify-center items-center">
              <div class="rounded-full p-24 sm:p-36 bg-neutral relative">
                <img
                  alt="Chapter artwork"
                  src={$chapterToDisplay?.artworkUrl}
                  class="absolute inset-0 h-full w-full object-cover rounded-full"
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="mt-2 text-left text-base-content">
              {#if $chapterToDisplay?.enLongSummary}
                {#each $chapterToDisplay.enLongSummary.split('\n') as p}
                  <p class="my-2">{p}</p>
                {/each}
              {:else}
                <p>Failed to load chapter summary.</p>
              {/if}
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="inline-flex w-full justify-center rounded-md bg-accent px-3 py-2 text-sm font-semibold text-accent-content shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:col-start-2"
            on:click={() => {
              window.location.href = `/chapters/${$chapterToDisplay?.id}`;
            }}
          >
            Read
          </button>
          <button
            type="button"
            class="mt-3 inline-flex w-full justify-center rounded-md bg-base-200 px-3 py-2 text-sm font-semibold text-base-content shadow-sm ring-1 ring-inset ring-neutral hover:bg-base-100 sm:col-start-1 sm:mt-0 sm:mr-3"
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
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
      scaleY(var(--tw-scale-y));
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
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
      scaleY(var(--tw-scale-y));
  }
</style>
