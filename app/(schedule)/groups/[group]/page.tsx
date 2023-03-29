import Loading from "@/app/loading";
import { ResultsFor, Schedule, ScheduleGrid, ScheduleList } from "@/components";
import { GroupType, OmsuGroupType, OmsuScheduleResponse } from "@/types";
import { transformGroupsCollection, transformSchedule } from "@/utils";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const getGroup = async (groupID: string) => {
  const {
    data,
  }: {
    data: OmsuScheduleResponse[];
  } = await fetch(
    `https://eservice.omsu.ru/schedule/backend/schedule/group/${groupID}`,
    { next: { revalidate: 60 } }
  ).then((res) => res.json());

  if (!data) {
    notFound();
  }
  return transformSchedule(data, "group");
};

const Group = async ({ params }: { params: { group: string } }) => {
  const data = await getGroup(params.group);

  return (
    <Suspense fallback={<Loading />}>
      <Schedule schedule={data} />
    </Suspense>
  );
};

export default Group;
