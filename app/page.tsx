"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wohnungsfinder from "./components/Wohnungsfinder";
import Navigation from "./components/Navigation";
import t from "./data/text.json";
import { Apartment } from "./utils/types";

// type Checkbox = {
//   floor: string[];
//   rooms: string[];
//   state: string[];
// };

// const initCheckbox: Checkbox = {
//   floor: [],
//   rooms: [],
//   state: [],
// };

export default function Home() {
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
  const [visu, setVisu] = useState<number>(1002);
  const [apartments, setApartments] = useState<Apartment[] | null>(null);
  const [hoveredApartment, setHoveredApartment] = useState<Apartment | null>(
    null
  );
  // const [checkbox, setCheckbox] = useState<Checkbox>(initCheckbox);
  const [space, setSpace] = useState<number[] | number>([0, 0]);
  // const [rentalPrice, setRentalPrice] = useState<number[]>([
  //   rentalPriceMinMax.min,
  //   rentalPriceMinMax.max,
  // ]);

  useEffect(() => {
    fetch("/api/get-all-apartments")
      .then((res) => res.json())
      .then((data) => setApartments(data.data));
  }, []);

  useEffect(() => {
    if (apartments && apartments.length > 0) {
      const minMaxSpace = getMinMax("area");
      setSpace(minMaxSpace);
    }
  }, [apartments]);

  const filterByRange = (
    apartments: Apartment[],
    category: string,
    min: number,
    max: number
  ) =>
    apartments.filter(
      (apartment) =>
        (apartment[category as keyof Apartment] as number) >= min &&
        (apartment[category as keyof Apartment] as number) <= max
    );

  // const filterByCheckbox = (apartments: Apartment[], category: string) => {
  //   if (checkbox?.[category as keyof Checkbox].length) {
  //     return apartments.filter((apartment) => {
  //       const targetValue = apartment?.[category as keyof Apartment];
  //       const valueString = targetValue !== null ? String(targetValue) : "";

  //       if (checkbox?.[category as keyof Checkbox].includes(valueString)) {
  //         return apartment;
  //       }
  //     });
  //   } else {
  //     return apartments;
  //   }
  // };

  const sortApartments = (
    apartments: Apartment[],
    category: string,
    direction: string
  ) => {
    const apartmentsCopy = [...apartments];

    const filteredBySpace = filterByRange(
      apartmentsCopy,
      "area",
      (space as number[])[0],
      (space as number[])[1]
    );

    // const filteredByFloor = filterByCheckbox(filteredBySpace, "floor");
    // const filteredByRooms = filterByCheckbox(filteredByFloor, "rooms");
    // const filteredByStatus = filterByCheckbox(
    //   filteredByRooms,
    //   "stateSimplyfied"
    // );
    return filteredBySpace;
  };

  return (
    <>
      <Header />
      <main className="w-screen h-desktop flex place-items-center place-content-center">
        <Sidebar
          t={t}
          apartments={apartments}
          spaceMinMax={getMinMax("area")}
          space={space}
          setSpace={setSpace}
        />
        <aside className="h-full w-desktop">
          <Wohnungsfinder
            apartments={apartments}
            hoveredApartment={hoveredApartment}
            setHoveredApartment={setHoveredApartment}
            visu={visu}
          />
          <Navigation visu={visu} setVisu={setVisu} />
        </aside>
      </main>
    </>
  );
}
