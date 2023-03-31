
import { StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {FavoriteType} from '@/types'

type FavoritesProps = {
  active: number;
  data: FavoriteType[];
  deleteFavorite: (id: number) => void;
  chooseFavorite: (query: FavoriteType) => void

};

const Favorites = ({ active, chooseFavorite, data, deleteFavorite}: FavoritesProps) => {




  return (
    <div>
      <h3 className="mb-2">Избранные</h3>
      <div>
        {data.map((favorite, i) => (
          <Link
            href={`${favorite.course ? "groups" : "professors"}/${favorite.id}`}
            onClick={() => chooseFavorite(favorite)}
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
                e.preventDefault();
                e.stopPropagation();
                deleteFavorite(favorite.id);
              }}
            >
              <StarIcon className="h-4 fill-primary text-primary hover:fill-transparent" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
