import { PrismaClient } from '@prisma/client';
import { deletePolicyIfExists } from './utils';

export const create_subject_policies = async (client: PrismaClient) => {
  /*
  Create policy
  - SELECT: Anyone can read a subject
  - INSERT / UPDATE / DELETE: INTITUTE_ADMIN, SUPER ADMIN can update or delete a subject
  */
  await deletePolicyIfExists(client, 'Subject', 'subject_read_policy');
  await deletePolicyIfExists(client, 'Subject', 'subject_policy');

  await client.$executeRaw`
  CREATE POLICY subject_read_policy ON public."Subject"
  FOR SELECT
  USING (true)
  `;
  await client.$executeRaw`
        CREATE POLICY subject_policy ON public."Subject"
        FOR ALL
        USING
            (id = auth.uid()
              OR public.is_admin_user())
        `;

  // Enable RLS
  await client.$executeRaw`
      ALTER TABLE public."Subject"
          ENABLE ROW LEVEL SECURITY`;
};
