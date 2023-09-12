/*
  Warnings:

  - A unique constraint covering the columns `[college_name]` on the table `Colleges` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Colleges_college_name_key" ON "Colleges"("college_name");
