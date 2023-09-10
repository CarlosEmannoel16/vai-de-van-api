/*
  Warnings:

  - You are about to drop the column `travelId` on the `TripStops` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TripStops" DROP CONSTRAINT "TripStops_travelId_fkey";

-- AlterTable
ALTER TABLE "TripStops" DROP COLUMN "travelId",
ADD COLUMN     "routeId" TEXT;

-- AddForeignKey
ALTER TABLE "TripStops" ADD CONSTRAINT "TripStops_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE SET NULL ON UPDATE CASCADE;
