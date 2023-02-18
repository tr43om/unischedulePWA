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
import { SearchModal } from "../SearchModal";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    themeChange(false);

    setDark(localStorage.getItem("theme") === "dracula");
  }, []);
  const [dark, setDark] = useState(true);

  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  const toggleTheme = () => setDark((d) => !d);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start -ml-5">
        <div className="dropdown-hover dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
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
        <a className="btn-ghost btn text-xl normal-case">uniSchedule</a>
      </div>
      <div className="navbar-end">
        <label
          className=" grid h-full w-12 cursor-pointer place-items-center  hover:text-primary"
          htmlFor="my-modal-4"
        >
          <MagnifyingGlassIcon className=" h-5 w-5 " onClick={openModal} />
          {modal && <SearchModal closeModal={closeModal} />}
        </label>
      </div>
    </div>
  );
};

export default Navbar;
