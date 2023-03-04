"use client";
import React, { Suspense, useEffect } from "react";
import { OmsuGroupType, ScheduleType } from "@/types";
import { useDateStore, useUserStore } from "@/zustandStore";
import {
  ScheduleCard,
  NoSchedule,
  LoadingIndicator,
  SkeletonScheduleCard,
  ResultsFor,
} from "@/components";
import { useSchedule } from "@/hooks";
import * as _ from "lodash";
import axios from "axios";

type ScheduleListProps = {};

const ScheduleList = () => {
  const groupID = useUserStore((state) => state.groupId);
  const professorId = useUserStore((state) => state.professorId);
  const resultsFor = useUserStore((state) => state.name);
  const selectedDate = useDateStore((state) => state.selectedDate);
  const { schedule, isLoading, error } = useSchedule(
    groupID,
    professorId,
    selectedDate
  );

  if (isLoading) {
    return (
      <div>
        <div className="mb-10 h-4 w-20 animate-pulse rounded-lg bg-gray-400"></div>
        <div className="mt-5 grid gap-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonScheduleCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (schedule.length < 1) {
    return <NoSchedule />;
  }

  return (
    <ul className=" mt-5 grid gap-10 ">
      {resultsFor && <ResultsFor resultsFor={resultsFor} />}
      {schedule.map((day) => (
        <ScheduleCard schedule={day} key={day.id} />
      ))}
    </ul>
  );
};

export default ScheduleList;
