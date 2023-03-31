"use client";

import React from "react";
import { TransformedScheduleDto } from "@/types";
import { useDateStore } from "@/zustandStore";
import { ScheduleCard, NoSchedule } from "@/components";
import * as _ from "lodash";
import { isSameDay } from "date-fns";

type ScheduleListProps = {
  schedule: TransformedScheduleDto;
};

const ScheduleList = ({ schedule }: ScheduleListProps) => {
  const selectedDate = useDateStore((state) => state.selectedDate);

  const scheduleOfSelectedDay = _.find(schedule.data, (day) => {
    return isSameDay(selectedDate, day.timestamp);
  });

  if (scheduleOfSelectedDay === undefined) {
    return (
      <div className="w-full max-w-lg items-center ">
        <NoSchedule label="На сегодня пар нет" />
      </div>
    );
  }

  return (
    <ul className=" mt-5 grid w-full max-w-lg gap-10 lg:gap-5">
      {scheduleOfSelectedDay?.lessons?.map((day) => (
        <ScheduleCard schedule={day} key={day.id} type={schedule.type} />
      ))}
    </ul>
  );
};

export default ScheduleList;
