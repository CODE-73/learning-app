import useSWRMutation from 'swr/mutation';
import { R2SWRKeys } from './keys';
import {
  uploadFile,
  UploadFileRequest,
  UploadFileResponse,
} from '../services/upload';

export function useR2Upload() {
  const key = [R2SWRKeys.UPLOAD];
  return useSWRMutation<
    UploadFileResponse,
    Error,
    string[] | null,
    UploadFileRequest
  >(key, (_, { arg }) => uploadFile(arg));
}
