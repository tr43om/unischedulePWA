"use client";

import React, { useState, useRef, RefObject } from "react";
import { GroupsHits, Highlight, ProfessorsHits } from "@/components";
import { OmsuGroupType } from "@/types";
import { useSearchStore } from "@/zustandStore";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useKeyPress } from "@/hooks";
import { OmsuProfessorType } from "../../types/index";
import { useHitsNavigation } from "@/hooks/useHitsNavigation";

import * as _ from "lodash";

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
    <div className="grid  h-full gap-5 overflow-y-auto first:pt-5" ref={ref}>
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
