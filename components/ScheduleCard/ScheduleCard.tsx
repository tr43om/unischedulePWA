import { ScheduleType } from "@/types";
import { ClockIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { OmsuScheduleDto } from "../../types/index";

type ScheduleCardProps = {
  schedule: OmsuScheduleDto;
};

const ScheduleCard = ({ schedule }: ScheduleCardProps) => {
  // const lessonStarts = schedule.lessonStarts
  //   .toDate()
  //   .toLocaleTimeString("ru-RU", {
  //     timeZone: "Asia/Omsk",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });

  // const lessonEnds = schedule.lessonEnds.toDate().toLocaleTimeString("ru-RU", {
  //   timeZone: "Asia/Omsk",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });
  return (
    <li
      className="rounded-lg border border-neutral border-opacity-50 p-6"
      key={schedule.id}
    >
      <div className="flex  h-6 items-center gap-2 bg-base-100 text-primary-content">
        <ClockIcon width={15} height={15} className="text-gray-400" />
        <p className="text-sm  text-gray-400">
          {schedule.startsAt} - {schedule.endsAt}
        </p>
      </div>
      <div className="card block  max-w-md  hover:cursor-pointer ">
        <div className="mb-3 flex justify-between">
          <h3 className=" font-bold transition duration-300 ease-in-out sm:text-lg ">
            {schedule.lesson}
          </h3>
        </div>

        <div className="grid ">
          {schedule.professors.map(({ id, name }, i) => (
            <div
              key={id}
              className="grid gap-2 border-b-[1px] border-primary border-opacity-30 py-3 last:border-none"
            >
              <div className="flex items-center gap-2">
                <div className="placeholder avatar">
                  <div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
                    <span className="text-xs">{name.split("")[0]}</span>
                  </div>
                </div>
                <p className="text-sm">{name}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPinIcon width={15} height={15} className="text-gray-400" />
                <p className="text-sm">{schedule.auditories[i].name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default ScheduleCard;
