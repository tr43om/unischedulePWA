"use client";
import { useSearchCollection } from "@/hooks/useSearchCollection";
import { TransformedScheduleDto } from "@/types";
import { useAppearanceStore, useDateStore } from "@/zustandStore";
import React, { Suspense } from "react";
import { Calendar } from "../Calendar";
import { CalendarControls } from "../CalendarControls";
import { CurrentDate } from "../CurrentDate";
import { ScheduleGrid } from "../ScheduleGrid";
import { ScheduleList } from "../ScheduleList";
import { StripeCalendar } from "../StripeCalendar";
import { LessonTypesPallette, ResultsFor, ViewToggle } from "../ui";
type ScheduleProps = {
  schedule: TransformedScheduleDto;
};
const Schedule = ({ schedule }: ScheduleProps) => {
  const { view } = useAppearanceStore((state) => state);
  const { nextWeek, prevWeek } = useDateStore((state) => state);

  return (
    <main className="mt-10 mb-8">
      {view === "day" && (
        <div>
          <StripeCalendar />

          <div className="mb-5  flex items-center justify-between lg:mb-10">
            <ResultsFor resultsFor={schedule.scheduleFor} />
            <ViewToggle />
          </div>

          <div className="relative m-5 flex items-start justify-between gap-52 ">
            <div>
              <LessonTypesPallette />
              <ScheduleList schedule={schedule} />
            </div>
            <Calendar />
          </div>
        </div>
      )}
      {view === "week" && (
        <div>
          <div className="flex items-center ">
            <CurrentDate />
            <div className="ml-14">
              <CalendarControls next={nextWeek} prev={prevWeek} />
            </div>
            <div className="ml-auto">
              <ViewToggle />
            </div>
          </div>
          <div className="mt-10 mb-3 flex items-center justify-between">
            <ResultsFor resultsFor={schedule.scheduleFor} />

            <LessonTypesPallette />
          </div>
          <ScheduleGrid scheduleData={schedule} />
        </div>
      )}
    </main>
  );
};

export default Schedule;
