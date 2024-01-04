import { McqQuestion, McqQuestionInsert } from '../../../types';
import { McqQuestionUpsertRequest, McqQuestionUpsertResponse } from './types';
import { LearningAppSupabase } from '@learning-app/supabase';

/**
 * Creates/updates an McqQuestion. For update to occur, the id of the mcqQuestion must be provided.
 *
 * @param supabase - The Supabase client instance
 * @param params - The mcqQuestion to upsert
 * @returns The upserted mcqQuestion
 */
export async function upsertMcqQuestion(
  supabase: LearningAppSupabase,
  params: McqQuestionUpsertRequest
): Promise<McqQuestionUpsertResponse> {
  const { newMCQs: newMcqQuestion, prevMCQs: prevMcqQuestion } = params;

  const mcqsToDelete = prevMcqQuestion
    ?.filter((mcq) => newMcqQuestion.findIndex((x) => x.id === mcq.id) === -1)
    .map((x) => x.id);

  if (mcqsToDelete.length > 0) {
    const { error } = await supabase
      .from('McqQuestion')
      .delete()
      .in('id', mcqsToDelete);
    if (error) {
      throw error;
    }
  }

  const mcqsToUpdate = newMcqQuestion.filter((x) => !!x.id);
  const mcqsToInsert = newMcqQuestion.filter((x) => !x.id);

  const _data: McqQuestion[] = [];
  for (const questions of [mcqsToInsert, mcqsToUpdate]) {
    if (questions.length > 0) {
      continue;
    }
    const { data, error } = await supabase
      .from('McqQuestion')
      .upsert(questions as McqQuestionInsert[])
      .select('*');

    if (error) {
      throw error;
    }
    _data.concat(data);
  }

  return _data;
}
