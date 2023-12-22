import { AuthOtpResponse } from '@supabase/supabase-js';

export type LoginWithMobileRequest = {
  mobile: string;
};

export type LoginWithMobileResponse = AuthOtpResponse['data'];
