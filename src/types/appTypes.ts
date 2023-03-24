export type Book = {
  id: number;
  title: string;
  enTitle: string;
  enShortSummary: string | null;
  enSynopsis: string | null;
  artworkUrl: string | null;
};

export type Chapter = {
  id: number;
  number: number;
  title: string;
  enTitle: string | null;
  enShortSummary: string | null;
  artworkUrl: string | null;
  book: Book;
  chhands: Chhand[];
};

export type Chhand = {
  id: number;
  sequence: number;
  name: string;
  pauris: Pauri[];
};

export type Pauri = {
  id: number;
  number: number;
  enTranslation: string | null;
  translation: Translation;
  footnote: Footnote | null;
  tuks: Tuk[];
};

export type Translation = {
  enTranslation: string;
  enTranslator: string | null;
};

export type Footnote = {
  entryId: string;
  customFootnotes?: CustomFootnote;
};

export type Tuk = {
  id: number;
  sequence: number;
  content: string;
  originalContent: string;
  drVirSinghFootnote: string | null;
  translation: Translation | null;
  footnote: Footnote | null;
};

export type CustomFootnote = {
  [key: string]: {
    content: string;
    media?: Media;
  };
};

export type Media = {
  fields: {
    file: {
      url: string;
    };
  };
};
