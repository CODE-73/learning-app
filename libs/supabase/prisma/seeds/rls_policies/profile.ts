import { PrismaClient } from '@prisma/client';
import { deletePolicyIfExists } from './utils';

export const create_profile_policies = async (client: PrismaClient) => {
  /*
  Create policy
  - SELECT: Only owner can read Profile
  - INSERT / UPDATE / DELETE: No one can update or delete a Profile
  */
 await deletePolicyIfExists(client, 'Profile', 'profile_policy');
  await deletePolicyIfExists(client, 'Profile', 'profile_owner_read_policy');
  await deletePolicyIfExists(client, 'Profile', 'profile_owner_update_policy');

  await client.$executeRaw`
        CREATE POLICY profile_policy ON public."Profile"
        FOR ALL USING (false)`;

    // Allow Student to read his own Profile Info
  await client.$executeRaw`
        CREATE POLICY profile_owner_read_policy ON public."Profile"
        FOR SELECT
        USING (id = auth.uid()
              OR public.is_admin_user())
        `;

    // Allow Course Update for the Student
    await client.$executeRaw`
        CREATE POLICY profile_owner_update_policy ON public."Profile"
        FOR UPDATE
        USING (id = auth.uid()
            OR public.is_admin_user())
        `;

  // Enable RLS
  await client.$executeRaw`
    ALTER TABLE public."Profile" ENABLE ROW LEVEL SECURITY`;
};