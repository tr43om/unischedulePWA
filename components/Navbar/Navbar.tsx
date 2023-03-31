import React from "react";
import { SearchModal, ThemeSwitcher } from "@/components";
import { ModalToggle } from "../ModalToggle";

const Navbar = () => {
  return (
    <nav className="navbar mt-4 hidden bg-base-100 p-0 lg:mb-16 lg:navbar">
      <ThemeSwitcher />
      <div className="max-[1024px]:navbar-center lg:-order-1 lg:mr-16 ">
        <a className="text-xl font-bold normal-case ">uniSchedule</a>
      </div>
      <div className="max-[1024px]:navbar-end lg:w-full lg:max-w-xs">
        <ModalToggle />
      </div>
    </nav>
  );
};

export default Navbar;
