"use client";
import React from "react";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  Cog6ToothIcon as SettingsIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className=" fixed inset-x-0  bottom-5 mx-auto  flex w-full justify-between px-5 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <Link href="/">
        <HomeIcon
          className={`h-6 w-6  cursor-pointer ${
            pathname === "/" ? "text-gray-900" : "text-gray-400"
          }`}
        />
      </Link>
      <Link href="/search">
        <MagnifyingGlassIcon
          className={`h-6 w-6  cursor-pointer ${
            pathname === "/search" ? "text-gray-900" : "text-gray-400"
          }`}
        />
      </Link>
      <Link href="/settings">
        <SettingsIcon
          className={`h-6 w-6  cursor-pointer ${
            pathname === "/settings" ? "text-gray-900" : "text-gray-400"
          }`}
        />
      </Link>
    </nav>
  );
};

export default BottomNav;
