import { NoSchedule, ResultsFor, ScheduleList } from "@/components";
import { OmsuScheduleResponse } from "@/types";
import { transformSchedule } from "@/utils";

const getProfessor = async (professorID: string) => {
  const {
    data,
  }: {
    data: OmsuScheduleResponse[];
  } = await fetch(
    `https://eservice.omsu.ru/schedule/backend/schedule/tutor/${professorID}`,

    { next: { revalidate: 60 } }
  ).then((res) => res.json());
  return transformSchedule(data, "professor");
};

const Professor = async ({ params }: { params: { professor: string } }) => {
  const data = await getProfessor(params.professor);

  return (
    <>
      <ResultsFor resultsFor={data.scheduleFor} />

      <ScheduleList schedule={data} />
    </>
  );
};

export default Professor;
