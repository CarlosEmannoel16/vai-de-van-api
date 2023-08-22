/*
  Warnings:

  - Changed the type of `tripStopOrder` on the `TripStops` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TripStops" DROP COLUMN "tripStopOrder",
ADD COLUMN     "tripStopOrder" INTEGER NOT NULL;
