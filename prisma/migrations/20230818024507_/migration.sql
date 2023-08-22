-- DropForeignKey
ALTER TABLE "PricesBetweenStops" DROP CONSTRAINT "PricesBetweenStops_tripStopId_fkey";

-- DropForeignKey
ALTER TABLE "TripStops" DROP CONSTRAINT "TripStops_cityIdFromTo_fkey";

-- AddForeignKey
ALTER TABLE "PricesBetweenStops" ADD CONSTRAINT "PricesBetweenStops_tripStopId_fkey" FOREIGN KEY ("tripStopId") REFERENCES "TripStops"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripStops" ADD CONSTRAINT "TripStops_cityIdFromTo_fkey" FOREIGN KEY ("cityIdFromTo") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
