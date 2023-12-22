import { Session, User } from "@supabase/supabase-js";

export type MobileVerifyOTPRequest = {
  mobile: string;
  otp: string;
  fullName?: string;
};

export type MobileVerifyOTPResponse = {
  mobile: string;
  user: User;
  session: Session;
};
