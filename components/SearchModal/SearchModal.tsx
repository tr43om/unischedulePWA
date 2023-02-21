"use client";

import React, { useState, useRef } from "react";
import { SearchBar } from "../SearchBar";

import { Hits } from "../Hits";

import { useFuzzy } from "../../hooks/useFuzzy";
import { useGroups } from "@/hooks/useGroups";
import { useSearchStore } from "../../zustandStore/searchStore/index";
import { Recents } from "../Recents";
import { NoSearchResults } from "../NoSearchResults";
import { Favorites } from "../Favorites";
import { useKeyPress } from "@/hooks";
import { SearchNavigationHints } from "../SearchNavigationHints";

type SearchModal = {};

const SearchModal = ({}: SearchModal) => {
  const { groups } = useGroups();
  const [activeRecentOrFavorite, setActiveRecentOrFavorite] = useState(0);
  const favorites = useSearchStore((state) => state.favorites);
  const recents = useSearchStore((state) => state.recents);

  console.log("activeRecentOrFavorite", activeRecentOrFavorite);

  useKeyPress({
    callback: () =>
      activeRecentOrFavorite < favorites.length + recents.length - 1
        ? setActiveRecentOrFavorite((cur) => cur + 1)
        : activeRecentOrFavorite === favorites.length + recents.length - 1
        ? setActiveRecentOrFavorite(0)
        : null,
    keys: ["ArrowDown"],
  });

  useKeyPress({
    callback: () =>
      activeRecentOrFavorite > 0
        ? setActiveRecentOrFavorite((cur) => cur - 1)
        : activeRecentOrFavorite === 0
        ? setActiveRecentOrFavorite(favorites.length + recents.length - 1)
        : null,
    keys: ["ArrowUp"],
  });

  const toggleSearch = useSearchStore((state) => state.toggleSearch);
  const chooseQuery = useSearchStore((state) => state.chooseQuery);

  const { hits, onSearch, query } = useFuzzy(groups || [], {
    key: "name",
    limit: 5,
    threshold: -45,
  });

  // Modal off
  useKeyPress({
    callback: toggleSearch,
    keys: ["Escape"],
    hotkey: "ctrl+k",
  });

  return (
    <div
      className="relative z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-base-300 bg-opacity-75 backdrop-blur-sm transition-opacity"
        onClick={toggleSearch}
      ></div>

      <div
        className="top-50 fixed left-0 right-0 z-10  w-full overflow-y-auto "
        onClick={toggleSearch}
      >
        <div className="flex min-h-full w-full items-end justify-center  text-center sm:items-center sm:p-0">
          <div
            className="relative w-full max-w-xs transform  overflow-hidden  rounded-lg text-left  transition-all sm:max-w-lg"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <SearchBar search={onSearch} />
            <div className="relative mt-3  grid  overflow-hidden rounded-lg bg-neutral ">
              {hits.length >= 1 && <Hits hits={hits} choose={chooseQuery} />}
              {!query && (
                <div className="grid gap-5 py-6 px-6">
                  <Recents active={activeRecentOrFavorite} />
                  <Favorites active={activeRecentOrFavorite} />
                </div>
              )}
              {query && hits.length === 0 && <NoSearchResults query={query} />}
              <SearchNavigationHints />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
