import React from "react";

const SearchBar = () => {
  return (
    <div className="mx-auto mb-5 max-w-md print:hidden">
      <div className="relative flex h-12 w-full items-center overflow-hidden rounded-lg bg-white focus-within:shadow-lg">
        <div className="grid h-full w-12 place-items-center text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="peer h-full w-full pr-2 text-sm text-gray-700 outline-none"
          type="text"
          id="search"
          placeholder="Найти расписание..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
