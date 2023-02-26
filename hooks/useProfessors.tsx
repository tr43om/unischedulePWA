import { OmsuProfessorType } from "@/types";

import useSwr from "swr";
import { fetcher } from "@/utils";
import * as _ from "lodash";

export const useProfessors = () => {
  const { data, isLoading, error } = useSwr<OmsuProfessorType[]>(
    "/professors",
    fetcher
  );

  const professors = _.sortBy(data, "name");

  return { professors, isLoading, error };
};
