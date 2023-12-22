export function isValidMobileNumber(phone: string): boolean {
  try {
    validatePhone(phone);
    return true;
  } catch (e) {
    return false;
  }
}

export function validatePhone(phone: string): string {
  phone = formatPhoneNumber(phone);
  if (!validateE164Format(phone)) {
    throw new Error('Invalid phone number format');
  }

  return phone;
}

// validateE164Format checks if phone number follows the E.164 format
export function validateE164Format(phone: string): boolean {
  const e164Format = /^[1-9]\d{1,14}$/;
  // match should never fail as long as regexp is valid
  const matched = phone.match(e164Format);
  return matched !== null;
}

// formatPhoneNumber removes "+" and whitespaces in a phone number
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/[+\s]/g, '');
}

export function extractINPhoneNumber(phone: string): string | null {
  phone = validatePhone(phone);
  if (phone.startsWith('+')) {
    phone = phone.substring(1);
  }
  if (phone.startsWith('91')) {
    phone = phone.substring(2);
    if (phone.length === 10) {
      return phone;
    }
  }

  return null;
}
