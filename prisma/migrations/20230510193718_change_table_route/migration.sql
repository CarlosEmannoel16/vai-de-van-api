/*
  Warnings:

  - A unique constraint covering the columns `[originId]` on the table `Route` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `originId` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "originId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Route_originId_key" ON "Route"("originId");

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_originId_fkey" FOREIGN KEY ("originId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
