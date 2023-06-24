/*
  Warnings:

  - You are about to drop the column `userId` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the `_DriverToVehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_userId_fkey";

-- DropForeignKey
ALTER TABLE "_DriverToVehicle" DROP CONSTRAINT "_DriverToVehicle_A_fkey";

-- DropForeignKey
ALTER TABLE "_DriverToVehicle" DROP CONSTRAINT "_DriverToVehicle_B_fkey";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "userId";

-- DropTable
DROP TABLE "_DriverToVehicle";

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
