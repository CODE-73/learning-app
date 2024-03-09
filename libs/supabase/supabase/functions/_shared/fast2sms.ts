import { extractINPhoneNumber } from './phone.ts';

export async function sendOTP(mobile: string, otp: string): Promise<boolean> {
  const _mobile = extractINPhoneNumber(mobile);
  if (!_mobile) {
    console.error('Invalid IN Mobile number');
    return false;
  }

  console.info('Sending OTP', mobile, otp);
  return true;

  const apiKey = Deno.env.get('FAST2SMS_API_KEY');

  const res = await fetch('https://www.fast2sms.com/dev/bulkV2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: apiKey ?? '',
    },
    body: JSON.stringify({
      route: 'otp',
      variables_values: otp,
      flash: 0,
      numbers: _mobile,
    }),
  });
  const data = await res.json();

  if (data.return !== true) {
    console.error({
      message: 'Failed to send OTP',
      mobile,
      otp,
      response: data,
    });
  }
  return data.return === true;
}
