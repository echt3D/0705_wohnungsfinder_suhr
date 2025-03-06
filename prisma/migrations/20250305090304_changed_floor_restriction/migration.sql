/*
  Warnings:

  - Made the column `floor` on table `Apartment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Apartment" ALTER COLUMN "floor" SET NOT NULL;
