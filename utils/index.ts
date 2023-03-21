import {
  OmsuScheduleDto,
  OmsuScheduleResponse,
  TransformedScheduleDto,
} from "@/types";
import {
  isAfter,
  getYear,
  differenceInWeeks,
  getWeek,
  getMonth,
} from "date-fns";

import * as _ from "lodash";
export const getCurrentWeek = (date: Date) => {
  const isFirstTerm = getMonth(date) >= 8 && getMonth(date) <= 12;
  const isSecondTerm = getMonth(date) >= 1 && getMonth(date) <= 6;

  const currentWeek =
    differenceInWeeks(
      new Date(date).setFullYear(2000),
      isFirstTerm
        ? new Date(2000, 8, 6)
        : isSecondTerm
        ? new Date(2000, 0, 30)
        : 0
    ) || 1;

  return currentWeek;
};

export const fetcher = (url: string, init?: RequestInit) =>
  fetch(url).then((res) => res.json());

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

export const transformSchedule = (
  data: OmsuScheduleResponse[],
  type: "group" | "professor"
) => {
  const scheduleFor =
    type === "group" ? data[0].lessons[0].group : data[0].lessons[0].teacher;
  const schedule = _.map(data, ({ lessons, day }) => {
    const [date, month, year] = day.split(".");
    const timestamp = new Date(
      new Date(`${year}/${month}/${date}`).setHours(0, 0, 0, 0)
    ).getTime();

    // const groupedSchedule = _.groupBy(lessons, "time");

    const professors = _.map(lessons, (lesson) => ({
      name: lesson.teacher,
      id: lesson.teacher_id,
    }));

    const auditories = _.map(lessons, (lesson) => ({
      name: lesson.auditCorps,
      id: lesson.auditory_id,
    }));

    const groups = _.map(lessons, (lesson) => ({
      name: lesson.group,
      id: lesson.group_id,
    }));

    const formattedLessons = _.map(lessons, (lesson) => {
      const formattedLessonName = lesson.lesson
        .split(" ")
        .splice(0, lesson.lesson.split(" ").length - 1)
        .join(" ");
      return {
        lesson: formattedLessonName,
        groups,
        professors,
        auditories,
        id: lesson.id,
        week: lesson.week,
        type: lesson.type_work,
        lesson_id: lesson.lesson_id,
        startsAt: startsAt(lesson.time),
        endsAt: endsAt(lesson.time),
      };
    });

    return { timestamp, lessons: formattedLessons };
  });

  return { data: schedule, scheduleFor, type };
};
