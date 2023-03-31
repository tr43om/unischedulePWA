"use client";

import { useKeyPress } from "@/hooks";
import { useSearchStore } from "@/zustandStore";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const ModalToggle = () => {
  const { isOpen, toggleSearch, closeSearch } = useSearchStore();

  // Modal on
  useKeyPress({
    callback: toggleSearch,
    hotkey: "ctrl+k",
  });

  //   Modal off
  useKeyPress({
    callback: closeSearch,
    keys: ["Escape"],
  });

  return (
    <>
      <MagnifyingGlassIcon
        className=" cursor-pointer text-white lg:hidden"
        width={20}
        height={20}
        onClick={toggleSearch}
      />
      <div
        className=" group hidden w-full   cursor-pointer items-center  rounded-md border-[1px] border-gray-400 px-3   py-3 transition-all  hover:border-primary dark:border-gray-600  lg:flex"
        onClick={toggleSearch}
      >
        <MagnifyingGlassIcon
          className=" cursor-pointer  text-gray-400  group-hover:text-primary hover:text-primary"
          width={20}
          height={20}
        />
        <p className="ml-2 select-none text-sm text-gray-400 group-hover:text-primary">
          Найти расписание...
        </p>

        <div className="ml-auto  flex gap-1">
          <kbd className="kbd kbd-sm text-gray-600 dark:text-gray-400">
            ctrl
          </kbd>
          <kbd className="kbd kbd-sm text-gray-600 dark:text-gray-400">k</kbd>
        </div>
      </div>
    </>
  );
};

export default ModalToggle;
