import { PrismaClient } from '@prisma/client';
import { deletePolicyIfExists } from './utils';

export const create_mcqQuestion_policies = async (client: PrismaClient) => {
  /*
  Create policy
  - SELECT: Anyone can read a McqQuestion
  - INSERT / UPDATE / DELETE: FACULTY, INTITUTE_ADMIN, SUPER ADMIN can update or delete a McqQuestion
  */
  await deletePolicyIfExists(client, 'McqQuestion', 'mcqQuestion_read_policy');
  await deletePolicyIfExists(client, 'McqQuestion', 'mcqQuestion_policy');

  await client.$executeRaw`
  CREATE POLICY mcqQuestion_read_policy ON public."McqQuestion"
  FOR SELECT
  USING (true)
  `;
  await client.$executeRaw`
        CREATE POLICY mcqQuestion_policy ON public."McqQuestion"
        FOR ALL
        USING (
            id = auth.uid()
              OR public.is_admin_user())
        `;

  // Enable RLS
  await client.$executeRaw`
      ALTER TABLE public."McqQuestion"
          ENABLE ROW LEVEL SECURITY`;
}
