-- DropForeignKey
ALTER TABLE "Route" DROP CONSTRAINT "Route_id_fkey";

-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "kmValue" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "PricesBetweenStops" (
    "id" TEXT NOT NULL,
    "idOrigin" TEXT NOT NULL,
    "idDestiny" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PricesBetweenStops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripStops" (
    "id" TEXT NOT NULL,
    "cityIdFromTo" TEXT NOT NULL,
    "travelId" TEXT NOT NULL,
    "tripStopOrder" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TripStops_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PricesBetweenStops" ADD CONSTRAINT "PricesBetweenStops_idOrigin_fkey" FOREIGN KEY ("idOrigin") REFERENCES "TripStops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricesBetweenStops" ADD CONSTRAINT "PricesBetweenStops_idDestiny_fkey" FOREIGN KEY ("idDestiny") REFERENCES "TripStops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripStops" ADD CONSTRAINT "TripStops_cityIdFromTo_fkey" FOREIGN KEY ("cityIdFromTo") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripStops" ADD CONSTRAINT "TripStops_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
