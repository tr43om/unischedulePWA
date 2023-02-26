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
  professors: {
    name: string;
    id: number;
  }[];
  teacher_id: number;
  group: string;
  group_id: number;
  auditCorps: string;
  auditories: {
    name: string;
    id: number;
  }[];
  auditory_id: number;
};

export interface OmsuScheduleDto
  extends Pick<
    OmsuScheduleResponse,
    | "auditories"
    | "professors"
    | "week"
    | "lesson"
    | "lesson_id"
    | "id"
    | "group"
    | "group_id"
  > {
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
