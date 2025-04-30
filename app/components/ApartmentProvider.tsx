"use client";
import { ApartmentContext } from "../utils/createContext";
import { useState, useEffect } from "react";
import { Apartment, FilterType } from "../utils/types";

const initFilter = {
  floor: [],
  rooms: [],
  state: [],
};

const ApartmentProvider = ({ children }: { children: React.ReactNode }) => {
  const [apartments, setApartments] = useState<Apartment[] | []>([]);
  const [hoveredApartment, setHoveredApartment] = useState<Apartment | null>(
    null
  );
  const [visu, setVisu] = useState<number>(1002);
  const [space, setSpace] = useState<number[] | number>([0, 0]);
  const [rentalPrice, setRentalPrice] = useState<number[] | number>([0, 0]);
  const [filter, setFilter] = useState<FilterType>(initFilter);

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

  const filterByCheckbox = (
    apartments: Apartment[],
    category: keyof FilterType
  ) => {
    const currentFilter = filter[category] as string[];

    if (currentFilter.length) {
      return apartments.filter((apartment) => {
        const value = apartment[category as keyof Apartment] as string;
        return currentFilter.includes(value);
      });
    } else {
      return apartments;
    }
  };

  const filterByRange = (
    apartments: Apartment[],
    category: keyof Apartment,
    min: number,
    max: number
  ) => {
    const filteredApartments = apartments.filter(
      (apartment) =>
        Number(apartment[category]) >= min && Number(apartment[category]) <= max
    );
    return filteredApartments;
  };

  const filterTargetApartments = (
    apartments: Apartment[]
    // category: keyof Apartment
    // direction: string
  ) => {
    const apartmentsCopy = [...apartments];

    const hi = space as number[];

    const filteredBySpace = filterByRange(apartmentsCopy, "area", hi[0], hi[1]);

    const filteredByFloor = filterByCheckbox(filteredBySpace, "floor");
    const filteredByRooms = filterByCheckbox(filteredByFloor, "rooms");
    const filteredByStatus = filterByCheckbox(filteredByRooms, "state");
    // const filteredByLikes = filterByLikes(filteredByStatus);

    // switch (direction) {
    //   case "descendent":
    //     filteredByLikes.sort(
    //       (apartmentA, apartmentB) =>
    //         Number(apartmentA[category]) - Number(apartmentB[category])
    //     );
    //     break;
    //   case "ascendent":
    //     filteredByLikes.sort(
    //       (apartmentA, apartmentB) =>
    //         Number(apartmentB[category]) - Number(apartmentA[category])
    //     );
    //     break;
    // }
    return filteredByStatus;
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
    filter,
    setFilter,
    filterTargetApartments,
  };

  return (
    <ApartmentContext.Provider value={value}>
      {children}
    </ApartmentContext.Provider>
  );
};

export default ApartmentProvider;
