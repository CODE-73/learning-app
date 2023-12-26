import { makeSignedURL } from '../make-signed-url';
import { UploadFileRequest, FileUploadEvent } from './types';
import { EventIterator } from 'event-iterator';

export async function uploadFile({
  key,
  isBigFile,
  fileContents,
}: UploadFileRequest) {
  console.info('Starting Upload', { key, isBigFile, fileContents });
  const url = await makeSignedURL({
    requestType: isBigFile ? 'UPLOAD_BIG' : 'UPLOAD_SMALL',
    key,
    expiresIn: isBigFile ? 28800 : 3600,
  });

  return new EventIterator<FileUploadEvent>(({ push, stop, fail }) => {
    const xhr = new XMLHttpRequest();

    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', getContentType(fileContents));
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 10000) / 100;
        push({ key, progress, uploadDone: false });
      }
    };

    xhr.send(fileContents);
    xhr.onload = () => {
      if (xhr.status === 200) {
        push({ key, progress: 100, uploadDone: true });
        stop();
      } else {
        fail(new Error('Failed to upload file'));
      }
    };

    return () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        // Cancel the upload if it's still in progress
        xhr.abort();
      }
    };
  });
}

function getContentType(file: Blob | Buffer) {
  let fileType = 'application/octet-stream';
  if ('type' in file) {
    fileType = file.type;
  }

  return fileType;
}
