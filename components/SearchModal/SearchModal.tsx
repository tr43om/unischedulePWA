"use client";

import React from "react";
import { SearchBar } from "../SearchBar";

import { Hits } from "../Hits";

import { useFuzzy } from "../../hooks/useFuzzy";
import { useGroups } from "@/hooks/useGroups";
import useSwr from "swr";
import { fetcher } from "../../utils/index";
import { OmsuGroupType } from "@/types";

type SearchModal = {
  closeModal: () => void;
};

const SearchModal = ({ closeModal }: SearchModal) => {
  // const { groups, isLoading } = useGroups();

  const { data: groups } = useSwr<OmsuGroupType[]>("/api/groups", fetcher);

  const { hits, onSearch, query } = useFuzzy(groups || [], {
    key: "name",
    limit: 5,
  });

  const handleCloseOnPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  return (
    <div
      className="relative z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onKeyDown={handleCloseOnPress}
    >
      <div
        className="fixed inset-0 bg-base-300 bg-opacity-75 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      ></div>

      <div
        className="top-50 fixed left-0 right-0 z-10  w-full overflow-y-auto "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex min-h-full w-full items-end justify-center  text-center sm:items-center sm:p-0">
          <div className="relative w-full max-w-xs transform  overflow-hidden  rounded-lg text-left  transition-all sm:max-w-lg">
            <SearchBar search={onSearch} />
            {hits.length >= 1 && <Hits hits={hits} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
