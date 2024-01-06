import { LearningAppSupabase } from '@learning-app/supabase';
import { ContactUsInsertRequest, ContactUsInsertResponse } from './types';

export async function contactUsCreate(
  supabase: LearningAppSupabase,
  params: ContactUsInsertRequest
): Promise<ContactUsInsertResponse> {
  const { error } = await supabase.from('ContactUs').insert([params]);

  if (error) {
    throw error;
  }

  return {
    success: true,
  };
}
