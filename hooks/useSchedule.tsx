import { OmsuScheduleResponse, OmsuScheduleDto } from "@/types";
import useSwr from "swr";
import { fetcher } from "@/utils";
import { startOfDay } from "date-fns";
import { useMemo, useCallback, useEffect, useState } from "react";
import axios from "axios";
import * as _ from "lodash";

type OmsuScheduleServerRes = {
  day: string;
  lessons: OmsuScheduleResponse[];
};

export const useSchedule = (
  groupID: number | null,
  professorId: number | null,
  selectedDate: number
) => {
  const { data, isLoading, error, isValidating } = useSwr<
    OmsuScheduleServerRes[]
  >(`${groupID ? "groups/" + groupID : "professors/" + professorId}`, fetcher);

  if (!groupID && !professorId) return { schedule: [], isLoading, error };
  console.log(data);

  const scheduleOfSelectedDay = _.filter(data, (day) => {
    const [date, month, year] = day.day.split(".");
    return new Date(`${year}/${month}/${date}`).getTime() === selectedDate;
  });

  const scheduleGroupedByTime = _.map(scheduleOfSelectedDay, ({ lessons }) =>
    _.groupBy(lessons, "time")
  )[0];

  const startsAt = (time: number) => {
    switch (time) {
      case 1:
        return "8:45";
      case 2:
        return "10:30";
      case 3:
        return "12:45";
      case 4:
        return "14:30";
      case 5:
        return "16:15";
      case 6:
        return "18:00";
      case 7:
        return "19:45";
      case 8:
        return "21:30";
      default:
        return "";
    }
  };

  const endsAt = (time: number) => {
    switch (time) {
      case 1:
        return "10:20";
      case 2:
        return "12:05";
      case 3:
        return "14:20";
      case 4:
        return "16:05";
      case 5:
        return "17:50";
      case 6:
        return "19:35";
      case 7:
        return "21:20";
      case 8:
        return "23:05";
      default:
        return "";
    }
  };

  const schedule = _.map(scheduleGroupedByTime, (time) =>
    _.reduce(
      time,
      (acc, cur) => {
        acc.professors = acc.professors || [];
        acc.auditories = acc.auditories || [];
        acc.groups = acc.groups || [];
        acc.professors.push({ name: cur.teacher, id: cur.teacher_id });
        acc.auditories.push({ name: cur.auditCorps, id: cur.auditory_id });
        acc.groups.push({ name: cur.group, id: cur.group_id });

        const lesson = cur.lesson
          .split(" ")
          .splice(0, cur.lesson.split(" ").length - 1)
          .join(" ");

        acc = {
          id: cur.id,
          week: cur.week,
          type: cur.type_work,
          lesson,
          lesson_id: cur.lesson_id,
          startsAt: startsAt(cur.time),
          endsAt: endsAt(cur.time),
          professors: acc.professors,
          auditories: acc.auditories,
          groups: acc.groups,
        };
        return acc;
      },
      {} as OmsuScheduleDto
    )
  );

  console.log("SCHEDULE", schedule);

  return { schedule, isLoading, error };
};
