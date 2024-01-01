import { PrismaClient } from '@prisma/client';

export const get_user_role_func = async (client: PrismaClient) => {
  await client.$executeRaw`
        CREATE OR REPLACE FUNCTION get_user_role()
            RETURNS "Role" AS
        $$
        DECLARE
            user_role "Role";
        BEGIN
            SELECT "Profile"."role" INTO user_role
                        FROM "Profile"
                        WHERE "Profile".id = auth.uid();
            
            RETURN user_role;
        END;
        $$
            LANGUAGE plpgsql
            SECURITY definer
            SET search_path = public;
    `;
};