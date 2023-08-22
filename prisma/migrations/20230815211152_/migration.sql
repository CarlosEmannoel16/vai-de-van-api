/*
  Warnings:

  - A unique constraint covering the columns `[idUser]` on the table `Driver` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Travel" DROP CONSTRAINT "Travel_driverId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Driver_idUser_key" ON "Driver"("idUser");

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;
