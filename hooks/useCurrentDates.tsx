import { useMemo, useEffect, useState } from "react";
import {
  getYear,
  addWeeks,
  eachWeekOfInterval,
  eachDayOfInterval,
  addDays,
  getMonth,
  differenceInWeeks,
} from "date-fns";

export const useCurrentDates = () => {
  const secondSemesterStarts = new Date(getYear(new Date()), 1, 8);
  const secondSemesterEnds = addWeeks(secondSemesterStarts, 17);

  const firstSemesterStarts = new Date(getYear(new Date()), 8, 1);
  const firstSemesterEnds = addWeeks(firstSemesterStarts, 17);

  console.log("CURRENT DAYS HOOK");

  const SEMESTER_START_DATE =
    new Date().getMonth() >= 9 && new Date().getMonth() <= 12
      ? firstSemesterStarts
      : secondSemesterStarts;

  const SEMESTER_END_DATE =
    new Date().getMonth() >= 9 && new Date().getMonth() <= 12
      ? firstSemesterEnds
      : secondSemesterEnds;

  const STUDY_DAYS = useMemo(
    () =>
      eachWeekOfInterval(
        {
          start: SEMESTER_START_DATE,
          end: SEMESTER_END_DATE,
        },
        { weekStartsOn: 1 }
      ).reduce((acc: Array<Date[]>, monday) => {
        acc.push(
          eachDayOfInterval({
            start: monday,
            end: addDays(monday, 5),
          })
        );

        return acc;
      }, []),
    [SEMESTER_END_DATE, SEMESTER_START_DATE]
  );

  return { studyDays: STUDY_DAYS };
};
