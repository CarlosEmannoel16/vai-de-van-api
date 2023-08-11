/*
  Warnings:

  - Added the required column `description` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Route" ALTER COLUMN "kmValue" SET DATA TYPE TEXT;
