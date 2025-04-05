/*
  Warnings:

  - You are about to drop the column `serviceId` on the `Booking` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_serviceId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "serviceId",
ADD COLUMN     "serviceIds" TEXT[];

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_serviceIds_fkey" FOREIGN KEY ("serviceIds") REFERENCES "BarbershopService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
