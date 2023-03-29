"use client";
import React, { ReactNode } from "react";
import { SWRConfig } from "swr";

type SwrWrapperProps = {
  children: ReactNode;
  fallback: any;
};

const SwrWrapper = ({ children, fallback }: SwrWrapperProps) => {
  return <SWRConfig value={{ fallback }}>{children}</SWRConfig>;
};

export default SwrWrapper;
