import React from "react";

import fuzzysort from "fuzzysort";

interface HighlightProps<T> {
  hit: Fuzzysort.KeyResult<T>;
  containerClassName?: string;
  hightlightClassname?: string;
}

const Highlight = <T,>({
  hit,
  containerClassName,
  hightlightClassname,
}: HighlightProps<T>) => {
  return (
    <div className={`${containerClassName} text-base`}>
      {fuzzysort.highlight(hit, (match) => (
        <span
          className={hightlightClassname ? hightlightClassname : "font-bold "}
          key={`highlight-${match}`}
        >
          {match}
        </span>
      ))}
    </div>
  );
};

export default Highlight;
