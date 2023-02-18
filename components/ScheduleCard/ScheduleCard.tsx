import { ScheduleType } from "@/types";
import { ClockIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

type ScheduleCardProps = {
  schedule: ScheduleType;
};

const ScheduleCard = ({ schedule }: ScheduleCardProps) => {
  const lessonStarts = schedule.lessonStarts
    .toDate()
    .toLocaleTimeString("ru-RU", {
      timeZone: "Asia/Omsk",
      hour: "2-digit",
      minute: "2-digit",
    });

  const lessonEnds = schedule.lessonEnds.toDate().toLocaleTimeString("ru-RU", {
    timeZone: "Asia/Omsk",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <li
      className="rounded-lg border border-neutral border-opacity-50 p-6"
      key={schedule.id}
    >
      <div className="flex  h-6 items-center      bg-base-100 text-primary-content">
        <ClockIcon width={15} height={15} className="text-gray-400" />
        <p className="text-sm  text-gray-400">{lessonStarts}</p>
      </div>
      <div className="card block  max-w-md  hover:cursor-pointer ">
        <div className="mb-3 flex justify-between">
          <h3 className=" font-bold transition duration-300 ease-in-out sm:text-lg ">
            {schedule.subject}
          </h3>
        </div>

        <div>
          {schedule.professorsAndAuditories.map(({ auditory, professor }) => (
            <div key={professor.documentID} className="mb-5 grid gap-3">
              <div className="flex items-center gap-2">
                <div className="placeholder avatar">
                  {/* <div className="mask mask-squircle w-8">
                      <Image
                        alt={professor.shortname}
                        src={professor.PFP_THUMBNAIL_URL}
                        width={40}
                        height={40}
                      />
                    </div> */}
                  <div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
                    <span className="text-xs">
                      {professor.surname.split("")[0]}
                    </span>
                  </div>
                </div>
                <p className="text-sm">{professor.shortname}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPinIcon width={15} height={15} className="text-gray-400" />
                <p className="text-sm">2 - {auditory}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default ScheduleCard;
