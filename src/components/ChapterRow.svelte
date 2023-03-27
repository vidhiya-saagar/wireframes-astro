<script lang="ts">
  import { isOpen, chapterToDisplay } from "../store/chapterPreviewStore";
  import type { Chapter } from "../types/appTypes";

  export let chapter: Chapter = null;
  export let bookName: string = "";
  export let index = 1;
  export let description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac orci ultricies, viverra tellus sit amet, lobortis elit. Aliquam erat volutpat. Sed metus turpis, rutrum eu varius non, bibendum quis libero. Invulputate.";

  function updateStateForModal() {
    const container: HTMLElement = document.querySelector(".chapter-preview-container");
    container.style.display = "";
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

    <p>{description}</p>
  </div>
  <div class="bg-slate-300 h-32 w-28" />
</div>
