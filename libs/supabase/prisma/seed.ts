import { PrismaClient } from '@prisma/client';
import { create_profile_on_signup } from './seeds/create_profile_on_signup';
import { create_check_mobile_exists } from './seeds/check_mobile_exists';
import { seedRLSPolicies } from './seeds/rls_policies';

const prisma = new PrismaClient();

async function main() {
  await create_profile_on_signup(prisma);
  await create_check_mobile_exists(prisma);
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
