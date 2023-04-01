"use client";
import { useUserStore } from "@/zustandStore";
import { useRouter } from "next/navigation";
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

  return null;
};

export default RedirectHandler;
