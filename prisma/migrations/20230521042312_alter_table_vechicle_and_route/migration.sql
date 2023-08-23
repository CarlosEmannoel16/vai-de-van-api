/*
  Warnings:

  - You are about to drop the column `VehicleId` on the `Route` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Route" DROP CONSTRAINT "Route_VehicleId_fkey";

-- AlterTable
ALTER TABLE "Route" DROP COLUMN "VehicleId";
