import { LearningAppSupabase } from '@learning-app/supabase';
import { SubjectDeleteRequest, SubjectDeleteResponse } from './types';

export async function deleteSubject(
  supabase: LearningAppSupabase,
  params: SubjectDeleteRequest
): Promise<SubjectDeleteResponse> {
  const { subjectId } = params;
  const query = supabase.from('Subject').delete().eq('id', subjectId);

  const { error } = await query.single();

  if (error) {
    throw error;
  }
  return {
    success: true,
  };
}
