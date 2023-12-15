import { Subject } from 'libs/syllabus/src/types';

export type SubjectDeleteRequest = {
  subjectId: string;
};
export type SubjectDeleteResponse = {
  data: Subject;
  count: number;
};
