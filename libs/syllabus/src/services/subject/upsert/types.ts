import { Subject, SubjectUpsert } from 'libs/syllabus/src/types';

export type SubjectUpsertRequest = {
  input: SubjectUpsert;
};

export type SubjectUpsertResponse = Subject;
