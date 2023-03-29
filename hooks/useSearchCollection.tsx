import { OmsuGroupType, OmsuProfessorType } from "@/types";
import {
  transformGroupsCollection,
  transformProfessorsCollection,
} from "@/utils";

import axios from "axios";
import * as _ from "lodash";
import { useEffect, useState } from "react";

export const useSearchCollection = () => {
  const [professors, setProfessors] = useState<OmsuProfessorType[]>([]);
  const [groups, setGroups] = useState<OmsuGroupType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const groupsRes = axios<OmsuGroupType[]>("../api/groups");
      const professorsRes = axios<OmsuProfessorType[]>("../api/professors");

      const [groups, professors] = await Promise.all([
        groupsRes,
        professorsRes,
      ]);

      setProfessors(professors.data);
      setGroups(groups.data);
      setLoading(false);
    })();
  }, []);

  return {
    professors: transformProfessorsCollection(professors),
    groups: transformGroupsCollection(groups),
    loading,
  };
};
