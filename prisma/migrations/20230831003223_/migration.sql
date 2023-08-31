/*
  Warnings:

  - You are about to drop the column `distanceFromLastStop` on the `City` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "City" DROP COLUMN "distanceFromLastStop";

-- AlterTable
ALTER TABLE "TripStops" ADD COLUMN     "distanceFromLastStop" INTEGER NOT NULL DEFAULT 0;
