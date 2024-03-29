import { PostgrestError } from '@supabase/supabase-js';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

import useSWR from 'swr';
import { AuthSWRKeys } from '../keys';
import {
  ProfileGetRequest,
  ProfileGetResponse,
  getProfile,
} from '../../services/profile/get';

export function useProfile(params: ProfileGetRequest) {
  const supabase = useSupabaseClient();
  const key = params.id ? getUseProfileKey(params.id) : null;
  return useSWR<ProfileGetResponse, PostgrestError, string[] | null>(
    key,
    () => getProfile(supabase, params),
    {
      keepPreviousData: true,
    }
  );
}

export function getUseProfileKey(profileId: string) {
  return [AuthSWRKeys.PROFILE, AuthSWRKeys.GET, profileId];
}
