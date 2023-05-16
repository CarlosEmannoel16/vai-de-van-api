/*
  Warnings:

  - You are about to drop the column `amount_of_accents` on the `SubRoute` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[originId]` on the table `SubRoute` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `travelId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arrival_time` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `km` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originId` to the `SubRoute` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "travelId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "arrival_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "km" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RouteOnCities" ADD COLUMN     "subRouteId" TEXT;

-- AlterTable
ALTER TABLE "SubRoute" DROP COLUMN "amount_of_accents",
ADD COLUMN     "originId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Travel" (
    "id" TEXT NOT NULL,
    "idVechicle" TEXT NOT NULL,
    "idDriver" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,

    CONSTRAINT "Travel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubRoute_originId_key" ON "SubRoute"("originId");

-- AddForeignKey
ALTER TABLE "SubRoute" ADD CONSTRAINT "SubRoute_originId_fkey" FOREIGN KEY ("originId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_idVechicle_fkey" FOREIGN KEY ("idVechicle") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteOnCities" ADD CONSTRAINT "RouteOnCities_subRouteId_fkey" FOREIGN KEY ("subRouteId") REFERENCES "SubRoute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
