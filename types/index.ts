import { Timestamp } from "firebase/firestore";

export type GroupType = {
  course: number;
  degree: string;
  faculty: string;
  formOfEducation: string;
  id: string;
  name: string;
};

export type ProfessorResponseType = {
  firstname: string;
  surname: string;
  patronym: string;
  PFP_URL: string;
  PFP_THUMBNAIL_URL: string;
  shortname: string;
  fullname: string;
  documentID: string;
};

export type ProfessorsAndAuditoriesType = {
  auditory: string;
  professor: ProfessorResponseType;
};

export type ScheduleType = {
  weekday: string;
  professorsAndAuditories: ProfessorsAndAuditoriesType[];
  subject: string;
  lessonStarts: Timestamp;
  lessonEnds: Timestamp;
  id: string;
  week: string;
};

export type OmsuScheduleResponse = {
  id: number;
  day: string;
  week: number;
  time: number;
  lesson: string;
  type_work: "Лаб" | "Лек";
  lesson_id: number;
  teacher: string;

  teacher_id: number;
  auditCorps: string;
  group: string;
  group_id: number;

  auditory_id: number;
};

export interface OmsuScheduleDto
  extends Pick<OmsuScheduleResponse, "week" | "lesson" | "lesson_id" | "id"> {
  professors: {
    name: string;
    id: number;
  }[];
  groups: {
    name: string;
    id: number;
  }[];
  auditories: {
    name: string;
    id: number;
  }[];
  startsAt: string;
  type: string;
  endsAt: string;
}

export type OmsuGroupType = {
  id: number;
  name: string;
  course: number;
};

export type OmsuProfessorType = {
  id: number;
  name: string;
};
