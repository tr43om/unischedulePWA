"use client";

import { useSearchStore } from "@/zustandStore";
import React, { useRef, useState } from "react";
import { Recents, Favorites } from "@/components";
<<<<<<< HEAD
import { useHitsNavigation, useKeyPress } from "@/hooks/";
import { useRouter } from "next/navigation";
=======
import { useHitsNavigation } from "@/hooks/";
>>>>>>> master

type NoQueryProps = {};

const NoQuery = () => {
<<<<<<< HEAD
  const router = useRouter();
=======
>>>>>>> master
  const { chooseQuery, favorites, recents } = useSearchStore(
    ({ favorites, recents, chooseQuery }) => {
      return { favorites, recents, chooseQuery };
    }
  );
  const ref = useRef<HTMLDivElement>(null);

  const {
    activeList: [activeRecent, activeFavorite],
<<<<<<< HEAD
    activeHit,
=======
>>>>>>> master
  } = useHitsNavigation({
    hitsList: [recents, favorites],
    choose: chooseQuery,
    scrollTo: ref,
  });

<<<<<<< HEAD
  useKeyPress({
    callback: () => {
      if (!activeHit) return;
      chooseQuery(activeHit);
      router.push(`${activeHit.type}s/${activeHit.id}`);
    },
    keys: ["Enter"],
  });

=======
>>>>>>> master
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
