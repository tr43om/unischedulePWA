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
import useSwr from "swr";
import { fetcher } from "@/utils";

export const useSchedule = (groupID: number) => {
  const {
    data: schedule,
    isLoading,
    error,
  } = useSwr<{ data: OmsuScheduleType[] }>(`/api/schedule/${groupID}`, fetcher);

  return { schedule, isLoading, error };
};
