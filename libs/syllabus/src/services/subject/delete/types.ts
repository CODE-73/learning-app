import { Subject } from '../../../types';

export type SubjectDeleteRequest = {
  subjectId: string;
};
export type SubjectDeleteResponse = {
  data: Subject;
  count: number;
};
