import { AuthResponse } from '@supabase/supabase-js';

export type LoginWithEmailRequest = {
  email: string;
  password: string;
};

export type LoginWithEmailResponse = AuthResponse['data'];
