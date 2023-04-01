import {
  OmsuGroupType,
  OmsuProfessorType,
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
import {
  CHINESE_PROFESSORS,
  FRENCH_PROFESSORS,
  GERMAN_PROFESSORS,
  OMSU_TIMETABLE,
  SPANISH_PROFESSORS,
} from "@/constants";

import * as _ from "lodash";

export const twClassNames = (...classes: Array<string | boolean>) => {
  return classes.filter(Boolean).join(" ");
};

export const getCurrentWeek = (date: Date | number) => {
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

const lessonsStartAt = (time: number) => {
  switch (time) {
    case 1:
      return OMSU_TIMETABLE[0].start;
    case 2:
      return OMSU_TIMETABLE[1].start;
    case 3:
      return OMSU_TIMETABLE[2].start;
    case 4:
      return OMSU_TIMETABLE[3].start;
    case 5:
      return OMSU_TIMETABLE[4].start;
    case 6:
      return OMSU_TIMETABLE[5].start;
    case 7:
      return OMSU_TIMETABLE[6].start;
    case 8:
      return OMSU_TIMETABLE[7].start;
    default:
      return "";
  }
};

const lessonsEndAt = (time: number) => {
  switch (time) {
    case 1:
      return OMSU_TIMETABLE[0].end;
    case 2:
      return OMSU_TIMETABLE[1].end;
    case 3:
      return OMSU_TIMETABLE[2].end;
    case 4:
      return OMSU_TIMETABLE[3].end;
    case 5:
      return OMSU_TIMETABLE[4].end;
    case 6:
      return OMSU_TIMETABLE[5].end;
    case 7:
      return OMSU_TIMETABLE[6].end;
    case 8:
      return OMSU_TIMETABLE[7].end;
    default:
      return "";
  }
};

const getCourse = (group: string) => {
  const year = Number(group.split("-")[1][0]);
  const course = Number((22 - year).toString()[1]) + 1;
  return course;
};

export const transformProfessorsCollection = (data: OmsuProfessorType[]) => {
  const professors = _.sortBy(data, "name");

  return professors;
};

export const transformGroupsCollection = (data: OmsuGroupType[]) => {
  const transformedData = _.map(data, (group) => {
    if (group.name !== "Резерв") {
      const course = getCourse(group.name);
      return { ...group, course };
    }

    return group;
  });

  const groups = transformedData
    .sort((a, b) => {
      if (Number(a.name.split("-")[3]) && Number(b.name.split("-")[3])) {
        return Number(b.name.split("-")[3]) - Number(a.name.split("-")[3]);
      }
      return 1;
    })
    .sort((a, b) => a.course - b.course);

  return groups;
};

export const transformSchedule = (
  data: OmsuScheduleResponse[],
  type: "group" | "professor"
) => {
  const scheduleFor =
    type === "group" ? data[0].lessons[0].group : data[0].lessons[0].teacher;

  const schedule = _.map(data, ({ lessons, day }) => {
    const [date, month, year] = day.split(".");
    const timestamp = new Date(`${year}/${month}/${date}`).getTime();

    const groupedSchedule = _.groupBy(lessons, "time");

    const formattedLessons = _.map(groupedSchedule, (course) => {
      const { lesson, lesson_id, type_work: type, id, time } = course[0];

      const formatLessonName = (lesson: string) => {
        const formatted = lesson
          .split(" ")
          .splice(0, lesson.split(" ").length - 1)
          .join(" ");

        return formatted.replace(/ *\([^)]*\) */g, "");
      };
      const formattedLessonName = formatLessonName(lesson);

      const getProfessorSecondLanguage = (professor: string) => {
        if (!lesson.toLowerCase().includes("второго иностранного")) return;

        if (GERMAN_PROFESSORS.some((grProfessor) => grProfessor === professor))
          return "немецкий";
        if (SPANISH_PROFESSORS.some((grProfessor) => grProfessor === professor))
          return "испанский";
        if (FRENCH_PROFESSORS.some((grProfessor) => grProfessor === professor))
          return "французский";
        if (CHINESE_PROFESSORS.some((grProfessor) => grProfessor === professor))
          return "китайский";
      };

      const getShortName = (name: string) => {
        const dividedName = name.split(" ");
        if (dividedName.length <= 1) return name;
        const firstname = name.split(" ")[1][0];
        const surname = name.split(" ")[0];
        const patronym = dividedName.length >= 3 ? name.split(" ")[2][0] : "";

        return `${surname} ${firstname}.${patronym}.`;
      };

      const professors = _.map(course, ({ teacher, teacher_id }) => ({
        name: teacher,
        id: teacher_id,
        shortname: getShortName(teacher),
        secondLanguage: getProfessorSecondLanguage(teacher),
      }));

      const auditories = _.map(course, ({ auditCorps, auditory_id }) => ({
        name: auditCorps,
        id: auditory_id,
      }));

      const groups = _.map(course, ({ group, group_id }) => ({
        name: group,
        course: getCourse(group),
        id: group_id,
      }));

      return {
        lesson: formattedLessonName,
        groups,
        professors,
        auditories,
        id,
        type,
        lesson_id,
        startsAt: lessonsStartAt(time),
        endsAt: lessonsEndAt(time),
      };
    });

    return { timestamp, lessons: formattedLessons };
  });

  return { data: schedule, scheduleFor, type };
};
