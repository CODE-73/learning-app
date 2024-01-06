import { PrismaClient } from '@prisma/client';
import { deletePolicyIfExists } from './utils';

export const create_contact_us_policies = async (client: PrismaClient) => {
  /*
  Create policy
  - INSERT: Anyone can insert a ContactUs
  - READ / UPDATE / DELETE: INTITUTE_ADMIN, SUPER ADMIN can update or delete a ContactUs
  */
  await deletePolicyIfExists(client, 'ContactUs', 'contact_us_insert_policy');
  await deletePolicyIfExists(client, 'ContactUs', 'contact_us_select_policy');
  await deletePolicyIfExists(client, 'ContactUs', 'contact_us_update_policy');
  await deletePolicyIfExists(client, 'ContactUs', 'contact_us_delete_policy');

  await client.$executeRaw`
  CREATE POLICY contact_us_insert_policy ON public."ContactUs"
    FOR INSERT
    WITH CHECK (true)
  `;

  await client.$executeRaw`CREATE POLICY contact_us_select_policy ON public."ContactUs" FOR SELECT USING (id = auth.uid() OR public.is_admin_user())`;
  await client.$executeRaw`CREATE POLICY contact_us_update_policy ON public."ContactUs" FOR UPDATE USING (id = auth.uid() OR public.is_admin_user())`;
  await client.$executeRaw`CREATE POLICY contact_us_delete_policy ON public."ContactUs" FOR DELETE USING (id = auth.uid() OR public.is_admin_user())`;

  // Enable RLS
  await client.$executeRaw`
      ALTER TABLE public."ContactUs"
          ENABLE ROW LEVEL SECURITY`;
};
