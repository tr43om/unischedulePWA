"use client";
import { OmsuGroupType, ScheduleType } from "@/types";
import { useScheduleStore } from "@/zustandStore";
import Image from "next/image";
import React, { Suspense } from "react";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { ScheduleCard } from "../ScheduleCard";
import { useSchedule } from "../../hooks/useSchedule";
import useSwr from "swr";
import { fetcher } from "../../utils/index";
import { startOfDay } from "date-fns";
import { useDateStore } from "../../zustandStore/dateStore/index";

type ScheduleListProps = {
  scheduleList: ScheduleType[];
};

const ScheduleList = () => {
  const scheduleList = useScheduleStore((state) => state.schedule);
  const selectedDate = useDateStore((state) => state.selectedDate);
  const { schedule, isLoading } = useSchedule(1342, selectedDate);
  console.log(
    "DATE",
    startOfDay(new Date()).getTime() === new Date("02.21.2023").getTime()
  );

  console.log(schedule);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="h-4 w-4 animate-pulse rounded-full bg-primary"></div>
        <div className="h-4 w-4 animate-pulse rounded-full bg-primary"></div>
        <div className="h-4 w-4 animate-pulse rounded-full bg-primary"></div>
      </div>
    );
  }

  if (!schedule) {
    return <div>выходной иуу</div>;
  }

  // if (scheduleList.length < 1) return <div>No bitches</div>;
  return (
    <ul className=" mt-5 grid gap-10 ">
      {schedule.map((day) => (
        <ScheduleCard schedule={day} key={day.id} />
      ))}
    </ul>
  );
};

export default ScheduleList;
