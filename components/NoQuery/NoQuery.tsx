"use client";

import { useKeyPress } from "@/hooks";
import { useSearchStore } from "@/zustandStore";
import React, { useRef, useState } from "react";
import { Recents, Favorites } from "@/components";
import { useHitsNavigation } from "../../hooks/useHitsNavigation";

type NoQueryProps = {};

const NoQuery = () => {
  const { chooseQuery, favorites, recents } = useSearchStore(
    ({ favorites, recents, chooseQuery }) => {
      return { favorites, recents, chooseQuery };
    }
  );
  const ref = useRef<HTMLDivElement>(null);

  const {
    activeList: [activeRecent, activeFavorite],
  } = useHitsNavigation({
    hitsList: [recents, favorites],
    choose: chooseQuery,
    scrollTo: ref,
  });

  return (
    <div
      className="grid gap-5 py-6 px-6 scrollbar-thin scrollbar-track-neutral-focus   scrollbar-thumb-base-100 "
      ref={ref}
    >
      {recents.length >= 1 && <Recents active={activeRecent} />}
      {favorites.length >= 1 && <Favorites active={activeFavorite} />}
    </div>
  );
};

export default NoQuery;
