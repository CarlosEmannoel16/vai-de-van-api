-- DropForeignKey
ALTER TABLE "PricesBetweenStops" DROP CONSTRAINT "PricesBetweenStops_idDestiny_fkey";

-- DropForeignKey
ALTER TABLE "PricesBetweenStops" DROP CONSTRAINT "PricesBetweenStops_idOrigin_fkey";

-- AlterTable
ALTER TABLE "PricesBetweenStops" ADD COLUMN     "tripStopId" TEXT,
ADD COLUMN     "tripStopsId" TEXT;

-- AddForeignKey
ALTER TABLE "PricesBetweenStops" ADD CONSTRAINT "PricesBetweenStops_tripStopsId_fkey" FOREIGN KEY ("tripStopsId") REFERENCES "TripStops"("id") ON DELETE SET NULL ON UPDATE CASCADE;
