<<<<<<< HEAD
import { Schedule } from "@/components";
import { OmsuScheduleResponse } from "@/types";
import { transformSchedule } from "@/utils";
import { notFound } from "next/navigation";
=======
import { ResultsFor, Schedule, ScheduleGrid, ScheduleList } from "@/components";
import { OmsuScheduleResponse } from "@/types";
import { transformSchedule } from "@/utils";
>>>>>>> master

const getGroup = async (groupID: string) => {
  const {
    data,
  }: {
    data: OmsuScheduleResponse[];
  } = await fetch(
    `https://eservice.omsu.ru/schedule/backend/schedule/group/${groupID}`,
    { next: { revalidate: 60 } }
  ).then((res) => res.json());
<<<<<<< HEAD

  if (!data) {
    notFound();
  }
=======
>>>>>>> master
  return transformSchedule(data, "group");
};

const Group = async ({ params }: { params: { group: string } }) => {
  const data = await getGroup(params.group);

  return <Schedule schedule={data} />;
};

export default Group;
