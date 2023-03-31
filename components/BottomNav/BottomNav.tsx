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
    <nav className=" fixed inset-x-0 bottom-0 grid w-full content-center   bg-neutral/70      p-4 pb-8 backdrop-blur-md   lg:hidden">
      <div className="mx-auto flex max-w-xs items-center gap-24 ">
        <Link href="/">
          <HomeIcon className="h-6 w-6  cursor-pointer text-white" />
        </Link>
        <ThemeSwitcher />
        <ModalToggle />
      </div>
    </nav>
  );
};

export default BottomNav;
