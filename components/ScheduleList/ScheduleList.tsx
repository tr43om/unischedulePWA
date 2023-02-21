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

type ScheduleListProps = {
  scheduleList: ScheduleType[];
};

const ScheduleList = () => {
  const scheduleList = useScheduleStore((state) => state.schedule);
  const { schedule } = useSchedule(1342);

  // if (scheduleList.length < 1) return <div>No bitches</div>;
  return (
    <ul className=" mt-5 grid gap-10 ">
      {scheduleList.map((schedule, i) => (
        <ScheduleCard schedule={schedule} key={schedule.id} />
      ))}
    </ul>
  );
};

export default ScheduleList;
