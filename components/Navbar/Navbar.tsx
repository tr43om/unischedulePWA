import React from "react";
import { SearchModal, ThemeSwitcher } from "@/components";
import { ModalToggle } from "../ModalToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar mt-4 hidden bg-base-100 !p-0 lg:mb-16 lg:navbar">
      <ThemeSwitcher />
      <div className="max-[1024px]:navbar-center lg:-order-1 lg:mr-16 ">
        <Link
          href="/"
          className="text-gradient flex select-none items-center gap-2 text-center text-2xl font-bold normal-case"
        >
          uniSchedule
        </Link>
      </div>
      <div className="max-[1024px]:navbar-end lg:w-full lg:max-w-xs">
        <ModalToggle />
      </div>
    </nav>
  );
};

export default Navbar;
