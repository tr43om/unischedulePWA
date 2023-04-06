import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-gradient flex select-none items-center gap-2 text-center text-2xl font-bold normal-case"
    >
      uniSchedule
    </Link>
  );
};

export default Logo;
