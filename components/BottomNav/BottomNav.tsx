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
    <nav className=" fixed  inset-x-0 bottom-1 mx-auto  flex w-full max-w-[340px] justify-around rounded-lg bg-primary-content p-5 px-5 sm:max-w-screen-sm md:max-w-screen-sm">
      <Link href="/">
        <HomeIcon
          className={`h-6 w-6  cursor-pointer ${
            pathname === "/"
              ? "text-primary hover:text-primary-focus"
              : "text-gray-400 hover:text-gray-800"
          }`}
        />
      </Link>
      <Link href="/search">
        <MagnifyingGlassIcon
          className={`h-6 w-6  cursor-pointer ${
            pathname === "/search"
              ? "text-primary hover:text-primary-focus"
              : "text-gray-400 hover:text-gray-800"
          }`}
        />
      </Link>
      <Link href="/settings">
        <SettingsIcon
          className={`h-6 w-6  cursor-pointer ${
            pathname === "/settings"
              ? "text-primary hover:text-primary-focus"
              : "text-gray-400 hover:text-gray-800"
          }`}
        />
      </Link>
    </nav>
  );
};

export default BottomNav;
