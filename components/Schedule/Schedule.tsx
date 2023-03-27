"use client";
import { TransformedScheduleDto } from "@/types";
import { useAppearanceStore, useDateStore } from "@/zustandStore";
import React from "react";
import { Calendar } from "../Calendar";
import { CalendarControls } from "../CalendarControls";
import { CurrentDate } from "../CurrentDate";
import { ScheduleGrid } from "../ScheduleGrid";
import { ScheduleList } from "../ScheduleList";
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
          <div className="flex  items-center justify-between lg:mb-10">
            <ResultsFor resultsFor={schedule.scheduleFor} />

            <ViewToggle />
          </div>
          <LessonTypesPallette />

          <div className="relative flex items-start justify-between ">
            <ScheduleList schedule={schedule} />
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
