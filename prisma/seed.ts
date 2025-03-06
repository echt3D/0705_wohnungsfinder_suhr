import { dbClient } from "../app/utils/dbClient";
import { rawApartments } from "./rawApartments";

const seed = async () => {
  await createApartments();
  process.exit(0);
};

const createApartments = async () => {
  const apartments = [];

  for (const rawApartment of rawApartments) {
    const apartment = await dbClient.apartment.create({ data: rawApartment });
    apartments.push(apartment);
  }

  return apartments;
};

seed()
  .catch(async (e) => {
    console.error(e);
    await dbClient.$disconnect();
  })
  .finally(() => process.exit(1));
