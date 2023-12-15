import { Subject } from 'libs/syllabus/src/types';

export type SubjectGetRequest = {
  subjectId: string;
};

export type SubjectGetResponse = Subject;
