import { atom } from 'nanostores';
import type { FootnoteContent } from '../types/cmsFootnoteType';
import type { Tuk } from '../types/appTypes';

export const isOpen = atom<boolean>(false);
export const originalPauriTuks = atom<Tuk[] | null>(null);
export const originalTuk = atom<string | null>(null);
export const bhaiVirSinghFootnote = atom<string | null>(null);
export const customFootnotes = atom<FootnoteContent | null>(null);
