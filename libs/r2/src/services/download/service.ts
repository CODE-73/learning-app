import { makeSignedURL } from '../make-signed-url';
import { DownloadFileRequest, DownloadFileResponse } from './types';

export async function downloadFile({
  key,
}: DownloadFileRequest): Promise<DownloadFileResponse> {
  const url = await makeSignedURL({
    requestType: 'GET',
    key,
    expiresIn: 3600,
  });

  const r = await fetch(url);

  if (!r.ok) {
    throw new Error('Failed file download');
  }

  return await r.blob();
}
