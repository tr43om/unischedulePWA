import { OmsuGroupType } from "@/types";

import { map } from "lodash";

export const useFormattedGroups = (data: OmsuGroupType[] | undefined) => {
  const transformedData = map(data, (group) => {
    if (group.name !== "Резерв") {
      const year = Number(group.name.split("-")[1][0]);
      const course = Number((22 - year).toString()[1]) + 1;
      return { ...group, course };
    }

    return group;
  });

  const groups = transformedData
    .sort((a, b) => {
      if (Number(a.name.split("-")[3]) && Number(b.name.split("-")[3])) {
        return Number(b.name.split("-")[3]) - Number(a.name.split("-")[3]);
      }
      return 1;
    })
    .sort((a, b) => a.course - b.course);

  return { groups };
};
