import { Timestamp } from "firebase/firestore";

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
