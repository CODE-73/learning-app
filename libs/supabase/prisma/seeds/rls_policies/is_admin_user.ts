import { PrismaClient } from '@prisma/client';

export const is_admin_user_func = async (client: PrismaClient) => {
  await client.$executeRaw`
        CREATE OR REPLACE FUNCTION is_admin_user()
            RETURNS boolean AS
        $$
        BEGIN
            RETURN EXISTS (SELECT 1
                        FROM "Profile"
                        WHERE "Profile".id = auth.uid()
                            AND "Profile"."role" IN ('SUPER_ADMIN', 'INSTITUTE_ADMIN'));
        END;
        $$
            LANGUAGE plpgsql
            SECURITY definer
            SET search_path = public;
    `;
};