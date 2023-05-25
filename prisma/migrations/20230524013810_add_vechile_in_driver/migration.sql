/*
  Warnings:

  - You are about to drop the column `idVechicle` on the `Travel` table. All the data in the column will be lost.
  - Added the required column `custumerId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Travel" DROP CONSTRAINT "Travel_idVechicle_fkey";

-- AlterTable
ALTER TABLE "Travel" DROP COLUMN "idVechicle";

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "custumerId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_TravelToVehicle" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TravelToVehicle_AB_unique" ON "_TravelToVehicle"("A", "B");

-- CreateIndex
CREATE INDEX "_TravelToVehicle_B_index" ON "_TravelToVehicle"("B");

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_custumerId_fkey" FOREIGN KEY ("custumerId") REFERENCES "Custumer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TravelToVehicle" ADD CONSTRAINT "_TravelToVehicle_A_fkey" FOREIGN KEY ("A") REFERENCES "Travel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TravelToVehicle" ADD CONSTRAINT "_TravelToVehicle_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
