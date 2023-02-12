import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { getCurrentWeek } from "../../utils/index";
import { toDate } from "date-fns";

type Store = {
  selectedDate: number;
  selectDate: (date: number) => void;
  currentWeek: number;
  currentWeekday: string;
};

export const useDateStore = create<Store>()(
  devtools(
    immer((set) => ({
      selectedDate: new Date(new Date().setHours(0, 0, 0, 0)).getTime(),
      currentWeek: 1,
      currentWeekday: "понедельник",
      selectDate: (date) => {
        set((state) => {
          state.currentWeekday = toDate(date)
            .toLocaleDateString("ru-Ru", { weekday: "long" })
            .split(",")[0]
            .toLowerCase();

          state.selectedDate = date;
          state.currentWeek = getCurrentWeek(new Date(date));
        });
      },
    }))
  )
);
