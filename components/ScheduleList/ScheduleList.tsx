"use client";
import { ScheduleType } from "@/types";
import { useScheduleStore } from "@/zustandStore";
import Image from "next/image";
import React, { Suspense } from "react";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { ScheduleCard } from "../ScheduleCard";

type ScheduleListProps = {
  scheduleList: ScheduleType[];
};

const ScheduleList = () => {
  const scheduleList = useScheduleStore((state) => state.schedule);

  if (scheduleList.length < 1) return <div>No bitches</div>;
  return (
    <Suspense fallback={<div>achko</div>}>
      <ul className=" grid gap-10">
        {scheduleList.map((schedule, i) => (
          <ScheduleCard schedule={schedule} key={schedule.id} />
        ))}
      </ul>
    </Suspense>
  );
};

export default ScheduleList;
