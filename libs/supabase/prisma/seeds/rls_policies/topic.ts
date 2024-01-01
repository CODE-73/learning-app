import { PrismaClient } from '@prisma/client';
import { deletePolicyIfExists } from './utils';

export const create_topic_policies = async (client: PrismaClient) => {
  /*
  Create policy
  - SELECT: Anyone can read a Topic
  - INSERT / UPDATE / DELETE: FACULTY, INTITUTE_ADMIN, SUPER ADMIN can update or delete a Topic
  */
  await deletePolicyIfExists(client, 'Topic', 'topic_read_policy');
  await deletePolicyIfExists(client, 'Topic', 'topic_policy');

  await client.$executeRaw`
  CREATE POLICY topic_read_policy ON public."Topic"
  FOR SELECT
  USING (true)
  `;
  await client.$executeRaw`
        CREATE POLICY topic_policy ON public."Topic"
        FOR ALL
        USING (
            id = auth.uid()
              OR public.is_admin_user())
        `;

  // Enable RLS
  await client.$executeRaw`
      ALTER TABLE public."Topic"
          ENABLE ROW LEVEL SECURITY`;
};
