import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { OmsuGroupType } from "types";
import { useUserStore } from "../userStore";

type Store = {
  isOpen: boolean;
  toggleSearch: () => void;
  closeSearch: () => void;
  chooseQuery: (query: OmsuGroupType) => void;
  recents: OmsuGroupType[];
  deleteFromRecents: (id: number) => void;
  deleteFromFavorites: (id: number) => void;
  addToRecents: (group: OmsuGroupType) => void;
  addToFavorites: (group: OmsuGroupType) => void;

  favorites: OmsuGroupType[];
};

export const useSearchStore = create<Store>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          recents: [],
          favorites: [],
          isOpen: false,
          chooseQuery: (query: OmsuGroupType) => {
            get().closeSearch();
            useUserStore.getState().addGroupId(query.id);
            get().addToRecents(query);
          },
          toggleSearch: () =>
            set((state) => {
              if (useUserStore.getState().groupId !== null) {
                state.isOpen = !state.isOpen;
              }
            }),
          closeSearch: () =>
            set((state) => {
              state.isOpen = false;
            }),

          deleteFromRecents: (id) => {
            set((state) => {
              const recent = state.recents.find(
                (recent) => recent.id === id
              ) as OmsuGroupType;
              state.recents.splice(state.recents.indexOf(recent), 1);
            });
          },

          addToRecents: (group) => {
            // 1. Check if group exists in favorites or recents arrays
            const duplicate = get().recents.find(
              (item) => item.id === group.id
            );

            const existsInRecents = Boolean(duplicate);

            const existsInFavorites = get().favorites.find(
              (item) => item.id === group.id
            );

            if (existsInRecents) {
              get().deleteFromRecents(group.id);
            }

            set((state) => {
              // 2. If there is no duplicate in recents and favorites, add to recents
              if (!existsInRecents && !existsInFavorites) {
                state.recents.unshift(group);
                // 3. If there are more than 4 recents displayed, delete the last one
              } else if (state.recents.length >= 5) {
                state.recents.pop();
                // 4. If recent already exists in array, move it to the first place
              } else if (existsInRecents) {
                state.recents.unshift(duplicate as OmsuGroupType);
              }
            });
          },

          addToFavorites: (group) => {
            // 1. Delete from recents
            get().deleteFromRecents(group.id);

            set((state) => {
              // 2. Add to favorites if unique
              if (!state.favorites.find((item) => item.id === group.id)) {
                state.favorites.unshift(group);
              }
            });
          },

          deleteFromFavorites: (id) => {
            const favorite = get().favorites.find(
              (recent) => recent.id === id
            ) as OmsuGroupType;
            set((state) => {
              state.favorites.splice(state.favorites.indexOf(favorite), 1);
            });
          },
        }),

        {
          name: "searchStore",
          partialize: (state) => ({
            recents: state.recents,
            favorites: state.favorites,
          }),
        }
      )
    )
  )
);
