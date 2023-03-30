"use client";
import { use } from "react";
import React, { useRef, useEffect } from "react";

import { useFuzzy, useGroups, useKeyPress, useProfessors } from "@/hooks";
import { useSearchStore } from "@/zustandStore";
import {
  Hits,
  NoSearchResults,
  SearchNavigationHints,
  SearchBar,
  NoQuery,
} from "@/components";
import { usePathname, useRouter } from "next/navigation";
import { OmsuGroupType, OmsuProfessorType } from "@/types";
import travolta from "@/assets/travolta.gif";
import Image from "next/image";

type SearchModalProps = {
  fullwidth?: boolean;
};

const SearchModal = ({ fullwidth }: SearchModalProps) => {
  const pathname = usePathname();
  const { favorites, recents, toggleSearch, isOpen } = useSearchStore(
    ({ favorites, recents, toggleSearch, chooseQuery, isOpen }) => {
      return { favorites, recents, toggleSearch, chooseQuery, isOpen };
    }
  );

  const { groups } = useGroups();
  const { professors } = useProfessors();
  // const { groups, professors, loading } = useSearchCollection();

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

  if (!isOpen && pathname !== "/") return null;

  return (
    <div
      className=" z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 z-[799] h-screen bg-base-300 bg-opacity-75 backdrop-blur-sm transition-opacity overflow-y-hidden"
        onClick={toggleSearch}
      ></div>

      <div
        className="fixed -top-10 left-0 right-0 z-[899] h-full  w-full   max-sm:px-2  "
        onClick={toggleSearch}
      >
        <div className=" flex h-full w-full  items-center   justify-center text-center sm:p-0">
          <div
            className="relative w-full max-w-sm   transform rounded-lg  text-left   transition-all sm:max-w-lg md:px-0"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <SearchBar search={onSearch} />

            <div
              className={`${
                showNavigationHints && "pb-14"
              } z-30 mt-3  grid h-72 max-h-72 overflow-y-auto rounded-lg bg-white  dark:bg-neutral  `}
              ref={ref}
            >
              {showHits && <Hits hits={[groupsHits, professorsHits]} />}
              {recents.length < 1 && favorites.length < 1 && !query && (
                <div className="mt-1 grid  items-center justify-items-center">
                  <Image
                    src={travolta}
                    alt="searching"
                    width={200}
                    height={200}
                  />
                  <p className="lg:text-md mt-4 text-sm font-semibold">
                    Найдите следующую пару за пару секунд 🔥
                  </p>
                </div>
              )}
              {!query && <NoQuery />}
              {showNoSearchResults && <NoSearchResults query={query} />}
              {showNavigationHints && <SearchNavigationHints />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
