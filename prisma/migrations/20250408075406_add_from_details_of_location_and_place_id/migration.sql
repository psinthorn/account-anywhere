/*
  Warnings:

  - Added the required column `fromLocation` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "fromLatitude" DOUBLE PRECISION,
ADD COLUMN     "fromLocation" TEXT NOT NULL,
ADD COLUMN     "fromLongitude" DOUBLE PRECISION,
ADD COLUMN     "fromNote" TEXT,
ADD COLUMN     "fromPlaceId" TEXT;
