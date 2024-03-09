import { PrismaClient } from '@prisma/client';
import { allModels } from '../models';

async function makeFunction(prisma) {
  await prisma.$executeRaw`
                CREATE OR REPLACE FUNCTION public.update_createdBy()
                RETURNS trigger AS $$
                  BEGIN
                    NEW.createdBy := auth.uid();
                  RETURN NEW;
                  END;
                $$
                LANGUAGE plpgsql
                SECURITY definer SET search_path = public;
            `;
}

async function makeTrigger(prisma: PrismaClient, tableName: string) {
  await prisma.$executeRawUnsafe(`
                    CREATE OR REPLACE TRIGGER update_createdBy_trigger
                    BEFORE INSERT ON public."${tableName}"
                    FOR EACH ROW
                    EXECUTE PROCEDURE public.update_createdBy();
                `);
}

export async function create_createdBy(prisma: PrismaClient) {
  await makeFunction(prisma);
  await makeCreatedByTriggers(prisma)
}


async function makeCreatedByTriggers(prisma: PrismaClient) {
  for (const entity of allModels) {    
    await makeTrigger(prisma, entity);
  }
}