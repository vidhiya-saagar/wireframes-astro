<script lang="ts">
  import {
    isOpen,
    originalTuk,
    bhaiVirSinghFootnote,
    customFootnotes,
  } from '../store/tukFootnoteStore';

  import type { Tuk } from '../types/appTypes';

  export let tuk: Tuk;
  export let pauriNumber: number;
  export let isLastTuk: boolean;

  function openTukFootnotes() {
    isOpen.set(true);
    bhaiVirSinghFootnote.set(tuk.footnote?.bhaiVirSinghFootnote || null);
    originalTuk.set(tuk.originalContent);
    customFootnotes.set(tuk.footnote?.customFootnotes || null);
  }
</script>

<button class="leading-8 text-xl cursor-pointer text-left" on:click={openTukFootnotes}>
  <span class="bg-gray-200 py-1">
    {tuk.content}<span class="whitespace-nowrap">&nbsp;{isLastTuk ? `॥${pauriNumber}॥` : '।'}</span>
  </span>
</button>
