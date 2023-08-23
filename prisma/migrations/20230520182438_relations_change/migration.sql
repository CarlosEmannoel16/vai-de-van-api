/*
  Warnings:

  - You are about to drop the column `departure_time` on the `Route` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `name_user` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `driverId` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the `RouteOnCities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RouteOnVehicle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubRoute` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `destinyId` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custumerId` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cor` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RouteOnCities" DROP CONSTRAINT "RouteOnCities_cityId_fkey";

-- DropForeignKey
ALTER TABLE "RouteOnCities" DROP CONSTRAINT "RouteOnCities_routeId_fkey";

-- DropForeignKey
ALTER TABLE "RouteOnCities" DROP CONSTRAINT "RouteOnCities_subRouteId_fkey";

-- DropForeignKey
ALTER TABLE "RouteOnVehicle" DROP CONSTRAINT "RouteOnVehicle_routeId_fkey";

-- DropForeignKey
ALTER TABLE "RouteOnVehicle" DROP CONSTRAINT "RouteOnVehicle_VehicleId_fkey";

-- DropForeignKey
ALTER TABLE "SubRoute" DROP CONSTRAINT "SubRoute_id_route_fkey";

-- DropForeignKey
ALTER TABLE "SubRoute" DROP CONSTRAINT "SubRoute_originId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_driverId_fkey";

-- AlterTable
ALTER TABLE "City" ADD COLUMN     "routeId" TEXT;

-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "cnhDateOfIssue" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "cnhExpirationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Route" DROP COLUMN "departure_time",
ADD COLUMN     "destinyId" TEXT NOT NULL,
ADD COLUMN     "VehicleId" TEXT;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "cpf",
DROP COLUMN "name_user",
ADD COLUMN     "custumerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "driverId",
ADD COLUMN     "cor" TEXT NOT NULL,
ADD COLUMN     "modelId" TEXT NOT NULL;

-- DropTable
DROP TABLE "RouteOnCities";

-- DropTable
DROP TABLE "RouteOnVehicle";

-- DropTable
DROP TABLE "SubRoute";

-- CreateTable
CREATE TABLE "ModelVehicle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ModelVehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Custumer" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "phone2" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Custumer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DriverToVehicle" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DriverToVehicle_AB_unique" ON "_DriverToVehicle"("A", "B");

-- CreateIndex
CREATE INDEX "_DriverToVehicle_B_index" ON "_DriverToVehicle"("B");

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_id_fkey" FOREIGN KEY ("id") REFERENCES "Route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_destinyId_fkey" FOREIGN KEY ("destinyId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_VehicleId_fkey" FOREIGN KEY ("VehicleId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "ModelVehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_custumerId_fkey" FOREIGN KEY ("custumerId") REFERENCES "Custumer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DriverToVehicle" ADD CONSTRAINT "_DriverToVehicle_A_fkey" FOREIGN KEY ("A") REFERENCES "Driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DriverToVehicle" ADD CONSTRAINT "_DriverToVehicle_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
