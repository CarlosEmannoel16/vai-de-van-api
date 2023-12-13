-- AlterTable
ALTER TABLE "TripStops" ADD COLUMN     "finalStop" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "initialStop" BOOLEAN NOT NULL DEFAULT false;
