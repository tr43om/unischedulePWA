"use client";

import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [th, setTh] = useState("");
  const { theme, setTheme } = useTheme();
  useEffect(() => {
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
    <>
      <label
        className={`swap-rotate swap ${
          th === "dracula" && "swap-active"
        } hover:text-primary`}
        onClick={switchTheme}
      >
        <SunIcon className="swap-off" width={20} height={20} />
        <MoonIcon className="swap-on" width={20} height={20} />
      </label>
    </>
  );
};

export default ThemeSwitcher;
