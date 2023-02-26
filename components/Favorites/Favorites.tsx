"use client";

import { useSearchStore } from "zustandStore";
import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";

type FavoritesProps = {
  active: number;
};

const Favorites = ({ active }: FavoritesProps) => {
  const { favorites, chooseQuery, deleteFromFavorites } = useSearchStore(
    ({ chooseQuery, favorites, deleteFromFavorites }) => {
      return { favorites, deleteFromFavorites, chooseQuery };
    }
  );

  return (
    <div>
      <h3 className="mb-2  ">Избранные</h3>
      <div>
        {favorites.map((favorite, i) => (
          <div
            onClick={() => chooseQuery(favorite)}
            key={`${favorite.id}-favorite`}
            className="group flex cursor-pointer items-center  justify-between   border-b-[1px]   border-b-base-100  border-opacity-50 py-1.5 transition delay-100 ease-in-out last:border-b-[0] "
          >
            <p
              className={`${
                i === active ? "text-primary" : "text-gray-400"
              } text-sm  group-hover:text-primary`}
            >
              {favorite.name}
            </p>

            <div
              className="tooltip tooltip-left  "
              data-tip="Убрать из избранных"
              onClick={(e) => {
                e.stopPropagation();
                deleteFromFavorites(favorite.id);
              }}
            >
              <StarIcon className="h-4 fill-primary text-primary hover:fill-transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
