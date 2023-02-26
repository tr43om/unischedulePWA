"use client";
import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { themeChange } from "theme-change";
import { SearchModal, ThemeSwitcher } from "@/components";
import { useSearchStore, useUserStore } from "@/zustandStore";
import { useKeyPress } from "@/hooks";

const Navbar = () => {
  const { isOpen, toggleSearch } = useSearchStore();
  const { groupId, professorId } = useUserStore();

  const [rehydrated, setRehydrated] = useState(false);

  // Modal on
  useKeyPress({
    callback: toggleSearch,
    hotkey: "ctrl+k",
  });

  useEffect(() => {
    themeChange(false);
    setRehydrated(true);
  }, []);

  const isModalShown = ((!groupId && !professorId) || isOpen) && rehydrated;

  return (
    <div className="navbar bg-base-100 p-0">
      <div className="navbar-start ">
        <ThemeSwitcher />
      </div>
      <div className="navbar-center">
        <a className="btn-ghost btn text-xl normal-case">uniSchedule</a>
      </div>
      <div className="navbar-end">
        <MagnifyingGlassIcon
          className=" h-5 cursor-pointer  hover:text-primary"
          onClick={toggleSearch}
        />
        {isModalShown && <SearchModal />}
      </div>
    </div>
  );
};

export default Navbar;
