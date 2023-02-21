import { OmsuScheduleType } from "@/types";
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
