import React from "react";
import { Highlight } from "../Highlight";
import { GroupType, OmsuGroupType } from "@/types";

type HitsProps<T> = {
  hits: Fuzzysort.KeyResults<T>;
};

const Hits = <T extends OmsuGroupType>({ hits }: HitsProps<T>) => {
  return (
    <div className="mt-3 grid  rounded-lg bg-neutral px-3 py-3">
      {hits.map((hit) => (
        <div
          key={hit.obj.id}
          className={`${
            hits.length > 1 && "border-b-[1px]"
          }  rounded-lg border-base-100 border-opacity-50 py-3 px-3 transition delay-100 ease-in-out hover:bg-neutral-focus`}
        >
          <Highlight hit={hit} containerClassName="text-primary" />
          <p className="text-sm text-gray-400">{hit.obj.course} курс</p>
        </div>
      ))}
    </div>
  );
};

export default Hits;
