import Fuse from "fuse.js";
import {
  useMemo,
  useCallback,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { debounce } from "throttle-debounce";

interface FuseOptionsType<T>
  extends Fuse.IFuseOptions<T>,
    Fuse.FuseSearchOptions {}

export const useFuse = <T,>(
  list: T[],
  options: FuseOptionsType<T>
): {
  hits: Fuse.FuseResult<T>[];
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  setQuery: debounce<Dispatch<SetStateAction<string>>>;
} => {
  // defining our query state in there directly
  const [query, updateQuery] = useState("");

  // removing custom options from Fuse options object
  // NOTE: `limit` is actually a `fuse.search` option, but we merge all options for convenience
  const { limit, ...fuseOptions } = options;

  // let's memoize the fuse instance for performances
  const fuse = useMemo(() => new Fuse(list, fuseOptions), [list, fuseOptions]);

  // memoize results whenever the query or options change
  const hits = useMemo(
    // if query is empty and `matchAllOnEmptyQuery` is `true` then return all list
    // NOTE: we remap the results to match the return structure of `fuse.search()`
    () => fuse.search(query, { limit }),
    [fuse, limit, query]
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
