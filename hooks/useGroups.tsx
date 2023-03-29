import { OmsuGroupType } from "@/types";

import useSwr from "swr";
import { fetcher } from "@/utils";
import * as _ from "lodash";
import { useFormattedGroups } from "./useFormattedGroups";

export const useGroups = () => {
  const { data, isLoading, error } = useSwr<OmsuGroupType[]>(
    "../api/groups",
    fetcher,
    {
      suspense: true,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      fallback: [],
    }
  );

  const { groups } = useFormattedGroups(data);

  return { groups, isLoading, error };
};
