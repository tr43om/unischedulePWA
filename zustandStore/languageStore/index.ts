import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import Polyglot from "node-polyglot";

import translations from "@/translations";

type Store = {
  language: string;
  polyglot: Polyglot;
  setLanguage: (language: "en" | "ru") => void;
};

const initialState = {
  language: "ru",
  polyglot: new Polyglot({
    locale: "ru",
    phrases: translations["ru"],
  }),
};

export const useLanguageStore = create<Store>()(
  devtools(
    immer((set, get) => ({
      ...initialState,
      setLanguage: (language) => {
        const polyglot = new Polyglot({ phrases: translations[language] });
        localStorage.setItem("language", language);
        set({ language, polyglot });
      },
    }))
  )
);
