/*
  Warnings:

  - You are about to drop the column `routeId` on the `City` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_routeId_fkey";

-- AlterTable
ALTER TABLE "City" DROP COLUMN "routeId";

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "cityId" TEXT;

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;
