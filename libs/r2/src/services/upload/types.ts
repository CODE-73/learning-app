export type UploadFileRequest = {
  key: string;
  isBigFile: boolean;
  fileContents: Blob | Buffer;
};

export type UploadFileResponse = string;
