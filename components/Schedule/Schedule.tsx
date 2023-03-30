"use client";
import { useSearchCollection } from "@/hooks/useSearchCollection";
import { TransformedScheduleDto } from "@/types";
import { useAppearanceStore, useDateStore } from "@/zustandStore";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import { Calendar } from "../Calendar";
import { CalendarControls } from "../CalendarControls";
import { CurrentDate } from "../CurrentDate";
import { ScheduleGrid } from "../ScheduleGrid";
import { ScheduleList } from "../ScheduleList";
import { StripeCalendar } from "../StripeCalendar";
import { Badge, LessonTypesPallette, ResultsFor, ViewToggle } from "../ui";
type ScheduleProps = {
  schedule: TransformedScheduleDto;
};
const Schedule = ({ schedule }: ScheduleProps) => {
  const { view } = useAppearanceStore((state) => state);
  const { nextWeek, prevWeek } = useDateStore((state) => state);
  const router = useRouter();

  return (
    <main className="mt-24 mb-8">
      {view === "day" && (
        <div className="relative">
          <div className="  fixed top-0 right-0 left-0  z-50 mx-auto w-full  bg-white/30 px-4 py-1 backdrop-blur-md dark:bg-base-100">
            <div className=" mt-6  flex  items-center   justify-between  lg:hidden">
              <button className="" onClick={() => router.back()}>
                <ArrowLeftIcon width={20} height={20} />
              </button>
              <ResultsFor resultsFor={schedule.scheduleFor} />
            </div>
          </div>

          <StripeCalendar />

          <div className="mb-5  hidden items-center justify-between lg:mb-10 lg:flex">
            <ResultsFor resultsFor={schedule.scheduleFor} />
            <ViewToggle />
          </div>

          <div className="relative flex items-start justify-between gap-52 lg:m-5 ">
            <div>
              {/* <LessonTypesPallette /> */}
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

            {/* <LessonTypesPallette /> */}
          </div>
          <ScheduleGrid scheduleData={schedule} />
        </div>
      )}
    </main>
  );
};

export default Schedule;
