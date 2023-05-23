/*
  Warnings:

  - You are about to drop the column `idDriver` on the `Travel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Travel" DROP CONSTRAINT "Travel_driverId_fkey";

-- AlterTable
ALTER TABLE "Travel" DROP COLUMN "idDriver",
ALTER COLUMN "driverId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;
