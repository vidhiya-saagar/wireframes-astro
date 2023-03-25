<script lang="ts">
  import {
    isOpen,
    originalPauriTuks,
    customFootnotes,
  } from "../store/tukFootnoteStore";

  import type { Pauri } from "../types/appTypes";

  export let pauri: Pauri;

  function openSidePanel() {
    isOpen.set(true);
    originalPauriTuks.set(pauri.tuks);
    customFootnotes.set(pauri.footnote.customFootnotes);
  }
</script>

<button
  class="leading-8 text-lg cursor-pointer p-2 bg-amber-200 text-slate-800"
  on:click={openSidePanel}
>
  View Footnote for Verse {pauri.number}
</button>
