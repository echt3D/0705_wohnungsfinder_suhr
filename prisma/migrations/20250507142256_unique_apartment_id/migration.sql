/*
  Warnings:

  - A unique constraint covering the columns `[apartmentId]` on the table `Apartment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Apartment_apartmentId_key" ON "Apartment"("apartmentId");
