import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import {
  Query,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase.config";
import { useDateStore } from "../dateStore";
import { ScheduleType } from "@/types";

type Store = {
  groupId: string;
  addGroupId: (id: string) => void;
  schedule: ScheduleType[];
  getSchedule: () => void;
};

export const useScheduleStore = create<Store>()(
  devtools(
    immer((set, get) => ({
      schedule: [],
      groupId: "",
      addGroupId: (id) => set((state) => (state.groupId = id)),

      getSchedule: async () => {
        const ref = query(
          collection(
            db,
            `schedule/${"bAXxgsZgS37AQbMD0SSv"}/week_${
              useDateStore.getState().currentWeek
            }`
          ),
          where("weekday", "==", useDateStore.getState().currentWeekday)
        ) as Query<ScheduleType>;

        const orderedDocs = query(ref, orderBy("lessonStarts"));

        const { docs } = await getDocs(ref);

        const schedule = docs.map((schedule) => {
          return { ...schedule.data(), id: schedule.id };
        });
        set((state) => {
          state.schedule = schedule;
        });
      },
    }))
  )
);
