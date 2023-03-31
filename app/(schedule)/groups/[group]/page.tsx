import { ResultsFor, Schedule, ScheduleGrid, ScheduleList } from "@/components";
import { OmsuScheduleResponse } from "@/types";
import { transformSchedule } from "@/utils";

const getGroup = async (groupID: string) => {
  const {
    data,
  }: {
    data: OmsuScheduleResponse[];
  } = await fetch(
    `https://eservice.omsu.ru/schedule/backend/schedule/group/${groupID}`,
    { next: { revalidate: 60 } }
  ).then((res) => res.json());
  return transformSchedule(data, "group");
};

const Group = async ({ params }: { params: { group: string } }) => {
  const data = await getGroup(params.group);

  return <Schedule schedule={data} />;
};

export default Group;
