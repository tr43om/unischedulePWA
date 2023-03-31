import { useState, useEffect, RefObject, useCallback } from "react";
import { useKeyPress } from "./useKeyPress";
import * as _ from "lodash";
import { debounce } from "throttle-debounce";

type UseHitsNavigationProps<T> = {
  scrollTo: RefObject<HTMLDivElement>;
  hitsList: T[][];
  choose: (query: T) => void;
};

export const useHitsNavigation = <T,>(props: UseHitsNavigationProps<T>) => {
  const hits = props.hitsList.flat();
  const [active, setActive] = useState(0);

  const [activeList, setActiveList] = useState(Array(props.hitsList.length));
  const activeHit = _.find(hits, (hit) => hits[active] === hit);
  const setList = debounce(100, setActiveList);
  const setDebouncedActive = debounce(100, setActive);

  const scrollToHit = useCallback(() => {
    if (!props.scrollTo?.current || !props.scrollTo.current.parentElement)
      return;

    props.scrollTo.current.parentElement.scrollTo({
      top: (props.scrollTo.current.offsetHeight / hits.length) * active,
      behavior: "smooth",
    });
  }, [active]);

  useEffect(() => {
    scrollToHit();

    setList(
      props.hitsList.map((list, i) => {
        if (_.find(list, (el) => el === activeHit)) {
          if (props.hitsList[i - 1]) {
            return active - props.hitsList[i - 1].length;
          } else {
            return active;
          }
        } else {
          return null;
        }
      })
    );
  }, [active]);

  // Arrows navigation
  useKeyPress({
    callback: (e) => {
      e.preventDefault();

      if (active < hits.length - 1) {
        setDebouncedActive((cur) => cur + 1);
      } else if (active === hits.length - 1) {
        setDebouncedActive(0);
      }
    },
    keys: ["ArrowDown"],
  });

  useKeyPress({
    callback: (e) => {
      e.preventDefault();

      if (active > 0) {
        setDebouncedActive((cur) => cur - 1);
      } else if (active === 0) {
        setDebouncedActive(hits.length - 1);
      }
    },

    keys: ["ArrowUp"],
  });

  return {
    activeList,
    activeHit,
  };
};
