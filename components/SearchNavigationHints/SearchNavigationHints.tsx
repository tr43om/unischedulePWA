import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

const SearchNavigationHints = () => {
  return (
    <div className=" hidden items-center justify-end gap-4 border-t-[1px]  border-base-100 border-opacity-50 px-6  py-3 sm:flex">
      <div className="flex items-center gap-1">
        <div className="kbd kbd-sm ">
          <ArrowUpIcon className="h-2.5  text-gray-400" />
        </div>
        <div className="kbd kbd-sm">
          <ArrowDownIcon className="h-2.5  text-gray-400" />
        </div>
        <p className="text-[10px] text-gray-400">Навигация</p>
      </div>

      <div className="flex items-center gap-1">
        <div className="kbd kbd-sm ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3  fill-gray-400"
            viewBox="0 0 24 24"
          >
            <path d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z" />
          </svg>
        </div>
        <p className="text-[10px] text-gray-400">Выбрать</p>
      </div>

      <div className="flex items-center gap-1">
        <div className="kbd  text-xs text-[10px] text-gray-400">Esc</div>
        <p className="text-[10px] text-gray-400">Закрыть</p>
      </div>
    </div>
  );
};

export default SearchNavigationHints;
