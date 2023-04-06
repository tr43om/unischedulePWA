import { OmsuGroupType, OmsuProfessorType } from "@/types";

import { fetcher } from "@/utils";
import { sortBy } from "lodash";
import type { SWRConfiguration } from "swr";
import { useSWRWithFallbackData } from "./useSWRWithFallbackData";

type InitialDataType = {
  groups: OmsuGroupType[];
  professors: OmsuProfessorType[];
};

export const useProfessors = (config?: SWRConfiguration) => {
  const defaultOptions: SWRConfiguration = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    ...config,
  };
  const { data, isLoading, error } = useSWRWithFallbackData<
    OmsuProfessorType[] | InitialDataType
  >("../api/professors", fetcher, defaultOptions);

  const professorsData = data && "professors" in data ? data.professors : data;

  const professors = sortBy(professorsData, "name");

  return { professors, isLoading, error };
};
