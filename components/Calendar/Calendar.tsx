"use client";
import { useDateStore } from "@/zustandStore";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isSunday,
  isToday,
  parse,
  parseISO,
  startOfMonth,
  startOfToday,
} from "date-fns";
import { ru } from "date-fns/locale";
import { Fragment, useState } from "react";
import { twClassNames } from "@/utils";

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export const Calendar = () => {
  const { selectedDate, selectDate, currentWeek } = useDateStore(
    (state) => state
  );

  let firstDayCurrentMonth = startOfMonth(selectedDate);

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  }).filter((day) => !isSunday(day));

  function previousMonth() {
    let firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
    selectDate(firstDayPrevMonth.getTime());
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    selectDate(firstDayNextMonth.getTime());
  }

  return (
    <div className=" hidden  lg:block">
      <div className=" max-w-md px-4 sm:px-7 md:max-w-4xl md:px-6">
        <div className="  md:divide-x md:divide-gray-200">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="flex-auto text-xl font-semibold text-gray-900 dark:text-white">
                  {format(selectedDate, "d MMMM, yyyy ", { locale: ru })}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {currentWeek} учебная неделя
                </p>
              </div>
              <div className="flex">
                <button
                  type="button"
                  onClick={previousMonth}
                  className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 dark:text-gray-300"
                >
                  <span className="sr-only">Предыдущий месяц</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  onClick={nextMonth}
                  type="button"
                  className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500  dark:text-gray-300"
                >
                  <span className="sr-only">Следующий месяц</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-6 text-center text-sm leading-6 text-gray-500 dark:text-gray-300">
              <div>Пн</div>
              <div>Вт</div>
              <div>Ср</div>
              <div>Чт</div>
              <div>Пт</div>
              <div>Сб</div>
            </div>
            <div className="text-md mt-2 grid grid-cols-6 dark:text-white">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={twClassNames(
                    dayIdx === 0 && colStartClasses[getDay(day) - 1],
                    "p-2"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => selectDate(day.getTime())}
                    className={twClassNames(
                      isEqual(day, selectedDate) && "text-primary",
                      !isEqual(day, selectedDate) &&
                        isToday(day) &&
                        "text-primary",
                      !isEqual(day, selectedDate) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-900 dark:text-white",
                      !isEqual(day, selectedDate) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDate) &&
                        isToday(day) &&
                        "bg-primary",
                      isEqual(day, selectedDate) &&
                        !isToday(day) &&
                        "bg-primary",
                      !isEqual(day, selectedDate) &&
                        "hover:bg-gray-200 lg:hover:bg-primary",
                      (isEqual(day, selectedDate) || isToday(day)) &&
                        "font-semibold text-neutral",
                      "mx-auto flex h-12 w-12 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
