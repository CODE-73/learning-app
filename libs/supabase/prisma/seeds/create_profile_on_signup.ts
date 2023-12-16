import { PrismaClient } from "@prisma/client";

async function makeFunction(prisma) {
    await prisma.$executeRaw`
                CREATE OR REPLACE FUNCTION public.create_profile_on_signup()
                RETURNS trigger AS $$
                  BEGIN
  
                    IF NOT EXISTS (SELECT 1 FROM public.profile WHERE user_id = NEW.id) THEN
                      INSERT INTO public.profile (id, mobile)
                      VALUES (NEW.id, NEW.phone);
                    END IF;
       
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