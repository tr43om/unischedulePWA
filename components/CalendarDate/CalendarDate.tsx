import { useDateStore } from "@/zustandStore";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import React from "react";

type CalendarDateProps = {
  date: Date;
};

const CalendarDate = ({ date }: CalendarDateProps) => {
  const { selectDate, selectedDate } = useDateStore((state) => {
    return { selectedDate: state.selectedDate, selectDate: state.selectDate };
  });

  const weekDay = format(date, "EEEEEE", { locale: ru });
  const day = date.getDate();

  const isBackgroundActive =
    selectedDate === date.getTime() ? "bg-primary" : "bg-transparent";

  const isTextActive =
    selectedDate === date.getTime() ? "text-gray-100" : "text-gray-400";

  return (
    <div
      className={`group mx-1 flex w-16 cursor-pointer justify-center rounded-lg	transition-all	 duration-300   `}
      onClick={(e) => {
        selectDate(date.getTime());
      }}
    >
      <div className="flex items-center ">
        <div className="text-center">
          <p
            className={` flex h-10 w-10 place-content-center place-items-center rounded-full text-sm transition-all duration-300 sm:group-hover:text-gray-100 ${isTextActive} ${isBackgroundActive} sm:group-hover:bg-primary`}
          >
            {day}
          </p>
          <p
            className={`mt-2 text-sm text-gray-400	transition-all duration-300 `}
          >
            {weekDay}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendarDate;
