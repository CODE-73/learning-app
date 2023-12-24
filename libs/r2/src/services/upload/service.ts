import { makeSignedURL } from '../make-signed-url';
import { UploadFileRequest, UploadFileResponse } from './types';

export async function uploadFile({
  key,
  isBigFile,
  fileContents,
}: UploadFileRequest): Promise<UploadFileResponse> {
  const url = await makeSignedURL({
    requestType: isBigFile ? 'UPLOAD_BIG' : 'UPLOAD_SMALL',
    key,
    expiresIn: isBigFile ? 28800 : 3600,
  });

  const r = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/octet-stream',
    },
    body: fileContents,
  });

  if (!r.ok) {
    throw new Error('Failed file upload');
  }

  return key;
}
