import { atom } from "nanostores";

interface ChapterInfo {
  id: number;
  number: number;
  title: string;
  enTitle: string;
  enShortSummary: string;
  artworkUrl: string;
  setOpenPreview: Function;
  bookName: string;
}

export const isOpen = atom(false);
export const chapterToDisplay: null | ChapterInfo = atom(null);
