/*
  Warnings:

  - You are about to drop the column `idOrigin` on the `PricesBetweenStops` table. All the data in the column will be lost.
  - You are about to drop the column `tripStopsId` on the `PricesBetweenStops` table. All the data in the column will be lost.
  - Made the column `tripStopId` on table `PricesBetweenStops` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "PricesBetweenStops" DROP CONSTRAINT "PricesBetweenStops_tripStopsId_fkey";

-- AlterTable
ALTER TABLE "PricesBetweenStops" DROP COLUMN "idOrigin",
DROP COLUMN "tripStopsId",
ALTER COLUMN "tripStopId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "PricesBetweenStops" ADD CONSTRAINT "PricesBetweenStops_tripStopId_fkey" FOREIGN KEY ("tripStopId") REFERENCES "TripStops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
