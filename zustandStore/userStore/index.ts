import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

type Store = {
  groupId: number | null;
  addGroupId: (id: number) => void;
};

export const useUserStore = create<Store>()(
  devtools(
    persist(
      immer((set, get) => ({
        groupId: null,
        addGroupId: (id) =>
          set((state) => {
            state.groupId = id;
          }),
      })),
      { name: "userStore" }
    )
  )
);
