import { makeSignedURL } from '../make-signed-url';
import { UploadFileRequest, UploadFileResponse } from './types';

export async function uploadFile({
  key,
  isBigFile,
  fileContents,
}: UploadFileRequest): Promise<UploadFileResponse> {
  console.info('Starting Upload', { key, isBigFile, fileContents });
  const url = await makeSignedURL({
    requestType: isBigFile ? 'UPLOAD_BIG' : 'UPLOAD_SMALL',
    key,
    expiresIn: isBigFile ? 28800 : 3600,
  });

  let fileType = 'application/octet-stream';
  if ('type' in fileContents) {
    fileType = fileContents.type;
  }

  const r = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': fileType,
    },
    body: fileContents,
  });

  if (!r.ok) {
    throw new Error('Failed file upload');
  }

  return key;
}
