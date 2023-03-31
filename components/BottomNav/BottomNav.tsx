import React from "react";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  Cog6ToothIcon as SettingsIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ModalToggle } from "../ModalToggle";
import { ThemeSwitcher } from "../ui";

const BottomNav = () => {
  return (
    <nav className=" fixed inset-x-0 bottom-4 mx-auto flex w-full  max-w-xs justify-around   rounded-md bg-neutral/70 p-4 backdrop-blur-md   lg:hidden">
      <Link href="/">
        <HomeIcon className="h-6 w-6  cursor-pointer text-white" />
      </Link>
      <ThemeSwitcher />
      <ModalToggle />
    </nav>
  );
};

export default BottomNav;
