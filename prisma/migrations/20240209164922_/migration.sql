/*
  Warnings:

  - You are about to drop the column `cityid` on the `TripStops` table. All the data in the column will be lost.
  - You are about to drop the column `cityId` on the `Views` table. All the data in the column will be lost.
  - Added the required column `stopId` to the `TripStops` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stopId` to the `Views` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TripStops" DROP CONSTRAINT "TripStops_cityid_fkey";

-- DropForeignKey
ALTER TABLE "Views" DROP CONSTRAINT "Views_cityId_fkey";

-- AlterTable
ALTER TABLE "TripStops" DROP COLUMN "cityid",
ADD COLUMN     "stopId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Views" DROP COLUMN "cityId",
ADD COLUMN     "stopId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TripStops" ADD CONSTRAINT "TripStops_stopId_fkey" FOREIGN KEY ("stopId") REFERENCES "Stop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Views" ADD CONSTRAINT "Views_stopId_fkey" FOREIGN KEY ("stopId") REFERENCES "Stop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
