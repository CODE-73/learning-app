import { PrismaClient } from '@prisma/client';
import { deletePolicyIfExists } from './utils';

export const create_course_policies = async (client: PrismaClient) => {
  /*
  Create policy
  - SELECT: Anyone can read a course
  - INSERT / UPDATE / DELETE: No one can update or delete a course
  */
  await deletePolicyIfExists(client, 'Course', 'course_policy');

  await client.$executeRaw`
        CREATE POLICY course_policy ON public."Course"
        FOR SELECT USING (true)
        `;

  // Enable RLS
  await client.$executeRaw`
      ALTER TABLE public."Course"
          ENABLE ROW LEVEL SECURITY`;
};
