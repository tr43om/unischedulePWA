import React from "react";
import {
  HomeIcon,
  Cog6ToothIcon as SettingsIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ModalToggle } from "../ModalToggle";
import { ThemeSwitcher } from "../ui";

const BottomNav = () => {
  return (
    <nav className=" fixed inset-x-0 bottom-0 grid w-full content-center bg-white   py-6      shadow-xl backdrop-blur-md   dark:bg-neutral lg:hidden">
      <div className="mx-auto flex max-w-xs items-center gap-24 ">
        <Link href="/">
          <HomeIcon className="h-6 w-6  cursor-pointer text-neutral dark:text-white" />
        </Link>
        <ThemeSwitcher />
        <ModalToggle />
      </div>
    </nav>
  );
};

export default BottomNav;
