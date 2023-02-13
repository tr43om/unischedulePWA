import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="relative flex h-14 w-full  items-center overflow-hidden rounded-lg  bg-neutral focus-within:shadow-lg">
      <div className="grid h-full w-12 place-items-center ">
        <MagnifyingGlassIcon className="h-5 w-5" />
      </div>

      <input
        className="peer h-full  bg-neutral text-sm  outline-none"
        type="text"
        id="search"
        autoFocus
        placeholder="Найти расписание..."
      />
      {/* <div className="ml-auto  mr-4 grid w-12 justify-end justify-self-end">
        <kbd className=" kbd  hidden sm:flex">esc</kbd>
      </div> */}
    </div>
  );
};

export default SearchBar;
