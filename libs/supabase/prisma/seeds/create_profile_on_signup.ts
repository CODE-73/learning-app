import { PrismaClient } from '@prisma/client';

async function makeFunction(prisma) {
  await prisma.$executeRaw`
                CREATE OR REPLACE FUNCTION public.create_profile_on_signup()
                RETURNS trigger AS $$
                  BEGIN
  
                  INSERT INTO public."Profile"
                    (id, "firstName", "lastName", mobile, email, city, "state")
                  VALUES 
                    (NEW.id, 'John', 'Doe', NEW.phone, NEW.email, 'Calicut', 'Kerala')
                  ON CONFLICT (id) DO NOTHING;
       
                  RETURN NEW;
                  END;
                $$
                LANGUAGE plpgsql
                SECURITY definer SET search_path = public;
            `;
}

async function makeTrigger(prisma) {
  await prisma.$executeRaw`
                    CREATE OR REPLACE TRIGGER create_profile_on_signup_trigger
                    AFTER UPDATE OR INSERT ON auth.users
                    FOR EACH ROW
                    EXECUTE PROCEDURE public.create_profile_on_signup();
                `;
}

export async function create_profile_on_signup(prisma: PrismaClient) {
  await makeFunction(prisma);
  await makeTrigger(prisma);
}
