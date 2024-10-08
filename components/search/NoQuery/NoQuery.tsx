"use client";

import { useSearchStore } from "@/zustandStore";
import React, { useRef } from "react";
import { Recents, Favorites } from "@/components";
import { useHitsNavigation, useKeyPress } from "@/hooks";
import { useRouter } from "next/navigation";

const NoQuery = () => {
  const router = useRouter();
  const {
    chooseQuery,
    favorites,
    recents,
    deleteFromFavorites,
    deleteFromRecents,
    addToFavorites,
  } = useSearchStore(
    ({
      favorites,
      recents,
      chooseQuery,
      deleteFromFavorites,
      deleteFromRecents,
      addToFavorites,
    }) => {
      return {
        favorites,
        recents,
        chooseQuery,
        deleteFromFavorites,
        deleteFromRecents,
        addToFavorites,
      };
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
      {recents.length >= 1 && (
        <Recents
          active={activeRecent}
          data={recents}
          chooseRecent={chooseQuery}
          deleteRecent={deleteFromRecents}
          addToFavorites={addToFavorites}
        />
      )}
      {favorites.length >= 1 && (
        <Favorites
          active={activeFavorite}
          data={favorites}
          chooseFavorite={chooseQuery}
          deleteFavorite={deleteFromFavorites}
        />
      )}
    </div>
  );
};

export default NoQuery;
