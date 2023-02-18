import fuzzysort from "fuzzysort";
import {
  useMemo,
  useCallback,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { debounce } from "throttle-debounce";

interface FuzzyOptions extends Fuzzysort.KeyOptions {
  highlight?: boolean;
}

export const useFuzzy = <T extends { id: number }>(
  list: T[],
  options: Fuzzysort.KeyOptions
): {
  hits: Fuzzysort.KeyResults<T>;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  setQuery: debounce<Dispatch<SetStateAction<string>>>;
} => {
  // defining our query state in there directly
  const [query, updateQuery] = useState("");

  const hits = useMemo(
    () => fuzzysort.go(query, list, options),
    [query, options, list]
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
