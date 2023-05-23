/*
  Warnings:

  - You are about to drop the column `cityId` on the `Route` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Route" DROP CONSTRAINT "Route_cityId_fkey";

-- AlterTable
ALTER TABLE "Route" DROP COLUMN "cityId";
