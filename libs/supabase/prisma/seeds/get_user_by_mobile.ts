import { PrismaClient } from '@prisma/client';

export async function create_get_user_by_mobile(prisma: PrismaClient) {
  await prisma.$executeRaw`
                CREATE OR REPLACE FUNCTION public.get_user_by_mobile(mobile text)
                RETURNS SETOF auth.users AS
                $$
                BEGIN
                    RETURN QUERY
                    SELECT 
                        -- id, email, email_confirmed_at, invited_at,
                        -- phone, phone_confirmed_at
                        -- raw_app_meta_data, raw_user_meta_data, is_super_admin,
                        -- created_at, updated_at, deleted_at
                        *
                    FROM auth.users WHERE phone = mobile;
                END;
                $$
                LANGUAGE plpgsql
                SECURITY INVOKER;
            `;
}
