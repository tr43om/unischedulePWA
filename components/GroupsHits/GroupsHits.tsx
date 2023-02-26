"use client";
import { OmsuGroupType } from "@/types";
import { useSearchStore } from "@/zustandStore";
import React, { useRef } from "react";
import { Highlight } from "@/components";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type HitsProps<T> = {
  hits: Fuzzysort.KeyResults<T>;
  active: number;
};

const GroupsHits = <T extends OmsuGroupType>({
  hits,
  active,
}: HitsProps<T>) => {
  const chooseGroup = useSearchStore((state) => state.chooseQuery);

  return (
    <section>
      <h3 className="px-6  pb-3 text-sm  text-gray-400">Группы</h3>

      {hits.map((hit, i) => (
        <div
          onClick={() => chooseGroup(hit.obj)}
          key={hit.obj.id}
          className={`flex w-full cursor-pointer items-center justify-between  border-b-[1px] border-b-base-100    border-opacity-50 py-3 px-6 transition  delay-100 ease-in-out first:pt-3 last:border-none  ${
            i === active && "bg-gray-300 text-primary dark:bg-neutral-focus"
          }`}
        >
          <div>
            <Highlight hit={hit} containerClassName="text-primary" />
            <p className="text-sm text-gray-400">{hit.obj.course} курс</p>
          </div>
          <ChevronRightIcon className="h-4" />
        </div>
      ))}
    </section>
  );
};

export default GroupsHits;
