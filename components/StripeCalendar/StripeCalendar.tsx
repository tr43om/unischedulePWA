"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { STUDY_DAYS } from "@/constants";
import { format, getDay, getWeek, setHours } from "date-fns";
import { ru } from "date-fns/locale";
import { useDateStore, useScheduleStore } from "@/zustandStore";
import "swiper/swiper.min.css";
import { CalendarControls } from "../CalendarControls";

const DateCard = ({ date }: { date: Date }) => {
  const { selectDate, selectedDate } = useDateStore((state) => {
    return { selectedDate: state.selectedDate, selectDate: state.selectDate };
  });

  const weekDay = format(date, "EEEEEE", { locale: ru });
  const day = date.getDate();

  const isBackgroundActive =
    selectedDate === date.getTime() ? "bg-primary" : "bg-transparent";

  const isTextActive =
    selectedDate === date.getTime() ? "text-gray-100" : "text-gray-400";

  return (
    <div
      className={`group mx-1 flex w-16 cursor-pointer justify-center rounded-lg	transition-all	 duration-300  hover:shadow-lg `}
      onClick={() => {
        selectDate(date.getTime());
      }}
    >
      <div className="flex items-center ">
        <div className="text-center">
          <p
            className={` flex aspect-square w-10 place-content-center place-items-center rounded-full text-sm transition-all duration-300 group-hover:text-gray-100 ${isTextActive} ${isBackgroundActive} group-hover:bg-primary`}
          >
            {day}
          </p>
          <p
            className={`mt-2 text-sm text-gray-400	transition-all duration-300 `}
          >
            {weekDay}
          </p>
        </div>
      </div>
    </div>
  );
};

const StripeCalendar = () => {
  const selectDate = useDateStore((state) => state.selectDate);
  const currentWeek = useDateStore((state) => state.currentWeek);
  console.log(currentWeek);

  useEffect(() => {
    selectDate(STUDY_DAYS[currentWeek - 1][getDay(new Date()) - 1].getTime());
  }, []);

  return (
    <section className="mb-5 print:hidden">
      <Swiper
        slidesPerView={1}
        initialSlide={currentWeek - 1}
        onSlideChange={({ activeIndex, clickedIndex, realIndex }) => {
          selectDate(STUDY_DAYS[activeIndex][0].getTime());
        }}
      >
        {STUDY_DAYS.map((week, index) => (
          <SwiperSlide key={`slide ${index}`}>
            {/* <div>{currentWeek} неделя</div> */}
            <div className="mx-auto flex  justify-between rounded-lg py-4 ">
              {week.map((date) => (
                <DateCard date={date} key={date.getTime()} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default StripeCalendar;
