"use client";

import React, { useRef } from "react";
import { OmsuProfessorType } from "@/types";
import { useSearchStore } from "@/zustandStore";
import { Highlight } from "@/components";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useKeyPress } from "@/hooks";
import { useRouter } from "next/navigation";

type HitsProps<T> = {
  hits: Fuzzysort.KeyResults<T>;
  active: number;
  activeHit: OmsuProfessorType;
};

const ProfessorsHits = <T extends OmsuProfessorType>({
  hits,
  active,
  activeHit,
}: HitsProps<T>) => {
  const chooseProfessor = useSearchStore((state) => state.chooseQuery);

  const router = useRouter();

  useKeyPress({
    callback: () => {
      chooseProfessor(activeHit);
      router.push(`professors/${activeHit.id}`);
    },
    keys: ["Enter"],
  });

  return (
    <section>
      <h3 className="px-6  pb-3 text-sm  text-gray-400">Преподаватели</h3>

      <div>
        {hits.map((hit, i) => (
          <Link
            href={`professors/${hit.obj.id}`}
            onClick={() => {
              chooseProfessor(hit.obj);
              console.log(hit.obj);
            }}
            key={hit.obj.id}
            className={`flex w-full cursor-pointer items-center justify-between border-b-[1px]  border-base-100 border-opacity-50    py-3 px-6 transition delay-100  ease-in-out first:border-t-[1px]  last:border-none ${
              i === active && "bg-gray-300 dark:bg-neutral-focus"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="placeholder avatar">
                <div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
                  <span className="text-xs">{hit.obj.name.split("")[0]}</span>
                </div>
              </div>
              <Highlight hit={hit} containerClassName="text-primary" />
            </div>
            <ChevronRightIcon className="h-4" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProfessorsHits;
