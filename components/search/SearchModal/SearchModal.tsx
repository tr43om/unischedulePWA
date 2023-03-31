"use client";
import React, { useRef } from "react";

import { useFuzzy, useGroups, useProfessors } from "@/hooks";
import { useSearchStore } from "@/zustandStore";
import {
  Hits,
  NoSearchResults,
  SearchNavigationHints,
  SearchBar,
  NoQuery,
} from "@/components";
import Image from "next/image";
import welcome from "@/assets/welcome.svg";

type SearchModalProps = {
  fullwidth?: boolean;
};

const SearchModal = ({ fullwidth }: SearchModalProps) => {
  const { favorites, recents, toggleSearch, isOpen } = useSearchStore(
    ({ favorites, recents, toggleSearch, chooseQuery, isOpen }) => {
      return { favorites, recents, toggleSearch, chooseQuery, isOpen };
    }
  );

  const { groups } = useGroups();
  const { professors } = useProfessors();

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

  if (!isOpen && !fullwidth) return null;

  return (
    <div
      className=" z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 z-[888] h-screen bg-base-300 bg-opacity-75 backdrop-blur-sm transition-opacity overflow-y-hidden"
        onClick={toggleSearch}
      ></div>

      <div
        className="fixed -top-10 left-0 right-0 z-[999] h-full   w-full  "
        onClick={toggleSearch}
      >
        <div className="z-15 flex h-full w-full  items-center   justify-center text-center sm:p-0">
          <div
            className="relative w-full   max-w-xs transform  rounded-lg   text-left transition-all sm:max-w-lg"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <SearchBar search={onSearch} />
            {
              <div
                className={`${
                  showNavigationHints && "pb-14"
                } z-30 mt-3  grid h-72 max-h-72 overflow-y-auto rounded-lg bg-white  dark:bg-neutral  `}
                ref={ref}
              >
                {showHits && <Hits hits={[groupsHits, professorsHits]} />}
                {recents.length < 1 && favorites.length < 1 && !query && (
                  <div className="mt-4 grid  items-center justify-items-center">
                    <Image
                      src={welcome}
                      alt="searching"
                      width={180}
                      height={180}
                    />
                    <p className="text-sm ">
                      Найди следующую пару за пару секунд
                    </p>
                  </div>
                )}
                {!query && <NoQuery />}
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
