export type UploadFileRequest = {
  key: string;
  isBigFile: boolean;
  fileContents: Blob | Buffer;
};

export type FileUploadEvent = {
  key: string;
  progress: number;
  uploadDone: boolean;
};
