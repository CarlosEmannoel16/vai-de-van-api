/*
  Warnings:

  - You are about to drop the column `pricesBetweenStopsId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `pricesBetweenStopsId` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the `PricesBetweenStops` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `TripStopDestiny` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TripStopOrigin` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Made the column `travelId` on table `Ticket` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_pricesBetweenStopsId_fkey";

-- DropForeignKey
ALTER TABLE "PricesBetweenStops" DROP CONSTRAINT "PricesBetweenStops_idDestiny_fkey";

-- DropForeignKey
ALTER TABLE "PricesBetweenStops" DROP CONSTRAINT "PricesBetweenStops_tripStopId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_pricesBetweenStopsId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_travelId_fkey";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "pricesBetweenStopsId";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "pricesBetweenStopsId",
ADD COLUMN     "TripStopDestiny" TEXT NOT NULL,
ADD COLUMN     "TripStopOrigin" TEXT NOT NULL,
ALTER COLUMN "travelId" SET NOT NULL;

-- DropTable
DROP TABLE "PricesBetweenStops";

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_TripStopOrigin_fkey" FOREIGN KEY ("TripStopOrigin") REFERENCES "TripStops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_TripStopDestiny_fkey" FOREIGN KEY ("TripStopDestiny") REFERENCES "TripStops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
