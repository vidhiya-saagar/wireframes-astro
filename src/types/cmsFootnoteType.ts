import { Entry, Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface FootnoteContentItem {
  content: Document | null;
  media: Asset | null;
}

export type EditorName = 'Vidhiya Saagar' | 'Kamalpreet Singh' | 'Manglacharan';

export type FootnoteContent = {
  [K in EditorName]: FootnoteContentItem | null;
};

export interface FootnoteFields {
  entryName: string;
  vidhiyaSaagarContent: Document;
  vidhiyaSaagarMedia: Asset;
  kamalpreetSinghContent: Document;
  kamalpreetSinghMedia: Asset;
  manglacharanContent: Document;
}

export type FootnoteEntry = Entry<FootnoteFields>;
