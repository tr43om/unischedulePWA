import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

type SearchBarProps = {
  search: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ search }: SearchBarProps) => {
  return (
    <div className="relative flex h-14 w-full  items-center overflow-hidden rounded-lg bg-white/40 px-3    focus-within:shadow-lg dark:bg-neutral">
      <div className="grid h-full w-12 place-items-center ">
        <MagnifyingGlassIcon
          className="  text-gray-400"
          width={20}
          height={20}
        />
      </div>

      <input
        className="peer h-full w-full bg-white bg-opacity-0 pl-1 text-base text-base-content  outline-none dark:bg-neutral"
        type="text"
        id="search"
        autoFocus
        autoComplete="off"
        placeholder="Найти расписание..."
        onChange={(e) => {
          search(e);
        }}
        defaultValue=""
      />
      <div className="ml-auto  mr-4 grid w-12 justify-end justify-self-end"></div>
    </div>
  );
};

export default SearchBar;
