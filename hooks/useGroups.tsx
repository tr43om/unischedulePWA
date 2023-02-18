import { OmsuGroupType } from "@/types";
import {
  CollectionReference,
  collection,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

export const useGroups = () => {
  const ref = query(
    collection(db, "omsu-groups"),
    orderBy("course")
  ) as CollectionReference<OmsuGroupType>;

  const [groups, isLoading, error] = useCollectionDataOnce(ref);

  return { groups, isLoading, error };
};
