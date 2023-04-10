"use client";
import { TransformedScheduleDto } from "@/types";
import {
  useAppearanceStore,
  useDateStore,
  useSearchStore,
  useUserStore,
} from "@/zustandStore";
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
import notFoundIllustration from "@/assets/404.svg";
import Image from "next/image";

type ScheduleProps = {
  schedule: TransformedScheduleDto | undefined;
};
const Schedule = ({ schedule }: ScheduleProps) => {
  const { view } = useAppearanceStore((state) => state);
  const { nextWeek, prevWeek } = useDateStore((state) => state);
  const name = useUserStore((state) => state.name);

  const router = useRouter();
  if (schedule === undefined)
    return (
      <section className="mx-auto grid max-w-md justify-center">
        <Image src={notFoundIllustration} alt="not found" />
        <p className="text-center text-lg">
          К сожалению, расписания для &quot;{name}&quot; не существует
        </p>
      </section>
    );

  return (
    <main className="mt-24 mb-8 lg:mt-12">
      {view === "day" && (
        <div className="relative">
          <div className="  fixed top-0 right-0 left-0  z-50 mx-auto w-full  bg-white/30   backdrop-blur-md dark:bg-base-100/30">
            <div className="  flex  items-center   justify-between  py-4 px-4 lg:hidden">
              <button onClick={() => router.back()}>
                <ArrowLeftIcon width={20} height={20} />
              </button>
              <Badge
                size="badge-md"
                label={schedule.scheduleFor}
                variant="primary"
              />
            </div>
          </div>

          <StripeCalendar />

          <div className="mb-5  hidden items-center justify-between lg:mb-6 lg:flex">
            <Badge
              size="badge-lg"
              label={schedule.scheduleFor}
              variant="primary"
            />
            <ViewToggle />
          </div>

          <div className="relative flex items-start justify-center  lg:justify-between lg:gap-44 ">
            <ScheduleList schedule={schedule} />
            <div className="hidden  lg:block">
              <Calendar />
            </div>
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
            <Badge
              size="badge-lg"
              label={schedule.scheduleFor}
              variant="primary"
            />
          </div>
          <ScheduleGrid scheduleData={schedule} />
        </div>
      )}
    </main>
  );
};

export default Schedule;
