<script lang="ts">
  import {
    isOpen,
    originalTuk,
    bhaiVirSinghFootnote,
    customFootnotes,
  } from "../store/tukFootnoteStore";

  import type { Tuk } from "../types/appTypes";

  export let tuk: Tuk;
  export let pauriNumber: number;
  export let isLastTuk: boolean;

  function openSidePanel() {
    isOpen.set(true);
    bhaiVirSinghFootnote.set(tuk.drVirSinghFootnote);
    originalTuk.set(tuk.originalContent);
    customFootnotes.set(tuk.footnote?.customFootnotes);
  }
</script>

<button class="leading-8 text-lg cursor-pointer" on:click={openSidePanel}>
  <span class="bg-gray-200 py-1">
    {tuk.content}
    <span>
      {isLastTuk ? `॥${pauriNumber}॥` : " ।"}
    </span>
  </span>
</button>
