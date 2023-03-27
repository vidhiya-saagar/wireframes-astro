<script lang="ts">
  import { isOpen, originalPauriTuks, customFootnotes } from "../store/tukFootnoteStore";

  import type { Pauri } from "../types/appTypes";

  export let pauri: Pauri;

  function openSidePanel() {
    isOpen.set(true);
    originalPauriTuks.set(pauri.tuks);
    customFootnotes.set(pauri.footnote.customFootnotes);
  }
</script>

<button
  type="button"
  class="rounded bg-indigo-50 py-1 px-2 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 font-sans mt-4"
  on:click={openSidePanel}
>
  View Footnote for Pauri {pauri.number}
</button>
