import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const HomeButton = () => {
  return (
    <Link href="/" className="btn-circle btn fixed bottom-4 left-4">
      <HomeIcon className="h-5 w-5" />
    </Link>
  );
};

export default HomeButton;
