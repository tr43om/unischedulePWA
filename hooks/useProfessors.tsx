import { OmsuGroupType, OmsuProfessorType } from "@/types";

import useSwr from "swr";
import { fetcher } from "@/utils";
import * as _ from "lodash";
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
  const { data, isLoading, error } = useSwr<
    OmsuProfessorType[] | InitialDataType
  >("../api/professors", fetcher, defaultOptions);

  const professorsData = data && "professors" in data ? data.professors : data;

  const professors = _.sortBy(professorsData, "name");

  return { professors, isLoading, error };
};
