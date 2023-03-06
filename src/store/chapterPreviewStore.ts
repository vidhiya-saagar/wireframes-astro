import { atom, action } from "nanostores";

const defaultChapter = {
  id: 1,
  number: 1,
  order_number: 1,
  title_unicode: "Manglacharan",
  title_gs: "Manglacharan",
  title_transliteration_english: "Manglacharan",
  description_english: "The greatest book on Guru Nanak.",
  title_translation: "Sri Manglacharan",
  artwork_url:
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mural_painting_of_Guru_Nanak_from_Gurdwara_Baba_Atal_Rai.jpg",
  bookName: "Nanak Prakash",
  book_id: 1,
};

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

export const isOpen = atom(true);
export const chapterToDisplay: null | ChapterInfo = atom(defaultChapter);
