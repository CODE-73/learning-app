import { useSupabaseClient } from '@learning-app/supabase';
import { AuthSWRKeys } from '../keys';
import useSWRMutation from 'swr/mutation';
import { useClearCacheOnSuccess } from '@learning-app/utils';

import {
  UpdateProfileRequest,
  UpdateProfileResponse,
  updateProfile,
} from '../../services/profile/update-profile';
import { PostgrestError } from '@supabase/supabase-js';

export const useUpdateProfile = () => {
  const supabase = useSupabaseClient();

  const key = [AuthSWRKeys.PROFILE, AuthSWRKeys.UPDATE];

  return useSWRMutation<
    UpdateProfileResponse,
    PostgrestError,
    string[] | null,
    UpdateProfileRequest
  >(
    key,
    (_, { arg }) =>
      updateProfile(supabase, {
        profileId: arg.profileId,
        data: {
          ...arg.data,
        },
      }),
    { ...useClearCacheOnSuccess(AuthSWRKeys.PROFILE) }
  );
};
