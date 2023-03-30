import { useEffect, useRef } from "react";
import useSWR, { SWRConfiguration, SWRResponse } from "swr";
import { Fetcher } from "swr";

export const useSWRWithFallbackData = <Data,>(
  key: string,
  fetcher: Fetcher<Data, typeof key>,
  options: SWRConfiguration = {}
): SWRResponse<Data, Error> => {
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  return useSWR<Data, Error>(key, fetcher, {
    ...options,
    fallbackData: hasMounted.current ? undefined : options?.fallbackData,
  });
};
