"use client";
import ApartmentsMain from "../../components/ApartmentsMain";
import ApartmentStatusBlock from "@/app/components/ApartmentStatusBlock";
import DocumentBlock from "../../components/DocumentBlock";
import { ApartmentContext } from "../../utils/createContext";
import { useContext } from "react";

const Apartments = () => {
  const { apartments } = useContext(ApartmentContext);

  return (
    <>
      <ApartmentsMain apartments={apartments} />
      <ApartmentStatusBlock apartments={apartments} />
      <DocumentBlock />
    </>
  );
};

export default Apartments;
