"use client";
import { useUserStore } from "@/zustandStore";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const RedirectHandler = () => {
  const { groupId, professorId } = useUserStore((state) => state);
  const { push } = useRouter();
  const redirectRoute = groupId
    ? `groups/${groupId}`
    : professorId
    ? `professors/${professorId}`
    : "";

  useEffect(() => {
    if (groupId || professorId) {
      push(redirectRoute);
    }
  }, []);
  return <div>RedirectHandler</div>;
};

export default RedirectHandler;
