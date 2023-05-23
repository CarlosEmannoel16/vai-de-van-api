-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "travelId" TEXT;

-- AlterTable
ALTER TABLE "TripStops" ALTER COLUMN "tripStopOrder" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
