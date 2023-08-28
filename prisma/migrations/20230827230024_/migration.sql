/*
  Warnings:

  - You are about to drop the column `cityIdDestiny` on the `TripStops` table. All the data in the column will be lost.
  - You are about to drop the column `cityIdOrigin` on the `TripStops` table. All the data in the column will be lost.
  - Added the required column `cityid` to the `TripStops` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TripStops" DROP CONSTRAINT "TripStops_cityIdDestiny_fkey";

-- DropForeignKey
ALTER TABLE "TripStops" DROP CONSTRAINT "TripStops_cityIdOrigin_fkey";

-- AlterTable
ALTER TABLE "TripStops" DROP COLUMN "cityIdDestiny",
DROP COLUMN "cityIdOrigin",
ADD COLUMN     "cityid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TripStops" ADD CONSTRAINT "TripStops_cityid_fkey" FOREIGN KEY ("cityid") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
