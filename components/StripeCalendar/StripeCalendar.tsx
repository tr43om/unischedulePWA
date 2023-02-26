"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { STUDY_DAYS } from "@/constants";
import { format, getDay, getWeek, isSunday, setHours } from "date-fns";
import { ru } from "date-fns/locale";
import { useDateStore, useScheduleStore } from "@/zustandStore";
import "swiper/swiper.min.css";
import { CalendarControls, CurrentDate, CalendarDate } from "@/components";
import { Swiper as SwiperType } from "swiper/types";

const StripeCalendar = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>();
  const selectDate = useDateStore((state) => state.selectDate);
  const currentWeek = useDateStore((state) => state.currentWeek);

  useEffect(() => {
    if (!isSunday(new Date())) {
      selectDate(STUDY_DAYS[currentWeek - 1][getDay(new Date()) - 1].getTime());
    }
  }, []);

  return (
    <section className=" mb-5  print:hidden">
      <div className="flex items-center justify-between">
        <CurrentDate />
        {swiperInstance && <CalendarControls swiper={swiperInstance} />}
      </div>
      <Swiper
        slidesPerView={1}
        initialSlide={currentWeek - 1}
        onSlideChange={({ activeIndex, clickedIndex, realIndex }) => {
          selectDate(STUDY_DAYS[activeIndex][0].getTime());
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onDrag={() => console.log("drag")}
        preventClicks={true}
        preventClicksPropagation
        onClick={(s, e) => {
          console.log(e.target);
        }}
        className="touch-pan-x"
      >
        <div onClick={(e) => e.stopPropagation()}>
          {STUDY_DAYS.map((week, index) => (
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
