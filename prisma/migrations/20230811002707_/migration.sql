/*
  Warnings:

  - You are about to drop the column `description` on the `Driver` table. All the data in the column will be lost.
  - Added the required column `description` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "description" TEXT NOT NULL;
