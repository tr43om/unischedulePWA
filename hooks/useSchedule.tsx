import { OmsuGroupType } from "@/types";
import {
  CollectionReference,
  collection,
  orderBy,
  query,
  where,
  collectionGroup,
  Query,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { OmsuScheduleType } from "../types/index";

export const useSchedule = (group: string, day: string) => {
  const path = `omsu-schedule/${group}/${day}`;
  const reference = collection(db, path) as CollectionReference<
    OmsuScheduleType[]
  >;

  console.log(path);

  const [schedule, isLoading, error] = useCollectionDataOnce(reference);

  return { schedule, isLoading, error };
};
