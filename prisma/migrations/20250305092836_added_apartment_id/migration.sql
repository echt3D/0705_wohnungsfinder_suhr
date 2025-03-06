/*
  Warnings:

  - Added the required column `apartmentId` to the `Apartment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Apartment" ADD COLUMN     "apartmentId" TEXT NOT NULL;
