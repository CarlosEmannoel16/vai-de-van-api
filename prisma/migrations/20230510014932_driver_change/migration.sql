/*
  Warnings:

  - Added the required column `cnh` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUser` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "cnh" TEXT NOT NULL,
ADD COLUMN     "idUser" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "SessionUsers" (
    "idUser" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "SessionUsers_pkey" PRIMARY KEY ("idUser")
);

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
