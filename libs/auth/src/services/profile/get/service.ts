import { LearningAppSupabase } from '@learning-app/supabase';
import { ProfileGetRequest, ProfileGetResponse } from './types';

export async function getProfile(
  supabase: LearningAppSupabase,
  params: ProfileGetRequest
): Promise<ProfileGetResponse> {
  const { data, error } = await supabase
    .from('Profile')
    .select('*, optedCourse:Course!Profile_optedCourseId_fkey(*)')
    .match({ id: params.id })
    .single();

  if (error) {
    throw error;
  }

  return data;
}
