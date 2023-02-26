"use client";

import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeSwitcher = () => {
  const [dark, setDark] = useState(true);
  const toggleTheme = () => setDark((d) => !d);

  return (
    <label
      className={`swap swap-rotate ${dark && "swap-active"} hover:text-primary`}
      onClick={toggleTheme}
      data-set-theme={`${dark ? "cmyk" : "dracula"}`}
    >
      <SunIcon className={`swap-off   h-5 `} />
      <MoonIcon className={`swap-on  h-5 `} />
    </label>
  );
};

export default ThemeSwitcher;
