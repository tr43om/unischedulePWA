"use client";

import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { themeChange } from "theme-change";

const ThemeSwitcher = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [th, setTh] = useState("");
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    themeChange(false);
    setIsMounted(true);
    if (theme) {
      setTh(theme);
    }
  }, [theme]);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "dracula" ? "cmyk" : "dracula");
    }
  };

  return (
    <div
      className="group lg:order-2  lg:ml-auto lg:w-auto  lg:flex-grow-0 lg:btn"
      onClick={switchTheme}
    >
      <label
        className={`swap-rotate swap ${
          th === "dracula" && "swap-active"
        } group-hover:text-primary`}
      >
        <SunIcon
          className="swap-off text-white lg:h-6 lg:w-6"
          width={20}
          height={20}
        />
        <MoonIcon
          className="swap-on text-white lg:h-6 lg:w-6"
          width={20}
          height={20}
        />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
