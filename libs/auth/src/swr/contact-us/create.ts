import useSWRMutation from 'swr/mutation';
import {
  ContactUsInsertRequest,
  ContactUsInsertResponse,
  contactUsCreate,
} from '../../services/contact-us/create';
import { ContactUsSWRKeys } from './keys';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export function useContactUsCreate() {
  const supabase = useSupabaseClient();
  const key = [ContactUsSWRKeys.CREATE];
  return useSWRMutation<
    ContactUsInsertResponse,
    Error,
    string[],
    ContactUsInsertRequest
  >(key, (key, { arg }) => contactUsCreate(supabase, arg));
}
