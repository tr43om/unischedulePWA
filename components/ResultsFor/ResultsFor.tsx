"use client";

import React, { useEffect, useState } from "react";

type ResultsForProps = {
  resultsFor: string;
};

const ResultsFor = ({ resultsFor }: ResultsForProps) => {
  const [rehydrated, setRehydrated] = useState(false);

  useEffect(() => {
    setRehydrated(true);
  }, []);

  return (
    <>
      {rehydrated && (
        <p className="  badge  text-xs ">
          <span className="text-white">{resultsFor}</span>
        </p>
      )}
    </>
  );
};

export default ResultsFor;
