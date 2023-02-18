import {
  isAfter,
  getYear,
  differenceInWeeks,
  getWeek,
  getMonth,
} from "date-fns";

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
