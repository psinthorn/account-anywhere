/*
  Warnings:

  - Added the required column `fromAddress` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromPhone` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "fromAddress" TEXT NOT NULL,
ADD COLUMN     "fromPhone" TEXT NOT NULL;
