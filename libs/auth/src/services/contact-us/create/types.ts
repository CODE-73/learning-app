export type ContactUsInsertRequest = {
  type?: string;
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
};

export type ContactUsInsertResponse = {
  success: boolean;
};
