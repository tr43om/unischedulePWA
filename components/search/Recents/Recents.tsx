"use client";

import { useSearchStore } from "zustandStore";
import React from "react";
import { StarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type RecentsProps = {
  active: number;
};

const Recents = ({ active }: RecentsProps) => {
  const { recents, chooseQuery, deleteFromRecents, addToFavorites } =
    useSearchStore(
      ({
        chooseQuery,
        favorites,
        recents,
        deleteFromRecents,
        addToFavorites,
      }) => {
        return {
          favorites,
          recents,
          deleteFromRecents,
          chooseQuery,
          addToFavorites,
        };
      }
    );

  return (
    <div>
      <h3 className="mb-2 ">Недавние</h3>
      <div>
        {recents.map((recent, i) => (
          <Link
            href={`${recent.type}s/${recent.id}`}
            key={`${recent.id}-recent`}
            className="group flex cursor-pointer items-center  justify-between   border-b-[1px]   border-b-base-100  border-opacity-50 py-1.5 transition delay-100 ease-in-out last:border-b-[0] "
            onClick={() => chooseQuery(recent)}
          >
            <p
              className={`${
                i === active ? " text-primary" : "text-gray-400"
              } text-sm   group-hover:text-primary`}
            >
              {recent.name}
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
                  className="h-4 text-primary hover:fill-primary"
                  onClick={() => addToFavorites(recent)}
                />
              </div>
              <div
                className="tooltip tooltip-left  before:right-11 after:right-11"
                data-tip="Убрать из недавних"
              >
                <XMarkIcon
                  className="h-4 text-gray-400 hover:text-gray-300"
                  onClick={() => deleteFromRecents(recent.id)}
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
