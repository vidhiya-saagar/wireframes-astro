<script>
  import { isOpen, chapterToDisplay } from "../store/chapterPreviewStore";

  export let chapter = {};
  export let index = 1;
  export let description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac orci ultricies, viverra tellus sit amet, lobortis elit. Aliquam erat volutpat. Sed metus turpis, rutrum eu varius non, bibendum quis libero. Invulputate.";

  function updateStateForModal() {
    document.querySelector(".chapter-preview-container").style.display = "";
    isOpen.set(true);
    chapterToDisplay.set(chapter);
  }
</script>

<div
  class="flex space-x-2 border-black border-b-2 py-4 items-center justify-between"
>
  <div class="space-y-3 w-2/3">
    <div class="flex items-baseline justify-between">
      <button
        class="text-lg font-serif font-bold line-clamp-2 mr-5 cursor-pointer"
        on:click={updateStateForModal}
      >
        {chapter.title_unicode}
      </button>

      <div class="ml-4 hidden">
        <div
          class="radial-progress text-[8px]"
          style={{
            "--value": 100 - index * 10,
            "--size": "2rem",
            "--thickness": "2px",
          }}
        >
          {100 - index * 10}%
        </div>
      </div>
    </div>

    <p>{description}</p>
  </div>
  <div class="bg-slate-300 h-32 w-28" />
</div>
