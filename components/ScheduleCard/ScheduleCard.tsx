import {
  ClockIcon,
  MapPinIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { OmsuScheduleDto } from "../../types/index";
import Link from "next/link";
import { Avatar, Badge, SecondLangFlag } from "../ui";

type ScheduleCardProps = {
  type: "group" | "professor";
  schedule: OmsuScheduleDto;
};

const ScheduleCard = ({ schedule, type }: ScheduleCardProps) => {
  return (
    <li
      className="w-full rounded-lg border border-neutral border-opacity-50 p-6 dark:border-gray-600"
      key={schedule.id}
    >
      <div className="flex  h-6 items-center gap-2 bg-base-100 text-primary-content">
        <ClockIcon
          width={15}
          height={15}
          className="lg:h-4.5 lg:w-4.5 text-gray-600 dark:text-gray-300"
        />
        <p className="lg:text-md text-sm  text-gray-600 dark:text-gray-300">
          {schedule.startsAt} - {schedule.endsAt}
        </p>
      </div>
      <div className="card block  max-w-md   ">
        <div className="mb-3 flex items-start justify-between">
          <h3 className=" font-bold transition duration-300 ease-in-out sm:text-lg lg:text-xl">
            {schedule.lesson}
          </h3>
          <Badge label={schedule.type} variant="badge-md" />
        </div>

        {type === "group" && (
          <div className="grid ">
            {schedule.professors.map(({ id, name, secondLanguage }, i) => (
              <div
                key={`professor-${id}-${schedule.id}`}
                className="grid gap-2 border-b-[1px] border-primary border-opacity-30 py-3 last:border-none lg:flex lg:justify-between"
              >
                <div className="flex items-center ">
                  {secondLanguage ? (
                    <SecondLangFlag lang={secondLanguage} size="md" />
                  ) : (
                    <Avatar name={name} />
                  )}

                  <Link
                    href={`professors/${id}`}
                    className=" btn-link btn-xs btn text-sm normal-case"
                  >
                    {name}
                  </Link>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPinIcon
                    width={16}
                    height={16}
                    className="text-gray-600 dark:text-gray-300 lg:h-5 lg:w-5"
                  />
                  <p className="lg:text-md text-sm ">
                    {schedule.auditories[i].name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {type === "professor" && (
          <div className="flex items-start justify-between">
            <div>
              {schedule.groups.map(({ id, name }) => (
                <Link
                  href={`groups/${id}`}
                  key={`group-${id}-${schedule.id}`}
                  className="btn-link btn-xs btn flex items-center justify-start gap-1.5 justify-self-start p-0 text-primary"
                >
                  <UserIcon width={15} height={15} className="text-primary" />
                  <p className="lg:text-md text-sm">{name}</p>
                </Link>
              ))}
            </div>
            <div className=" flex items-center gap-1.5">
              <MapPinIcon
                width={20}
                height={20}
                className="text-gray-600 dark:text-gray-300"
              />
              <p className="lg:text-md text-sm ">
                {schedule.auditories[0].name}
              </p>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default React.memo(ScheduleCard);
