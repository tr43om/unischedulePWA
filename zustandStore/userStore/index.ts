import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { OmsuGroupType } from "@/types";

type Store = {
  groupId: number | null;
  course: number | null;
  name: string | null;
  chooseGroup: (group: OmsuGroupType) => void;
};

export const useUserStore = create<Store>()(
  devtools(
    persist(
      immer((set, get) => ({
        groupId: null,
        course: null,
        name: null,
        chooseGroup: (group) =>
          set((state) => {
            state.groupId = group.id;
            state.course = group.course;
            state.name = group.name;
          }),
      })),
      { name: "userStore" }
    )
  )
);
