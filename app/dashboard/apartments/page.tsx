"use client";
import ApartmentsMain from "../../components/ApartmentsMain";
import ApartmentStatusBlock from "@/app/components/ApartmentStatusBlock";
import DocumentBlock from "../../components/DocumentBlock";
import { ApartmentContext } from "../../utils/createContext";
import ApartmentDetailsBlock from "../../components/ApartmentDetailsBlock";
import { useContext } from "react";

const Apartments = () => {
  const { apartments } = useContext(ApartmentContext);

  return (
    <>
      <ApartmentsMain apartments={apartments} />
      <ApartmentStatusBlock apartments={apartments} />
      <ApartmentDetailsBlock apartments={apartments} />
      <DocumentBlock />
    </>
  );
};

export default Apartments;
