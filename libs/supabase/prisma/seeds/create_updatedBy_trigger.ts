import { PrismaClient } from '@prisma/client';
import { allModels } from '../models';

async function makeFunction(prisma) {
  await prisma.$executeRaw`
                CREATE OR REPLACE FUNCTION public.update_updated_by()
                RETURNS trigger AS $$
                  BEGIN
                    NEW."updatedById" := auth.uid();
                  RETURN NEW;
                  END;
                $$
                LANGUAGE plpgsql
                SECURITY definer SET search_path = public;
            `;
}

async function makeTrigger(prisma: PrismaClient, tableName: string) {
  await prisma.$executeRawUnsafe(`
                    CREATE OR REPLACE TRIGGER update_updatedBy_trigger
                    BEFORE UPDATE OR INSERT ON public."${tableName}"
                    FOR EACH ROW
                    EXECUTE PROCEDURE public.update_updated_by();
                `);
}

export async function create_updatedBy(prisma: PrismaClient) {
  await makeFunction(prisma);
  await makeUpdatedByTriggers(prisma)
}


async function makeUpdatedByTriggers(prisma: PrismaClient) {
  for (const entity of allModels) {
    await makeTrigger(prisma, entity);
  }
}