/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Route` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Route_originId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Route_name_key" ON "Route"("name");
