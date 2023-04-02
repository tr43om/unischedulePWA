import React from "react";
import { StarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { RecentType } from "@/types";

type RecentsProps = {
  active: number;
  data: RecentType[];
  deleteRecent: (id: number) => void;
  chooseRecent: (query: RecentType) => void;
  addToFavorites: (query: RecentType) => void;
};

const Recents = ({
  active,
  chooseRecent,
  data,
  deleteRecent,
  addToFavorites,
}: RecentsProps) => {
  return (
    <div>
      <h3 className="mb-2 ">Недавние</h3>
      <div>
        {data.map((recent, i) => (
          <Link
            href={`${
              recent.type === "group" || recent.course ? "groups" : "professors"
            }/${recent.id}`}
            key={`${recent.id}-recent`}
            className="group flex cursor-pointer items-center  justify-between   border-b-[1px]   border-b-base-100  border-opacity-50 py-1.5 transition delay-100 ease-in-out last:border-b-[0] "
            onClick={() => chooseRecent(recent)}
          >
            <p
              className={`${
                i === active ? " text-primary" : "text-gray-400"
              } text-sm   group-hover:text-primary`}
            >
              {recent.name} {recent.course && `(${recent.course} курс)`}
            </p>
            <div
              className="flex gap-2"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <div
                className="tooltip tooltip-left"
                data-tip="Добавить в избранное"
              >
                <StarIcon
                  className="h-6 text-primary hover:fill-primary lg:h-5"
                  onClick={() => addToFavorites(recent)}
                />
              </div>
              <div
                className="tooltip tooltip-left  before:right-11 after:right-11"
                data-tip="Убрать из недавних"
              >
                <XMarkIcon
                  className="h-6 text-gray-400 hover:text-gray-300 lg:h-5"
                  onClick={() => deleteRecent(recent.id)}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recents;
