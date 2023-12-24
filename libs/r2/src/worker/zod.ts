import { z } from 'zod';

export const RequestSchema = z.object({
  requestType: z.union([
    z.literal('GET'),
    z.literal('UPLOAD_SMALL'),
    z.literal('UPLOAD_BIG'),
    z.literal('GET_HLS_PLAYLIST'),
  ]),
  key: z.string().min(1),
  expiresIn: z.number().int().gt(0).optional().default(3600),
});

export type BucketManagerArgs = z.infer<typeof RequestSchema>;
