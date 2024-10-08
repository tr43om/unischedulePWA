import { NoSchedule, ResultsFor, Schedule, ScheduleList } from "@/components";
import { OmsuScheduleResponse } from "@/types";
import { transformSchedule } from "@/utils";

const getProfessor = async (professorID: string) => {
  try {
    const {
      data,
    }: {
      data: OmsuScheduleResponse[];
    } = await fetch(
      `https://eservice.omsu.ru/schedule/backend/schedule/tutor/${professorID}`,

      { next: { revalidate: 60 } }
    ).then((res) => res.json());

    const schedule = transformSchedule(data, "professor");
    if (!schedule.data) throw new Error("no data");
    return schedule;
  } catch (error) {
    console.log(error);
  }
};

const Professor = async ({ params }: { params: { professor: string } }) => {
  const data = await getProfessor(params.professor);

  return <Schedule schedule={data} />;
};

export default Professor;
