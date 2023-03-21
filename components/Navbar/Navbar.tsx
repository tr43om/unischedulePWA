import React from "react";
import { SearchModal, ThemeSwitcher } from "@/components";
import { ModalToggle } from "../ModalToggle";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-0">
      <div className="navbar-start ">
        <ThemeSwitcher />
      </div>
      <div className="navbar-center">
        <a className="btn-ghost btn text-xl normal-case">uniSchedule</a>
      </div>
      <div className="navbar-end">
        <ModalToggle />
        <SearchModal />
      </div>
    </div>
  );
};

export default Navbar;
