"use client";

import React, { useRef } from "react";

import { useFuzzy, useGroups, useKeyPress, useProfessors } from "@/hooks";
import { useSearchStore } from "@/zustandStore";
import {
  Hits,
  NoSearchResults,
  SearchNavigationHints,
  SearchBar,
  NoQuery,
} from "@/components";

type SearchModal = {};

const SearchModal = ({}: SearchModal) => {
  const { groups } = useGroups();
  const { professors } = useProfessors();

  const { chooseQuery, favorites, recents, toggleSearch } = useSearchStore(
    ({ favorites, recents, toggleSearch, chooseQuery }) => {
      return { favorites, recents, toggleSearch, chooseQuery };
    }
  );

  const noQueryItemsLength = favorites.length + recents.length;

  const {
    hits: [groupsHits, professorsHits],
    onSearch,
    query,
  } = useFuzzy([groups, professors], {
    key: "name",
    limit: 5,
    threshold: -45,
  });

  const showRecentsAndFavorites = !query && noQueryItemsLength >= 1;
  const showNoSearchResults =
    query.length >= 1 && groupsHits.length === 0 && professorsHits.length === 0;
  const showNavigationHints = noQueryItemsLength >= 1 || query.length >= 1;

  const showHits = groupsHits.length + professorsHits.length >= 1;
  const ref = useRef<HTMLDivElement>(null);

  // Modal off
  useKeyPress({
    callback: toggleSearch,
    keys: ["Escape"],
    hotkey: "ctrl+k",
  });

  return (
    <div
      className=" z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 h-screen overflow-y-hidden bg-base-300 bg-opacity-75 backdrop-blur-sm transition-opacity"
        onClick={toggleSearch}
      ></div>

      <div
        className="fixed -top-10 left-0 right-0 z-10 h-full   w-full  "
        onClick={toggleSearch}
      >
        <div className="z-15 flex h-full w-full  items-center   justify-center text-center sm:p-0">
          <div
            className="relative w-full   max-w-xs transform      rounded-lg   text-left transition-all sm:max-w-lg"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <SearchBar search={onSearch} />
            {
              <div
                className={`${
                  showNavigationHints && "pb-14"
                } z-30 mt-3  grid max-h-72 overflow-y-auto rounded-lg bg-white scrollbar-thin  scrollbar-thumb-primary  dark:bg-neutral  dark:scrollbar-track-neutral-focus    dark:scrollbar-thumb-base-100`}
                ref={ref}
              >
                {showHits && <Hits hits={[groupsHits, professorsHits]} />}
                {showRecentsAndFavorites && <NoQuery />}
                {showNoSearchResults && <NoSearchResults query={query} />}
                {showNavigationHints && <SearchNavigationHints />}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
