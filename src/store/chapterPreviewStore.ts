import { atom } from 'nanostores';

interface ChapterInfo {
  id: number;
  number: number;
  title: string;
  enTitle: string;
  enShortSummary: string;
  artworkUrl: string;
  bookName: string;
}

export const isOpen = atom<boolean>(false);
export const chapterToDisplay = atom<ChapterInfo | null>(null);
