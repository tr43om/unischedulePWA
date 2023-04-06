import { OmsuGroupType, OmsuProfessorType } from "@/types";

import { fetcher } from "@/utils";
import type { SWRConfiguration } from "swr";
import { useFormattedGroups } from "./useFormattedGroups";
import { useSWRWithFallbackData } from "./useSWRWithFallbackData";

type InitialDataType = {
  groups: OmsuGroupType[];
  professors: OmsuProfessorType[];
};

export const useGroups = (config?: SWRConfiguration) => {
  const defaultOptions: SWRConfiguration = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,

    ...config,
  };
  const { data, isLoading, error } = useSWRWithFallbackData<
    OmsuGroupType[] | InitialDataType
  >("../api/groups", fetcher, defaultOptions);

  const groupsData = data && "groups" in data ? data.groups : data;

  const { groups } = useFormattedGroups(groupsData);

  return { groups, isLoading, error };
};
