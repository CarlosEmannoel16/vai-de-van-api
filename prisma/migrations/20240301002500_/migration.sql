-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "emailConfirm" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "phone2" SET DEFAULT '';

-- CreateTable
CREATE TABLE "CodeEmail" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CodeEmail_pkey" PRIMARY KEY ("id")
);
