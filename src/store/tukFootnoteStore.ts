import { atom } from "nanostores";
import { FootnoteContent } from "../types/cmsFootnoteType";
export type Atom<T> = {
  value: T;
  set: (value: T) => void;
};

export const isOpen: Atom<boolean> = atom(false);
export const originalPauriTuks: Atom<Tuk[] | null> = atom(null);
export const originalTuk: Atom<string | null> = atom(null);
export const bhaiVirSinghFootnote: Atom<string | null> = atom(null);
export const customFootnotes: Atom<FootnoteContent | null> = atom(null);
