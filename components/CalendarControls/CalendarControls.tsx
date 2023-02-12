"use client";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const CalendarControls = () => {
  return (
    <div className="btn-group flex  h-10 justify-end print:hidden">
      <button className="btn-outline  btn  btn-sm border-none">
        <ChevronLeftIcon width={20} height={20} />
      </button>
      <button className="btn-outline btn  btn-sm border-none">
        <ChevronRightIcon width={20} height={20} />
      </button>
    </div>
  );
};

export default CalendarControls;
