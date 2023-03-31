import React, { useEffect, useState } from "react";
import { Badge } from "../Badge";

type ResultsForProps = {
  resultsFor: string;
};

const ResultsFor = ({ resultsFor }: ResultsForProps) => {
  return <Badge label={resultsFor} variant="badge-lg" />;
};

export default ResultsFor;
