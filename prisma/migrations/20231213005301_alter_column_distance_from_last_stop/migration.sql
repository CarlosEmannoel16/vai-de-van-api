/*
  Warnings:

  - You are about to drop the column `destinyId` on the `Route` table. All the data in the column will be lost.
  - You are about to drop the column `originId` on the `Route` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Route" DROP CONSTRAINT "Route_destinyId_fkey";

-- DropForeignKey
ALTER TABLE "Route" DROP CONSTRAINT "Route_originId_fkey";

-- AlterTable
ALTER TABLE "Route" DROP COLUMN "destinyId",
DROP COLUMN "originId";

-- AlterTable
ALTER TABLE "TripStops" ALTER COLUMN "distanceFromLastStop" SET DEFAULT 0,
ALTER COLUMN "distanceFromLastStop" SET DATA TYPE DOUBLE PRECISION;
