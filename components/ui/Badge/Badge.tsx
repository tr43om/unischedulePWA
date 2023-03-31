import { twClassNames } from "@/utils";
import React from "react";

type BadgeProps = {
  label: string;
  variant?: "badge-sm" | "badge-md" | "badge-lg";
};

//  label.toLowerCase() === "лаб" && "bg-indigo-200 text-white",
//  label.toLowerCase() === "лек" && "bg-red-200 text-white",
//  label.toLowerCase() === "прак" && "bg-orange-200 text-white",

const Badge = ({ label, variant = "badge-sm" }: BadgeProps) => {
  return (
    <span
      className={twClassNames(
        "  rounded-md border-none bg-neutral px-2.5 py-0.5  text-white",

        variant === "badge-sm" && "text-xs",
        variant === "badge-md" && "px-3 py-1 text-sm",
        variant === "badge-lg" && "px-5 py-1.5 text-sm"
      )}
    >
      {label}
    </span>
  );
};

export default Badge;
