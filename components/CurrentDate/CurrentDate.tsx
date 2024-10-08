"use client";
import { useDateStore } from "@/zustandStore";
import { getDate, format, differenceInWeeks } from "date-fns";
import { ru } from "date-fns/locale";
import React from "react";

const CurrentDate = () => {
  const selectedDate = useDateStore((state) => state.selectedDate);
  const selectDate = useDateStore((state) => state.selectDate);
  const currentWeek = useDateStore((state) => state.currentWeek);

  const selectedDay = getDate(new Date(selectedDate));

  const selectedMonth = format(new Date(selectedDate), "MMMM", {
    locale: ru,
  });
  return (
    <div>
      <p className="text-lg font-bold lg:text-3xl">
        {selectedDay} {selectedMonth}
      </p>
      {currentWeek === 0 ? (
        <p className="text-sm text-gray-400 lg:text-lg">Ура, каникулы! 🥳</p>
      ) : (
        <p className="text-sm text-gray-400 lg:text-lg">
          {currentWeek} учебная неделя
        </p>
      )}
    </div>
  );
};

export default CurrentDate;
