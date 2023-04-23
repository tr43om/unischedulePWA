"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Qr = () => {
  useEffect(() => {
    redirect("/");
  }, []);
  return null;
};

export default Qr;
