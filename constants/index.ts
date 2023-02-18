import {
  getYear,
  addWeeks,
  eachWeekOfInterval,
  eachDayOfInterval,
  addDays,
} from "date-fns";

export const BASE_URL = "https://eservice.omsu.ru/schedule/backend";

const secondSemesterStarts = new Date(getYear(new Date()), 1, 8);
const secondSemesterEnds = addWeeks(secondSemesterStarts, 17);

const firstSemesterStarts = new Date(getYear(new Date()), 8, 1);
const firstSemesterEnds = addWeeks(firstSemesterStarts, 17);

export const SEMESTER_START_DATE =
  new Date().getMonth() >= 9 && new Date().getMonth() <= 12
    ? firstSemesterStarts
    : secondSemesterStarts;

export const SEMESTER_END_DATE =
  new Date().getMonth() >= 9 && new Date().getMonth() <= 12
    ? firstSemesterEnds
    : secondSemesterEnds;

export const STUDY_WEEKS = eachWeekOfInterval(
  {
    start: SEMESTER_START_DATE,
    end: SEMESTER_END_DATE,
  },
  { weekStartsOn: 1 }
);

export const STUDY_DAYS = STUDY_WEEKS.reduce((acc: Array<Date[]>, monday) => {
  acc.push(
    eachDayOfInterval({
      start: monday,
      end: addDays(monday, 5),
    })
  );

  return acc;
}, []);
