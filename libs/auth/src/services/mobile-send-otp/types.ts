
export type MobileSendOTPRequest = {
  mobile: string;
};

export type MobileSendOTPResponse = {
  isNewUser: boolean;
  mobile: string;
};
