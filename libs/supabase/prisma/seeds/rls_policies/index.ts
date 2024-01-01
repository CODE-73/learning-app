import { PrismaClient } from '@prisma/client';
import { create_profile_policies } from './profile';
import { create_course_policies } from './course';
import { create_stage_policies } from './stage';
import { create_subject_policies } from './subject';
import { create_topic_policies } from './topic';
import { create_mcqQuestion_policies } from './mcqQuestion';
import { create_prisma_migrations_policies } from './prisma_migrations';
import { is_admin_user_func } from './is_admin_user';
import { get_user_role_func } from './get_user_role';

export const seedRLSPolicies = async (prisma: PrismaClient) => {
    await is_admin_user_func(prisma);
    await get_user_role_func(prisma);
    await create_profile_policies(prisma);
    await create_course_policies(prisma);
    await create_stage_policies(prisma);
    await create_subject_policies(prisma);
    await create_topic_policies(prisma);
    await create_mcqQuestion_policies(prisma);
    await create_prisma_migrations_policies(prisma);
};
