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
          className={` btn btn-sm  ${view === "day" && "btn-active"}`}
          onClick={() => setView("day")}
        >
          <CalendarIcon width={20} height={20} />
        </button>
        <button
          className={` btn btn-sm   ${view === "week" && "btn-active"} `}
          onClick={() => setView("week")}
        >
          <CalendarDaysIcon width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
