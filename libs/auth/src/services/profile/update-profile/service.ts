import { LearningAppSupabase } from '@learning-app/supabase';
import { UpdateProfileRequest, UpdateProfileResponse } from './types';

export async function updateProfile(
  supabase: LearningAppSupabase,
  params: UpdateProfileRequest
): Promise<UpdateProfileResponse> {
  const query = supabase
    .from('Profile')
    .update({
      ...params.data,
    })
    .eq('id', params.profileId)
    .select('*');

  const { data, error } = await query.single();

  if (error) {
    throw error;
  }

  return data;
}
