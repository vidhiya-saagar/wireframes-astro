<script>
  export let chapter = {};
  export let index = 1;
  export let description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac orci ultricies, viverra tellus sit amet, lobortis elit. Aliquam erat volutpat. Sed metus turpis, rutrum eu varius non, bibendum quis libero. Invulputate.";

  function updateStateForModal() {
    // chapterToPreview.set(chapter);
    // openChapterPreview.set(true);
  }
</script>

<div
  class="flex space-x-2 border-black border-b-2 py-4 items-center justify-between"
  on:click={updateStateForModal}
>
  <div class="space-y-3 w-2/3">
    <div class="flex items-baseline justify-between">
      <p class="text-lg font-serif font-bold line-clamp-2 mr-5 cursor-pointer">
        {chapter.title_unicode}
      </p>

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
