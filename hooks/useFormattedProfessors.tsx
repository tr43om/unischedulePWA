import { OmsuProfessorType } from "@/types";

import { sortBy } from "lodash";

export const useFormattedProfessors = (
  data: OmsuProfessorType[] | undefined
) => {
  const professors = sortBy(data, "name");

  return { professors };
};
