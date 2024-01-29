-- DropForeignKey
ALTER TABLE "Travel" DROP CONSTRAINT "Travel_driverId_fkey";

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;
