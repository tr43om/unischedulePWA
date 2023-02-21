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
  groupId: number;
  addGroupId: (id: number) => void;
  schedule: ScheduleType[];
};

export const useScheduleStore = create<Store>()(
  devtools(
    immer((set, get) => ({
      schedule: [],
      groupId: 0,
      addGroupId: (id) => set((state) => (state.groupId = id)),
    }))
  )
);
