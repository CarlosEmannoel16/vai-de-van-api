/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `ownerName` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_ownerId_fkey";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "ownerId",
ADD COLUMN     "ownerName" TEXT NOT NULL;
