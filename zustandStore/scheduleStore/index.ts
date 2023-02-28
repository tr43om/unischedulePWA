import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

import { OmsuScheduleDto } from "../../types/index";

type Store = {
  schedule: OmsuScheduleDto[];
  addSchedule: (schedule: OmsuScheduleDto[]) => void;
};

export const useScheduleStore = create<Store>()(
  devtools(
    persist(
      immer((set, get) => ({
        schedule: [],
        addSchedule(schedule) {
          set((state) => {
            state.schedule = schedule;
          });
        },
      })),
      { name: "schedule" }
    )
  )
);
