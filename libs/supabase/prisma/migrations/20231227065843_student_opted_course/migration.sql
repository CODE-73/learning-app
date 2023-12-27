-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "optedCourseId" UUID;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_optedCourseId_fkey" FOREIGN KEY ("optedCourseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
