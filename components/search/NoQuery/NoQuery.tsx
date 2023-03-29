"use client";

import { useSearchStore } from "@/zustandStore";
import React, { useRef, useState } from "react";
import { Recents, Favorites } from "@/components";
import { useHitsNavigation, useKeyPress } from "@/hooks/";
import { useRouter } from "next/navigation";

type NoQueryProps = {};

const NoQuery = () => {
  const router = useRouter();
  const { chooseQuery, favorites, recents } = useSearchStore(
    ({ favorites, recents, chooseQuery }) => {
      return { favorites, recents, chooseQuery };
    }
  );
  const ref = useRef<HTMLDivElement>(null);

  const {
    activeList: [activeRecent, activeFavorite],
    activeHit,
  } = useHitsNavigation({
    hitsList: [recents, favorites],
    choose: chooseQuery,
    scrollTo: ref,
  });

  useKeyPress({
    callback: () => {
      if (!activeHit) return;
      chooseQuery(activeHit);
      router.push(`${activeHit.type}s/${activeHit.id}`);
    },
    keys: ["Enter"],
  });

  return (
    <div
      className="grid gap-5 py-6 px-6 scrollbar-thin scrollbar-track-gray-300    scrollbar-thumb-neutral dark:scrollbar-track-neutral-focus  dark:scrollbar-thumb-base-100 "
      ref={ref}
    >
      {recents.length >= 1 && <Recents active={activeRecent} />}
      {favorites.length >= 1 && <Favorites active={activeFavorite} />}
    </div>
  );
};

export default NoQuery;
