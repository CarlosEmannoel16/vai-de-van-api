/*
  Warnings:

  - You are about to drop the column `modelId` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the `ModelVehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_modelId_fkey";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "modelId";

-- DropTable
DROP TABLE "ModelVehicle";
