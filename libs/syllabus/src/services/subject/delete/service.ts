import { LearningAppSupabase } from '@learning-app/supabase';
import { SubjectDeleteRequest, SubjectDeleteResponse } from './types';

export async function deleteSubject(
  supabase: LearningAppSupabase,
  params: SubjectDeleteRequest
): Promise<SubjectDeleteResponse> {
  const { subjectId } = params;
  const query = supabase
    .from('Subject')
    .delete({ count: 'exact' })
    .eq('subjectId', subjectId)
    .select('*');

  const { data, error, count } = await query.single();

  if (error) {
    throw error;
  }
  return {
    count: count ?? 0,
    data: data as SubjectDeleteResponse['data'],
  };
}
