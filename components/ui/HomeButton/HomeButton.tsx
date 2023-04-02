import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const HomeButton = () => {
  return (
    <Link href="/" className="btn-lg btn-circle btn fixed bottom-5 left-5 ">
      <HomeIcon className="h-6 w-6" />
    </Link>
  );
};

export default HomeButton;
