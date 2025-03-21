/*
  Warnings:

  - Added the required column `description` to the `BarbershopService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BarbershopService" ADD COLUMN     "description" TEXT NOT NULL;
