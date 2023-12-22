import { PrismaClient } from '@prisma/client';
import { create_profile_on_signup } from './seeds/create_profile_on_signup';
import { create_get_user_by_mobile } from './seeds/get_user_by_mobile';

const prisma = new PrismaClient();

async function main() {
  await create_profile_on_signup(prisma);
  await create_get_user_by_mobile(prisma);
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
