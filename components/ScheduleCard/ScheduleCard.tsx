"use client";

import { ScheduleType } from "@/types";
import {
  ClockIcon,
  MapPinIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { OmsuScheduleDto } from "../../types/index";
import { useUserStore } from "@/zustandStore";

type ScheduleCardProps = {
  schedule: OmsuScheduleDto;
};

const ScheduleCard = ({ schedule }: ScheduleCardProps) => {
  const groupID = useUserStore((state) => state.groupId);
  const professorId = useUserStore((state) => state.professorId);
  const chooseGroup = useUserStore((state) => state.storeGroup);
  const chooseProfessor = useUserStore((state) => state.storeProfessor);
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

        {groupID && (
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

                  <p
                    className=" btn-link btn-xs btn text-sm normal-case"
                    onClick={() => chooseProfessor(id, name)}
                  >
                    {name}
                  </p>
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

        {professorId && (
          <div>
            {schedule.groups.map(({ id, name }) => (
              <div
                key={`group-${id}-${schedule.id}`}
                className="btn-link btn-xs btn flex items-center justify-start gap-1.5 justify-self-start"
                onClick={() => chooseGroup(id, name)}
              >
                <UserIcon width={15} height={15} className="text-primary" />
                <p className="text-sm">{name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export default React.memo(ScheduleCard);
