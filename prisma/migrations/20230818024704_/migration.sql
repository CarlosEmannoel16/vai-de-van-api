-- DropForeignKey
ALTER TABLE "TripStops" DROP CONSTRAINT "TripStops_travelId_fkey";

-- AddForeignKey
ALTER TABLE "TripStops" ADD CONSTRAINT "TripStops_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
