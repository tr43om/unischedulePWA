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

export type OmsuScheduleType = {
  id: number;
  day: string;
  week: number;
  time: number;
  lesson: string;
  type_work: "Лаб" | "Лек";
  lesson_id: number;
  teacher: string;
  teacher_id: number;
  group: string;
  group_id: number;
  auditCorps: string;
  auditory_id: number;
};

export type OmsuGroupType = {
  id: number;
  name: string;
  course: number;
};
