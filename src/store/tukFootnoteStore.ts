import { atom } from "nanostores";
import { CustomFootnote } from "../types/appTypes";

export type Atom<T> = {
  value: T;
  set: (value: T) => void;
};

export const isOpen: Atom<boolean> = atom(false);
export const originalTuk: Atom<string | null> = atom(null);
export const bhaiVirSinghFootnote: Atom<string | null> = atom(null);
export const customFootnotes: Atom<CustomFootnote | null> = atom(null);
