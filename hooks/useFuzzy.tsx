import { useSearchStore } from "@/zustandStore";
import fuzzysort from "fuzzysort";
import {
  useMemo,
  useCallback,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { debounce } from "throttle-debounce";

interface FuzzyOptions extends Fuzzysort.KeyOptions {}

export const useFuzzy = <T extends { id: number }>(
  lists: T[][],
  options: FuzzyOptions
): {
  hits: Fuzzysort.KeyResults<T>[];
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  setQuery: debounce<Dispatch<SetStateAction<string>>>;
} => {
  const query = useSearchStore((state) => state.query);
  const updateQuery = useSearchStore((state) => state.setQuery);
  // defining our query state in there directly
  // const [query, updateQuery] = useState("");

  const hits = useMemo(
    () => lists.map((list) => fuzzysort.go(query, list, options)),
    [query, options, lists]
  );

  // debounce updateQuery and rename it `setQuery` so it's transparent
  const setQuery = debounce(100, updateQuery);

  // pass a handling helper to speed up implementation
  const onSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value.trim()),
    [setQuery]
  );

  return {
    hits,
    onSearch,
    query,
    setQuery,
  };
};
