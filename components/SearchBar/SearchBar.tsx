"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

type SearchBarProps = {
  search: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ search }: SearchBarProps) => {
  return (
    <div className="relative flex h-14 w-full  items-center overflow-hidden rounded-lg  bg-neutral focus-within:shadow-lg">
      <div className="grid h-full w-12 place-items-center ">
        <MagnifyingGlassIcon className="h-5 w-5 text-base-content" />
      </div>

      <input
        className="peer h-full  bg-neutral text-sm  text-base-content outline-none"
        type="text"
        id="search"
        autoFocus
        autoComplete="off"
        placeholder="Найти расписание..."
        onChange={search}
        defaultValue=""
      />
      <div className="ml-auto  mr-4 grid w-12 justify-end justify-self-end">
        <kbd className=" kbd  hidden sm:flex">esc</kbd>
      </div>
    </div>
  );
};

export default SearchBar;
