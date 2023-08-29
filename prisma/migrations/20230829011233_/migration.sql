-- AddForeignKey
ALTER TABLE "PricesBetweenStops" ADD CONSTRAINT "PricesBetweenStops_idDestiny_fkey" FOREIGN KEY ("idDestiny") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
