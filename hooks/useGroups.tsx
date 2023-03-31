<<<<<<< HEAD
import { OmsuGroupType, OmsuProfessorType } from "@/types";
=======
import { OmsuGroupType } from "@/types";
>>>>>>> master

import useSwr from "swr";
import { fetcher } from "@/utils";
import * as _ from "lodash";
<<<<<<< HEAD
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
  const { data, isLoading, error } = useSwr<OmsuGroupType[] | InitialDataType>(
    "../api/groups",
    fetcher,
    defaultOptions
  );

  const groupsData = data && "groups" in data ? data.groups : data;

  const { groups } = useFormattedGroups(groupsData);
=======
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
    }
  );

  const { groups } = useFormattedGroups(data);
>>>>>>> master

  return { groups, isLoading, error };
};
