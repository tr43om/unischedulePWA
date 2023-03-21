import {
  ClockIcon,
  MapPinIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { OmsuScheduleDto } from "../../types/index";
import Link from "next/link";

type ScheduleCardProps = {
  type: "group" | "professor";
  schedule: OmsuScheduleDto;
};

const ScheduleCard = ({ schedule, type }: ScheduleCardProps) => {
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
      <div className="card block  max-w-md   ">
        <div className="mb-3 flex justify-between">
          <h3 className=" font-bold transition duration-300 ease-in-out sm:text-lg ">
            {schedule.lesson}
          </h3>
          <p className="badge badge-sm">{schedule.type}</p>
        </div>

        {type === "group" && (
          <div className="grid ">
            {schedule.professors.map(({ id, name }, i) => (
              <div
                key={`professor-${id}-${schedule.id}`}
                className="grid gap-2 border-b-[1px] border-primary border-opacity-30 py-3 last:border-none"
              >
                <div className="flex items-center ">
                  <div className="placeholder avatar">
                    <div className="w-8 rounded-full bg-neutral-focus text-neutral-content ">
                      <span className="text-xs">{name.split("")[0]}</span>
                    </div>
                  </div>

                  <Link
                    href={`../professors/${id}`}
                    className=" btn-link btn-xs btn text-sm normal-case"
                  >
                    {name}
                  </Link>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPinIcon
                    width={15}
                    height={15}
                    className="text-gray-400"
                  />
                  <p className="text-sm">{schedule.auditories[i].name}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {type === "professor" && (
          <div>
            {schedule.groups.map(({ id, name }) => (
              <Link
                href={`../groups/${id}`}
                key={`group-${id}-${schedule.id}`}
                className="btn-link btn-xs btn flex items-center justify-start gap-1.5 justify-self-start"
              >
                <UserIcon width={15} height={15} className="text-primary" />
                <p className="text-sm">{name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export default React.memo(ScheduleCard);
