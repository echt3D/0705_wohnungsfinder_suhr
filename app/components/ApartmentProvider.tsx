"use client";
import { ApartmentContext } from "../utils/createContext";
import { useState, useEffect } from "react";
import { Apartment } from "../utils/types";

const ApartmentProvider = ({ children }: { children: React.ReactNode }) => {
  const [apartments, setApartments] = useState<Apartment[] | []>([]);
  const [hoveredApartment, setHoveredApartment] = useState<Apartment | null>(
    null
  );
  const [visu, setVisu] = useState<number>(1002);
  const [space, setSpace] = useState<number[] | number>([0, 0]);
  const [rentalPrice, setRentalPrice] = useState<number[] | number>([0, 0]);
  const [sortDirection, setSortDirection] = useState<string>("descendent");

  useEffect(() => {
    fetch("/api/get-all-apartments")
      .then((res) => res.json())
      .then((data) => setApartments(data.data));
  }, []);

  useEffect(() => {
    if (apartments && apartments.length > 0) {
      const minMaxSpace = getMinMax("area");
      const minMaxRentalPrice = getMinMax("rentalPrice");
      setSpace(minMaxSpace);
      setRentalPrice(minMaxRentalPrice);
    }
  }, [apartments]);

  const getMinMax = (category: string): number[] => {
    if (!apartments || apartments.length === 0) {
      return [0, 0];
    }
    [...(apartments || [])].sort(
      (apartment1: Apartment, apartment2: Apartment) => {
        const valueA = Number(apartment1[category as keyof Apartment]) || 0;
        const valueB = Number(apartment2[category as keyof Apartment]) || 0;
        return valueA - valueB;
      }
    );
    const min = apartments?.[0][category as keyof Apartment] as number;
    const max = apartments?.[apartments.length - 1][
      category as keyof Apartment
    ] as number;
    return [min, max];
  };

  const sortByMethod = (
    apartments: Apartment[] | [],
    method: string,
    direction: string
  ) => {
    const sortedApartments = apartments.sort(
      (apartmentA: Apartment, apartmentB: Apartment) => {
        const valueA = Number(apartmentA[method as keyof Apartment]) || 0;
        const valueB = Number(apartmentB[method as keyof Apartment]) || 0;
        if (direction === "descendent") return valueB - valueA;
        if (direction === "ascendent") return valueA - valueB;
        return 0;
      }
    );

    setApartments(sortedApartments);
  };

  const value = {
    apartments,
    setApartments,
    hoveredApartment,
    setHoveredApartment,
    getMinMax,
    visu,
    setVisu,
    space,
    setSpace,
    rentalPrice,
    setRentalPrice,
    sortDirection,
    setSortDirection,
    sortByMethod,
  };

  return (
    <ApartmentContext.Provider value={value}>
      {children}
    </ApartmentContext.Provider>
  );
};

export default ApartmentProvider;
