/*
  Warnings:

  - The `incidentalCosts` column on the `Apartment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `rooms` column on the `Apartment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `area` column on the `Apartment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `balcony` column on the `Apartment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `loggiaArea` column on the `Apartment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `gardenSittingPlaceArea` column on the `Apartment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `terraceArea` column on the `Apartment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `basementArea` column on the `Apartment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `parkingSpaceCost` column on the `Apartment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deposit` column on the `Apartment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `reduitArea` column on the `Apartment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `rentalPrice` on the `Apartment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `rentalPriceSquaremeterNet` to the `Apartment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rentalPriceSquaremeter` to the `Apartment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floorNum` to the `Apartment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Apartment" DROP COLUMN "incidentalCosts",
ADD COLUMN     "incidentalCosts" INTEGER,
DROP COLUMN "rentalPrice",
ADD COLUMN     "rentalPrice" INTEGER NOT NULL,
DROP COLUMN "rentalPriceSquaremeterNet",
ADD COLUMN     "rentalPriceSquaremeterNet" INTEGER NOT NULL,
DROP COLUMN "rentalPriceSquaremeter",
ADD COLUMN     "rentalPriceSquaremeter" INTEGER NOT NULL,
DROP COLUMN "rooms",
ADD COLUMN     "rooms" INTEGER,
DROP COLUMN "area",
ADD COLUMN     "area" INTEGER,
DROP COLUMN "balcony",
ADD COLUMN     "balcony" INTEGER,
DROP COLUMN "loggiaArea",
ADD COLUMN     "loggiaArea" INTEGER,
DROP COLUMN "gardenSittingPlaceArea",
ADD COLUMN     "gardenSittingPlaceArea" INTEGER,
DROP COLUMN "terraceArea",
ADD COLUMN     "terraceArea" INTEGER,
DROP COLUMN "floorNum",
ADD COLUMN     "floorNum" INTEGER NOT NULL,
DROP COLUMN "basementArea",
ADD COLUMN     "basementArea" INTEGER,
DROP COLUMN "parkingSpaceCost",
ADD COLUMN     "parkingSpaceCost" INTEGER,
DROP COLUMN "deposit",
ADD COLUMN     "deposit" INTEGER,
DROP COLUMN "reduitArea",
ADD COLUMN     "reduitArea" INTEGER;
