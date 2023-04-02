"use client";
import React, { ReactNode } from "react";

const Announcement = ({ children }: { children: ReactNode }) => {
  if (window.matchMedia("(display-mode: standalone)").matches) {
    return null;
  }
  return (
    <div className="relative z-[2000] bg-indigo-600 px-4 py-3 text-white">
      <p className="lg:text-md text-center text-sm font-medium">{children}</p>
    </div>
  );
};

export default Announcement;
