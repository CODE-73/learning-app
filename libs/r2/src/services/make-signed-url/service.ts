import { MakeSignedURLRequest, MakeSignedURLResponse } from './types';

export async function makeSignedURL(
  args: MakeSignedURLRequest
): Promise<MakeSignedURLResponse> {
  const r = await fetch(getBucketManagerURL(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...args,
    }),
  });

  if (!r.ok) {
    console.error(r);
    throw new Error('Failed fetching signed URL');
  }

  const data = await r.json();
  if (!data.success) {
    console.error(data);
    throw new Error('Failed fetching signed URL');
  }

  return data.signedURL;
}

function getBucketManagerURL() {
  return (
    process.env['NEXT_PUBLIC_BUCKET_MANAGER_URL'] ??
    process.env['EXPO_PUBLIC_BUCKET_MANAGER_URL'] ??
    ''
  );
}
