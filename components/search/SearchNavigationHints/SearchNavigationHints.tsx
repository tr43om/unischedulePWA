"use client";

import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import useTranslate from "@/hooks/useTranslate";

const SearchNavigationHints = () => {
  const t = useTranslate();
  const pathname = usePathname();
  return (
    <div className=" left-0 z-10 mt-auto hidden w-full  gap-4  rounded-lg rounded-t-none border-t-[1px]   border-base-100 border-opacity-50  bg-white px-6 py-3  dark:bg-neutral sm:max-w-lg md:flex ">
      <div className=" flex items-center gap-1">
        <div className="kbd kbd-sm ">
          <ArrowUpIcon className="h-2.5  text-gray-500 dark:text-gray-300" />
        </div>
        <div className="kbd kbd-sm">
          <ArrowDownIcon className="h-2.5  text-gray-500 dark:text-gray-300" />
        </div>
        <p className="text-[10px] text-gray-500 dark:text-gray-300">
          {t("navigation")}
        </p>
      </div>

      <div className="flex items-center gap-1">
        <div className="kbd kbd-sm ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3  fill-gray-500 dark:fill-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z" />
          </svg>
        </div>
        <p className="text-[10px] text-gray-500 dark:text-gray-300">
          {t("select")}
        </p>
      </div>

      {pathname !== "/" && (
        <div className="flex items-center gap-1">
          <div className="kbd  text-xs text-[10px] text-gray-500 dark:text-gray-300">
            Esc
          </div>
          <p className="text-[10px] text-gray-500 dark:text-gray-300">
            {t("quit")}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchNavigationHints;
