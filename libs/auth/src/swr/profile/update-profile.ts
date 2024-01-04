import { useSWRConfig } from 'swr';
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
import { getUseProfileKey } from './get';

export const useUpdateProfile = () => {
  const supabase = useSupabaseClient();
  const { mutate } = useSWRConfig();

  const key = [AuthSWRKeys.PROFILE, AuthSWRKeys.UPDATE];
  const { onSuccess: clearCacheOnSuccess } = useClearCacheOnSuccess(
    AuthSWRKeys.PROFILE
  );

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
    {
      onSuccess(data) {
        clearCacheOnSuccess();
        mutate(getUseProfileKey(data.id), null, {
          optimisticData: {
            ...data,
          },
          revalidate: true,
        });
      },
    }
  );
};
