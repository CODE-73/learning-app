import { z } from 'zod';
import {
  isValidMobileNumber,
  validatePhone,
  extractINPhoneNumber,
} from '../_shared/phone.ts';

export const MobileSchema = z
  .string()
  .min(1, 'Mobile is required')
  .refine((v) => isValidMobileNumber(v), {
    message: 'Invalid mobile number',
  })
  .transform((v) => validatePhone(v));

export const IndianMobileSchema = MobileSchema.refine(
  (v) => extractINPhoneNumber(v) !== null,
  {
    message: 'Invalid IN mobile number',
  }
);
