"use client";

import React, { useState } from "react";
import { Highlight } from "../Highlight";
import { OmsuGroupType } from "@/types";
import { useSearchStore } from "@/zustandStore";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useKeyPress } from "@/hooks/useKeyPress";

type HitsProps<T> = {
  hits: Fuzzysort.KeyResults<T>;
  choose: (group: OmsuGroupType) => void;
};

const Hits = <T extends OmsuGroupType>({ hits, choose }: HitsProps<T>) => {
  const [activeHit, setActiveHit] = useState(0);

  const chooseQuery = useSearchStore((state) => state.chooseQuery);

  useKeyPress({
    callback: () => chooseQuery(hits[activeHit].obj),
    keys: ["Enter"],
  });
  useKeyPress({
    callback: () =>
      activeHit < hits.length - 1
        ? setActiveHit((cur) => cur + 1)
        : activeHit === hits.length - 1
        ? setActiveHit(0)
        : null,
    keys: ["ArrowDown"],
  });
  useKeyPress({
    callback: () =>
      activeHit > 0
        ? setActiveHit((cur) => cur - 1)
        : activeHit === 0
        ? setActiveHit(hits.length - 1)
        : null,
    keys: ["ArrowUp"],
  });

  return (
    <div className=" last:border-none">
      {hits.map((hit, i) => (
        <div
          onClick={() => choose(hit.obj)}
          onMouseEnter={() => setActiveHit(i)}
          key={hit.obj.id}
          className={`flex w-full cursor-pointer items-center justify-between  border-b-[1px] border-b-base-100    border-opacity-50 py-3 px-6 transition  delay-100 ease-in-out first:pt-3  ${
            i === activeHit && " bg-neutral-focus"
          }`}
        >
          <div>
            <Highlight hit={hit} containerClassName="text-primary" />
            <p className="text-sm text-gray-400">{hit.obj.course} курс</p>
          </div>
          <ChevronRightIcon className="h-4" />
        </div>
      ))}
    </div>
  );
};

export default Hits;
