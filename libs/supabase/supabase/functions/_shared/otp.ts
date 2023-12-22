import { createHash } from "https://deno.land/std@0.110.0/node/crypto.ts";

export function generateOTP(mobile: string): string {
    const currentHour = new Date().getHours();
    const combinedString = mobile + currentHour.toString();
    const hash = createHash('sha256').update(combinedString).digest('hex');
    const otp = hash.toString().slice(0, 6);

    // Convert non-numeric characters to numbers
    const otpArray = otp.split('');
    for (let i = 0; i < otpArray.length; i++) {
        if (isNaN(parseInt(otpArray[i]))) {
            otpArray[i] = (otpArray[i].charCodeAt(0) % 10).toString();
        }
    }

    return otpArray.join('');
}

export function validateOTP(mobile: string, otp: string) {
    const expectedOTP = generateOTP(mobile);
    return otp === expectedOTP;
}
