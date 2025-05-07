import ApartmentsMain from "../../components/ApartmentsMain";
import DocumentBlock from "../../components/DocumentBlock";
import {
  rawApartments,
  findDuplicateApartmentIds,
} from "@/prisma/rawApartments";

const Apartments = () => {
  console.log("hi", findDuplicateApartmentIds(rawApartments));
  return (
    <>
      <ApartmentsMain />
      <DocumentBlock />
    </>
  );
};

export default Apartments;
