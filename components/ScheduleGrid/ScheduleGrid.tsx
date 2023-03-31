"use client";

import { TransformedScheduleDto } from "@/types";
import { getCurrentWeek } from "@/utils";
import { useDateStore } from "@/zustandStore";
import React from "react";
import ru from "date-fns/locale/ru";
import format from "date-fns/format";

import { ClockIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Badge, SecondLangFlag } from "../ui";
import { NoSchedule } from "../search";
type ScheduleGridProps = {
  scheduleData: TransformedScheduleDto;
};

const ScheduleGrid = ({ scheduleData }: ScheduleGridProps) => {
  const { data, type: scheduleType } = scheduleData;
  const { selectedDate } = useDateStore((state) => state);
  const weeklySchedule = data
    .filter((day) => {
      return getCurrentWeek(selectedDate) === getCurrentWeek(day.timestamp);
    })
    .sort((a, b) => a.timestamp - b.timestamp);

  const weeklyTimetable = Array.from(
    new Set(
      weeklySchedule
        .map((day) => day.lessons.map((lesson) => lesson.startsAt))
        .flat()
    )
  );

  if (weeklySchedule.length === 0) {
    return (
      <div className="w-full  items-center ">
        <NoSchedule label="Расписание на эту неделю пока не вышло" />
      </div>
    );
  }

  return (
    <div className="relative    overflow-x-hidden">
      <table className="relative  table w-full table-fixed border-separate border-spacing-2">
        {/* head */}
        <thead>
          <tr>
            <th className=" sticky top-0 left-0 !z-0 w-[75px] justify-items-center bg-neutral">
              <ClockIcon
                width={20}
                height={20}
                className="mx-auto text-white"
              />
            </th>
            {weeklySchedule.map((day) => (
              <th
                key={day.timestamp + "th"}
                className="sticky top-0 left-0 bg-neutral"
              >
                <div className="grid justify-items-center">
                  <p className="text-2xl font-light text-white">
                    {new Date(day.timestamp).getDate()}
                  </p>
                  <p className="text-md font-light text-gray-200">
                    {format(day.timestamp, "EEEE", { locale: ru })}
                  </p>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        {/* body */}
        <tbody>
          {weeklyTimetable.map((time, i) => (
            <tr key={`${time}`}>
              <td className="  font-bold text-neutral dark:text-gray-500">
                {time}
              </td>
              {weeklySchedule.map(({ lessons, timestamp }) => {
                if (!lessons[i]) return <td />;

                const { lesson, type, groups, professors, id, auditories } =
                  lessons[i];
                return (
                  <td
                    key={`${timestamp}-day`}
                    className={`m-6 whitespace-normal rounded-sm    border-b-[2px] border-gray-300 align-top dark:border-gray-600`}
                  >
                    <>
                      <p className="text-left text-sm font-bold">{lesson}</p>

                      {scheduleType === "group" && (
                        <div className="mt-2 mb-2 grid gap-2">
                          {professors.map(
                            ({ id, shortname, name, secondLanguage }, i) => (
                              <div
                                key={`professor-${id}-${id}`}
                                className="flex items-center gap-1"
                              >
                                <div className="flex items-center gap-1">
                                  {secondLanguage && (
                                    <SecondLangFlag lang={secondLanguage} />
                                  )}
                                  <div
                                    className="tooltip tooltip-top  cursor-pointer hover:tooltip-open"
                                    data-tip={name}
                                  >
                                    <Link
                                      href={`../professors/${id}`}
                                      className="whitespace-nowrap text-xs   normal-case text-gray-600 underline-offset-2 hover:text-primary hover:underline dark:text-gray-300"
                                    >
                                      {shortname}
                                    </Link>
                                  </div>
                                </div>
                                <div className=" ml-auto text-right">
                                  <div className="ml-auto flex justify-end gap-1">
                                    <p className="text-xs text-gray-600 dark:text-gray-300">
                                      {auditories[i].name}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}

                      {scheduleType === "professor" && (
                        <div className="mt-2 mb-2">
                          {groups.map(({ id, name }) => (
                            <div key={`group-${id}-${id}`}>
                              <Link
                                href={`../groups/${id}`}
                                className="btn-link btn-xs btn flex items-center justify-start gap-1.5 justify-self-start p-0"
                              >
                                <UserIcon
                                  width={15}
                                  height={15}
                                  className="text-primary"
                                />
                                <p className="text-sm">{name}</p>
                              </Link>
                            </div>
                          ))}
                          <div className="mt-3 flex items-center gap-1">
                            <MapPinIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                            <p className="text-xs text-gray-600 dark:text-gray-300">
                              {auditories[0].name}
                            </p>
                          </div>
                        </div>
                      )}
                      <Badge label={type} />
                    </>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleGrid;
