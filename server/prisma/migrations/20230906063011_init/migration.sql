-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "dob" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'guest',

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Universities" (
    "uni_id" SERIAL NOT NULL,
    "uni_name" TEXT NOT NULL,
    "uni_address" TEXT NOT NULL,
    "uni_phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uni_head_id" INTEGER NOT NULL,

    CONSTRAINT "Universities_pkey" PRIMARY KEY ("uni_id")
);

-- CreateTable
CREATE TABLE "Colleges" (
    "college_id" SERIAL NOT NULL,
    "college_name" TEXT NOT NULL,
    "college_user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "university_id" INTEGER NOT NULL,

    CONSTRAINT "Colleges_pkey" PRIMARY KEY ("college_id")
);

-- CreateTable
CREATE TABLE "Departments" (
    "dept_id" SERIAL NOT NULL,
    "dept_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "college_id" INTEGER NOT NULL,

    CONSTRAINT "Departments_pkey" PRIMARY KEY ("dept_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Universities_uni_head_id_key" ON "Universities"("uni_head_id");

-- CreateIndex
CREATE UNIQUE INDEX "Colleges_college_user_id_key" ON "Colleges"("college_user_id");

-- AddForeignKey
ALTER TABLE "Universities" ADD CONSTRAINT "Universities_uni_head_id_fkey" FOREIGN KEY ("uni_head_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Colleges" ADD CONSTRAINT "Colleges_college_user_id_fkey" FOREIGN KEY ("college_user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Colleges" ADD CONSTRAINT "Colleges_university_id_fkey" FOREIGN KEY ("university_id") REFERENCES "Universities"("uni_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Departments" ADD CONSTRAINT "Departments_college_id_fkey" FOREIGN KEY ("college_id") REFERENCES "Colleges"("college_id") ON DELETE CASCADE ON UPDATE CASCADE;
