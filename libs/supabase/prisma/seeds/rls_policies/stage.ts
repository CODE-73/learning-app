import { PrismaClient } from '@prisma/client';
import { deletePolicyIfExists } from './utils';

export const create_stage_policies = async (client: PrismaClient) => {
  /*
  Create policy
  - SELECT: Anyone can read a Stage
  - INSERT / UPDATE / DELETE: No one can update or delete a Stage
  */
  await deletePolicyIfExists(client, 'Stage', 'stage_policy');

  await client.$executeRaw`
        CREATE POLICY stage_policy ON public."Stage"
        FOR SELECT USING (true)
        `;

  // Enable RLS
  await client.$executeRaw`
      ALTER TABLE public."Stage"
          ENABLE ROW LEVEL SECURITY`;
};
