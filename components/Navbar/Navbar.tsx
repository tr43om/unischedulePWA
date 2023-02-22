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
import { SearchModal } from "@/components";
import { useSearchStore, useUserStore } from "@/zustandStore";
// import { useKeyPress } from "@/hooks";

const Navbar = () => {
  const [dark, setDark] = useState(true);
  const { isOpen, toggleSearch } = useSearchStore();
  const { groupId } = useUserStore();

  const [loaded, setLoaded] = useState(false);

  // // Modal on
  // useKeyPress({
  //   callback: toggleSearch,
  //   hotkey: "ctrl+k",
  // });

  useEffect(() => {
    themeChange(false);
    setLoaded(true);
    setDark(localStorage.getItem("theme") === "dracula");
  }, []);

  const toggleTheme = () => setDark((d) => !d);

  const isModalShown = !groupId || isOpen;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start -ml-5">
        <div className="dropdown-hover dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Bars3BottomLeftIcon className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="w-30 dropdown-content menu rounded-box  menu-compact bg-base-100 p-2 shadow"
          >
            <li>
              <label
                className={`swap-rotate swap ${dark && "swap-active"}`}
                onClick={toggleTheme}
                data-set-theme={`${dark ? "light" : "dracula"}`}
              >
                <SunIcon className={`swap-off   h-5 w-5`} />
                <MoonIcon className={`swap-on  h-5 w-5 `} />
              </label>
            </li>
            <li>
              <label className="swap-rotate swap">
                <input type="checkbox" />

                <SpeakerWaveIcon className="swap-on h-5 w-5 " />
                <SpeakerXMarkIcon className="swap-off h-5 w-5 " />
              </label>
            </li>
          </ul>
        </div>
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
