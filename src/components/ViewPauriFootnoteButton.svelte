<script lang="ts">
  import {
    isOpen,
    originalPauriTuks,
    customFootnotes,
    bhaiVirSinghFootnote,
    originalTuk,
  } from '../store/tukFootnoteStore';

  import type { Pauri } from '../types/appTypes';

  export let pauri: Pauri;

  function openPauriFootnote() {
    isOpen.set(true);
    bhaiVirSinghFootnote.set(null); // Bhai Vir Singh footnote is not available for pauri, yet!
    originalTuk.set(null);
    originalPauriTuks.set(pauri.tuks);
    customFootnotes.set(pauri.footnote.customFootnotes);
  }
</script>

<button
  type="button"
  class="rounded bg-primary bg-opacity-20 py-1 px-2 text-xs font-semibold text-primary shadow-sm hover:bg-primary hover:bg-opacity-30 font-sans mt-4"
  on:click={openPauriFootnote}
>
  View Footnote for Pauri {pauri.number}
</button>
