"use client";
import React from "react";
import { OmsuGroupType, ScheduleType } from "@/types";
import { useDateStore, useUserStore } from "@/zustandStore";
import { ScheduleCard, NoSchedule, LoadingIndicator } from "@/components";
import { useSchedule } from "@/hooks";
import * as _ from "lodash";

type ScheduleListProps = {
  scheduleList: ScheduleType[];
};

const ScheduleList = () => {
  const groupID = useUserStore((state) => state.groupId);
  const groupName = useUserStore((state) => state.name);
  const selectedDate = useDateStore((state) => state.selectedDate);
  const { schedule, isLoading, error } = useSchedule(
    groupID || 0,
    selectedDate
  );

  if (isLoading) {
    return (
      <div className="mt-16">
        <LoadingIndicator />
      </div>
    );
  }

  if (schedule.length < 1) {
    return <NoSchedule />;
  }

  return (
    <div>
      <p className="text-xs text-gray-400">
        Результаты для: <span className="text-primary-focus">{groupName}</span>
      </p>
      <ul className=" mt-5 grid gap-10 ">
        {schedule.map((day) => (
          <ScheduleCard schedule={day} key={day.id} />
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
