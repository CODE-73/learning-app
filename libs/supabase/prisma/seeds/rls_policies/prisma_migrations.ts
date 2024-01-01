import { PrismaClient } from '@prisma/client';

export const create_prisma_migrations_policies = async (client: PrismaClient) => {
  // Enable RLS
  await client.$executeRaw`
    ALTER TABLE public._prisma_migrations
      ENABLE ROW LEVEL SECURITY`;

  // // PRISMA SEEDS
  // await client.$executeRaw`
  //   ALTER TABLE public.__prisma_seeds
  //     ENABLE ROW LEVEL SECURITY`;
};
