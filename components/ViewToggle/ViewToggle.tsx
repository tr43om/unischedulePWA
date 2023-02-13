"use client";

import React from "react";
import { CalendarIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { useAppearanceStore } from "@/zustandStore";

const ViewToggle = () => {
  const { setView, view } = useAppearanceStore();

  return (
    <div className="flex  justify-end gap-2">
      <div className="btn-group ">
        <button
          className={` btn-sm btn  ${view === "day" && "btn-active"}`}
          onClick={() => setView("day")}
        >
          <CalendarIcon className={`h-5 w-5  `} />
        </button>
        <button
          className={` btn-sm btn   ${view === "week" && "btn-active"} `}
          onClick={() => setView("week")}
        >
          <CalendarDaysIcon className={`h-5 w-5 `} />
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
