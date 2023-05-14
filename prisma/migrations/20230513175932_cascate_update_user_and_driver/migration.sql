-- DropForeignKey
ALTER TABLE "Driver" DROP CONSTRAINT "Driver_idUser_fkey";

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
