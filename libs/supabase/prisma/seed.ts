import { PrismaClient } from '@prisma/client';
import { create_profile_on_signup } from './seeds/create_profile_on_signup';
import { create_check_mobile_exists } from './seeds/check_mobile_exists';
import { seedRLSPolicies } from './seeds/rls_policies';
import { create_createdBy } from './seeds/create_createdBy_trigger';
import { create_updatedBy } from './seeds/create_updatedBy_trigger';
import { create_updatedAt } from './seeds/create_updatedAt_trigger';

const prisma = new PrismaClient();

async function main() {
  await create_profile_on_signup(prisma);
  await create_check_mobile_exists(prisma);
  await create_createdBy(prisma);
  await create_updatedAt(prisma);
  await create_updatedBy(prisma);
  await seedRLSPolicies(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
