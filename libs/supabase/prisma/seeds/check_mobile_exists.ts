import { PrismaClient } from '@prisma/client';

export async function create_check_mobile_exists(prisma: PrismaClient) {
  await prisma.$executeRaw`
        CREATE OR REPLACE FUNCTION public.check_mobile_exists(mobile text)
        RETURNS BOOLEAN AS
        $$
        BEGIN
            RETURN EXISTS(SELECT 1 FROM auth.users WHERE phone = mobile);
        END;
        $$
        LANGUAGE plpgsql
        SECURITY DEFINER;
    `;
}
