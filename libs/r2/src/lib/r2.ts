export function makeUploadKey(keyPrefix: string, file: File) {
  let fileName = file.name;
  const parts = file.name.split('.');
  if (parts.length > 1) {
    fileName =
      parts
        .slice(0, -1)
        .join('-')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-') +
      '.' +
      parts.slice(-1)[0];
  } else {
    fileName = file.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  }

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let nonce = '';
  for (let i = 0; i < 8; i++) {
    nonce += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return `${keyPrefix}${nonce}-${fileName}`;
}
