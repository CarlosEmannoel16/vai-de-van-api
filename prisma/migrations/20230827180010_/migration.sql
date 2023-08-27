/*
  Warnings:

  - You are about to drop the column `cityIdFromTo` on the `TripStops` table. All the data in the column will be lost.
  - Added the required column `cityIdDestiny` to the `TripStops` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityIdOrigin` to the `TripStops` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TripStops" DROP CONSTRAINT "TripStops_cityIdFromTo_fkey";

-- AlterTable
ALTER TABLE "TripStops" DROP COLUMN "cityIdFromTo",
ADD COLUMN     "cityIdDestiny" TEXT NOT NULL,
ADD COLUMN     "cityIdOrigin" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TripStops" ADD CONSTRAINT "TripStops_cityIdDestiny_fkey" FOREIGN KEY ("cityIdDestiny") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripStops" ADD CONSTRAINT "TripStops_cityIdOrigin_fkey" FOREIGN KEY ("cityIdOrigin") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
