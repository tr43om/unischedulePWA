"use client";
import React, { Suspense, useEffect } from "react";
import { TransformedScheduleDto } from "@/types";
import { useDateStore, useUserStore } from "@/zustandStore";
import {
  ScheduleCard,
  NoSchedule,
  LoadingIndicator,
  SkeletonScheduleCard,
  ResultsFor,
} from "@/components";
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

  console.log(scheduleOfSelectedDay);
  if (scheduleOfSelectedDay === undefined) {
    return <NoSchedule />;
  }
  // if (isLoading) {
  //   return (
  //     <div>
  //       <div className="mb-10 h-4 w-20 animate-pulse rounded-lg bg-gray-400"></div>
  //       <div className="mt-5 grid gap-10">
  //         {Array.from({ length: 3 }).map((_, i) => (
  //           <SkeletonScheduleCard key={i} />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <ul className=" mt-5 grid gap-10 ">
      {scheduleOfSelectedDay?.lessons?.map((day) => (
        <ScheduleCard schedule={day} key={day.id} type={schedule.type} />
      ))}
    </ul>
  );
};

export default ScheduleList;
