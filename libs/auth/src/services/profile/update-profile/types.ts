import { Profile, ProfileUpdate } from '../../../types';

export type UpdateProfileRequest = {
  profileId: string;
  data: ProfileUpdate;
};

export type UpdateProfileResponse = Profile;
