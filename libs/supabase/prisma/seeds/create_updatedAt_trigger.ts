import { PrismaClient } from '@prisma/client';
import { allModels } from '../models';

async function makeFunction(prisma) {
  await prisma.$executeRaw`
                    CREATE EXTENSION IF NOT EXISTS moddatetime SCHEMA public;
            `;
}

async function makeTrigger(prisma: PrismaClient, tableName: string) {
  await prisma.$executeRawUnsafe(`
                    CREATE OR REPLACE TRIGGER update_updatedAt_trigger
                    BEFORE UPDATE OR INSERT ON public."${tableName}"
                    FOR EACH ROW
                    EXECUTE PROCEDURE moddatetime("updatedAt");
                `);
}

export async function create_updatedAt(prisma: PrismaClient) {
  await makeFunction(prisma);
  await makeUpdatedAtTriggers(prisma)
}


async function makeUpdatedAtTriggers(prisma: PrismaClient) {
  for (const entity of allModels) {
    await makeTrigger(prisma, entity);
  }
}