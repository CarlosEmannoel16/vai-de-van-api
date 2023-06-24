/*
  Warnings:

  - You are about to drop the column `custumerId` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_custumerId_fkey";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "custumerId",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Custumer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
