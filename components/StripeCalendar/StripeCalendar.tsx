"use client";
import "swiper/swiper.min.css";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getDay, isSunday } from "date-fns";
import { useDateStore } from "@/zustandStore";
import { CalendarControls, CurrentDate, CalendarDate } from "@/components";
import { Swiper as SwiperType } from "swiper/types";
import { useCurrentDates } from "@/hooks";

const StripeCalendar = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>();
  const selectDate = useDateStore((state) => state.selectDate);
  const currentWeek = useDateStore((state) => state.currentWeek);
  const { studyDays } = useCurrentDates();

  const goToPrevWeek = () => {
    swiperInstance?.slidePrev();
  };

  const goToNextWeek = () => {
    swiperInstance?.slideNext();
  };

  useEffect(() => {
    if (!isSunday(new Date())) {
      selectDate(
        studyDays[currentWeek - 1][
          isSunday(new Date()) ? getDay(new Date()) : getDay(new Date()) - 1
        ].getTime()
      );
    }
  }, []);

  return (
    <section className=" mb-5 max-w-md print:hidden lg:hidden">
      <div className="flex items-center justify-between">
        <CurrentDate />
        {swiperInstance && (
          <CalendarControls prev={goToPrevWeek} next={goToNextWeek} />
        )}
      </div>
      <Swiper
        slidesPerView={1}
        initialSlide={currentWeek - 1}
        onSlideChange={({ activeIndex }) => {
          selectDate(studyDays[activeIndex][0].getTime());
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        preventClicks={true}
        preventClicksPropagation
        className="z-10 touch-pan-x"
      >
        <div onClick={(e) => e.stopPropagation()}>
          {studyDays.map((week, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <div className="mx-auto flex  justify-between rounded-lg py-4 ">
                {week.map((date) => (
                  <CalendarDate date={date} key={date.getTime()} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default StripeCalendar;
