import { atom } from "nanostores";

interface ChapterInfo {
  id: number;
  number: number;
  order_number: number;
  title_unicode: string;
  title_gs: string;
  title_transliteration_english: string;
  description_english: string;
  title_translation: string;
  artwork_url: string;
  setOpenPreview: Function;
  bookName: string;
}

export const isOpen = atom(false);
export const chapterToDisplay: null | ChapterInfo = atom(null);
