/*
  Warnings:

  - Added the required column `arrivalDate` to the `Travel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departureDate` to the `Travel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Travel" ADD COLUMN     "arrivalDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "departureDate" TIMESTAMP(3) NOT NULL;
