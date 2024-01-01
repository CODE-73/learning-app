import { PrismaClient } from '@prisma/client';

export async function deletePolicyIfExists(
  client: PrismaClient,
  tableName: string,
  policyName: string
) {
  // if tableName has schema, remove it
  if (!tableName.includes('.')) {
    tableName = `public."${tableName}"`;
  }

  await client.$executeRawUnsafe(`
      DROP POLICY IF EXISTS ${policyName} ON ${tableName}
  `);
}