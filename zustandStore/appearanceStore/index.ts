import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import { getCurrentWeek } from "../../utils/index";
import { toDate } from "date-fns";

type Store = {
  view: string;
  theme: string;
  setTheme: (theme: string) => void;
  setView: (view: string) => void;
};

export const useAppearanceStore = create<Store>()(
  devtools(
    immer(
      persist(
        (set) => ({
          view: "day",
          setView: (view) =>
            set((state) => {
              state.view = view;
            }),
          theme: "lofi",
          setTheme(theme) {
            set((state) => {
              state.theme = theme;
            });
          },
        }),
        { name: "appearanceStorage" }
      )
    )
  )
);
