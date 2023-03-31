import { OmsuProfessorType } from "@/types";

import * as _ from "lodash";

export const useFormattedProfessors = (
  data: OmsuProfessorType[] | undefined
) => {
  const professors = _.sortBy(data, "name");

  return { professors };
};
