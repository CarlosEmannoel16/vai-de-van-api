/*
  Warnings:

  - You are about to drop the column `cnh` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cnhDateOfIssue` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cnhExpirationDate` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "cnh",
DROP COLUMN "cnhDateOfIssue",
DROP COLUMN "cnhExpirationDate";
