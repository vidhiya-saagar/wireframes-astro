<script lang="ts">
  import { isOpen, chapterToDisplay } from '../store/chapterPreviewStore';
  import type { Chapter } from '../types/appTypes';

  export let chapter: Chapter = null;
  export let bookName: string = '';
  export let description = chapter.enLongSummary?.slice(0, 155).trim() || '';
  if (!description.endsWith('.')) {
    description += '...';
  }

  function updateStateForModal() {
    const container: HTMLElement = document.querySelector('.chapter-preview-container');
    container.style.display = '';
    isOpen.set(true);
    chapterToDisplay.set({ ...chapter, bookName });
  }
</script>

<div class="flex space-x-2 border-black border-b-2 py-4 items-center justify-between">
  <div class="space-y-3 w-2/3">
    <div class="flex items-baseline justify-between">
      <button
        class="text-lg font-serif text-left font-bold line-clamp-2 mr-5 cursor-pointer"
        on:click={updateStateForModal}
      >
        <span>{chapter.title}</span>
      </button>
    </div>

    <p>{chapter.enShortSummary || description}</p>
  </div>
  <div class="bg-slate-300 h-32 w-28 relative">
    <img
      alt={`Artwork for chapter ${chapter.number}`}
      src={chapter.artworkUrl}
      class="absolute inset-0 h-full w-full object-cover"
      decoding="async"
      loading="lazy"
    />
  </div>
</div>
