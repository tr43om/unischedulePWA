"use client";
import React from "react";

type NoSearchResultsProps = {
  query: string;
};

const NoSearchResults = ({ query }: NoSearchResultsProps) => {
  return (
    <div className="py-6 px-6 text-center">
      Группа &ldquo;{query}&rdquo; не существует
    </div>
  );
};

export default NoSearchResults;
