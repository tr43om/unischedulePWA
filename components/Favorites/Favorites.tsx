"use client";

import { useSearchStore } from "zustandStore";
import React from "react";
import { StarIcon, XMarkIcon } from "@heroicons/react/24/outline";

type FavoritesProps = {
  active: number;
};

const Favorites = ({ active }: FavoritesProps) => {
  const favoritesItems = useSearchStore((state) => state.favorites);
  const recentsLength = useSearchStore((state) => state.recents).length;

  const deleteFromFavorites = useSearchStore(
    (state) => state.deleteFromFavorites
  );

  return (
    <div>
      <h3 className="mb-2  ">Избранные</h3>
      <div>
        {favoritesItems.map((favorite, i) => (
          <div
            key={`${favorite.id}-favorite`}
            className="group flex cursor-pointer items-center  justify-between   border-b-[1px]   border-b-base-100  border-opacity-50 py-1.5 transition delay-100 ease-in-out last:border-b-[0] "
          >
            <p
              className={`${
                recentsLength + i === active ? "text-primary" : "text-gray-400"
              } text-sm  group-hover:text-primary`}
            >
              {favorite.name}
            </p>
            <div className="flex gap-2">
              <StarIcon className="h-4 fill-primary text-primary" />
              <div
                className="tooltip tooltip-left  before:right-11 after:right-11"
                data-tip="Убрать из избранных"
              >
                <XMarkIcon
                  className="h-4 text-gray-400 hover:text-gray-300"
                  onClick={() => deleteFromFavorites(favorite.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
