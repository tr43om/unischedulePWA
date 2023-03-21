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
    <MagnifyingGlassIcon
      className=" cursor-pointer  hover:text-primary"
      width={20}
      height={20}
      onClick={toggleSearch}
    />
  );
};

export default ModalToggle;
