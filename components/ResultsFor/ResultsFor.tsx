"use client";

import { useUserStore } from "@/zustandStore";
import React, { useEffect, useState } from "react";

const ResultsFor = () => {
  const [rehydrated, setRehydrated] = useState(false);
  const name = useUserStore((state) => state.name);

  useEffect(() => {
    setRehydrated(true);
  }, []);

  if (!name && !rehydrated) return null;
  return (
    <>
      {rehydrated && (
        <p className="  badge  text-xs ">
          <span className="text-white">{name}</span>
        </p>
      )}
    </>
  );
};

export default ResultsFor;
