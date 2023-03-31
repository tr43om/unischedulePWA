"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

const ThemeProviders = (props: ThemeProviderProps) => {
  return <ThemeProvider {...props} />;
};

export default ThemeProviders;
