import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { OmsuGroupType, OmsuProfessorType } from "@/types";

type Store = {
  groupId: number | null;
  professorId: number | null;
  course: number | null;
  name: string | null;
  storeInfoAbout: (data: OmsuGroupType | OmsuProfessorType) => void;
};

function isGroup(
  data: OmsuGroupType | OmsuProfessorType
): data is OmsuGroupType {
  return (data as OmsuGroupType).course !== undefined;
}

export const useUserStore = create<Store>()(
  devtools(
    persist(
      immer((set, get) => ({
        professorId: null,
        groupId: null,
        course: null,
        name: null,
        storeInfoAbout: (data) =>
          set((state) => {
            if (isGroup(data)) {
              state.professorId = null;

              state.groupId = data.id;
              state.name = data.name;
              state.course = data.course;
            } else {
              state.groupId = null;

              state.name = data.name;
              state.professorId = data.id;
            }
          }),
      })),
      { name: "userStore" }
    )
  )
);
