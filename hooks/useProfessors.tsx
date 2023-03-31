<<<<<<< HEAD
import { OmsuGroupType, OmsuProfessorType } from "@/types";
=======
import { OmsuProfessorType } from "@/types";
>>>>>>> master

import useSwr from "swr";
import { fetcher } from "@/utils";
import * as _ from "lodash";
<<<<<<< HEAD
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
=======

export const useProfessors = () => {
  const { data, isLoading, error } = useSwr<OmsuProfessorType[]>(
    "../api/professors",
    fetcher,
    {
      suspense: true,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const professors = _.sortBy(data, "name");
>>>>>>> master

  return { professors, isLoading, error };
};
