/*
  Warnings:

  - You are about to drop the `_TravelToVehicle` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pricesBetweenStopsId` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idVehicle` to the `Travel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_TravelToVehicle" DROP CONSTRAINT "_TravelToVehicle_A_fkey";

-- DropForeignKey
ALTER TABLE "_TravelToVehicle" DROP CONSTRAINT "_TravelToVehicle_B_fkey";

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "pricesBetweenStopsId" TEXT;

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "pricesBetweenStopsId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Travel" ADD COLUMN     "idVehicle" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "_TravelToVehicle";

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_idVehicle_fkey" FOREIGN KEY ("idVehicle") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_pricesBetweenStopsId_fkey" FOREIGN KEY ("pricesBetweenStopsId") REFERENCES "PricesBetweenStops"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_pricesBetweenStopsId_fkey" FOREIGN KEY ("pricesBetweenStopsId") REFERENCES "PricesBetweenStops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
