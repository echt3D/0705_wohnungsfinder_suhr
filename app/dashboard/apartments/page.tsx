"use client";
import ApartmentsMain from "../../components/ApartmentsMain";
import ApartmentStatusBlock from "@/app/components/ApartmentStatusBlock";
import DocumentBlockFull from "../../components/DocumentBlockFull";
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
      <DocumentBlockFull />
    </>
  );
};

export default Apartments;
