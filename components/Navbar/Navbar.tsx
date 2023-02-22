"use client";
import React, { useEffect, useState } from "react";
import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  MoonIcon,
  SunIcon,
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { themeChange } from "theme-change";
import { SearchModal, ThemeSwitcher } from "@/components";
import { useSearchStore, useUserStore } from "@/zustandStore";
import { useKeyPress } from "@/hooks";

const Navbar = () => {
  const { isOpen, toggleSearch } = useSearchStore();
  const { groupId } = useUserStore();

  const [loaded, setLoaded] = useState(false);

  // Modal on
  useKeyPress({
    callback: toggleSearch,
    hotkey: "ctrl+k",
  });

  useEffect(() => {
    themeChange(false);
    setLoaded(true);
  }, []);

  const isModalShown = !groupId || isOpen;

  return (
    <div className="navbar bg-base-100 p-0">
      <div className="navbar-start ">
        <ThemeSwitcher />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl normal-case">uniSchedule</a>
      </div>
      <div className="navbar-end">
        <MagnifyingGlassIcon
          className=" h-5 cursor-pointer  hover:text-primary"
          onClick={toggleSearch}
        />
        {loaded && isModalShown && <SearchModal />}
      </div>
    </div>
  );
};

export default Navbar;
