-- AlterTable
ALTER TABLE "McqQuestion" ADD COLUMN     "createdById" UUID,
ADD COLUMN     "updatedById" UUID;

-- AddForeignKey
ALTER TABLE "McqQuestion" ADD CONSTRAINT "McqQuestion_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "McqQuestion" ADD CONSTRAINT "McqQuestion_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
