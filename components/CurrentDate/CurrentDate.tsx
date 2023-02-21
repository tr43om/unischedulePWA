"use client";
import { useDateStore } from "@/zustandStore";
import { getDate, format } from "date-fns";
import { ru } from "date-fns/locale";
import React from "react";

const CurrentDate = () => {
  const selectedDate = useDateStore((state) => state.selectedDate);
  const currentWeek = useDateStore((state) => state.currentWeek);

  const selectedDay = getDate(new Date(selectedDate));

  const selectedMonth = format(new Date(selectedDate), "MMMM", {
    locale: ru,
  });
  return (
    <div>
      <p className="text-lg font-bold">
        {selectedDay} {selectedMonth}
      </p>
      <p className="text-sm text-gray-400">{currentWeek} учебная неделя</p>
    </div>
  );
};

export default CurrentDate;
