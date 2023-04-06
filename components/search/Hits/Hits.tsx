"use client";

import React, { useState, useRef } from "react";
import { GroupsHits, Highlight, ProfessorsHits } from "@/components";
import { OmsuGroupType, OmsuProfessorType } from "@/types";
import { useSearchStore } from "@/zustandStore";
import { useHitsNavigation } from "@/hooks/useHitsNavigation";

type HitsProps<T> = {
  hits: Fuzzysort.KeyResults<T>[];
};

const Hits = <T extends OmsuGroupType | OmsuProfessorType>({
  hits,
}: HitsProps<T>) => {
  const chooseQuery = useSearchStore((state) => state.chooseQuery);

  const groupsList = hits[0].map((hit) => hit.obj);
  const professorsList = hits[1].map((hit) => hit.obj);

  const groupsHits = hits[0] as Fuzzysort.KeyResults<OmsuGroupType>;
  const professorsHits = hits[1] as Fuzzysort.KeyResults<OmsuProfessorType>;
  const ref = useRef<HTMLDivElement>(null);

  const {
    activeHit,
    activeList: [activeGroup, activeProfessor],
  } = useHitsNavigation({
    hitsList: [groupsList, professorsList],
    choose: chooseQuery,
    scrollTo: ref,
  });

  return (
    <div
      className="grid  h-full gap-5 overflow-y-auto scrollbar-thin scrollbar-track-gray-300    scrollbar-thumb-neutral first:pt-5 dark:scrollbar-track-neutral-focus  dark:scrollbar-thumb-base-100"
      ref={ref}
    >
      {groupsHits.length >= 1 && (
        <GroupsHits
          hits={groupsHits}
          active={activeGroup}
          activeHit={activeHit as OmsuGroupType}
        />
      )}
      {professorsHits.length >= 1 && (
        <ProfessorsHits
          hits={professorsHits}
          active={activeProfessor}
          activeHit={activeHit as OmsuProfessorType}
        />
      )}
    </div>
  );
};

export default Hits;
