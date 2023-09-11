/*
  Warnings:

  - You are about to drop the column `college_user_id` on the `Colleges` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Colleges" DROP CONSTRAINT "Colleges_college_user_id_fkey";

-- DropIndex
DROP INDEX "Colleges_college_user_id_key";

-- AlterTable
ALTER TABLE "Colleges" DROP COLUMN "college_user_id";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "college_id" INTEGER,
ADD COLUMN     "department_id" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_college_id_fkey" FOREIGN KEY ("college_id") REFERENCES "Colleges"("college_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Departments"("dept_id") ON DELETE CASCADE ON UPDATE CASCADE;
