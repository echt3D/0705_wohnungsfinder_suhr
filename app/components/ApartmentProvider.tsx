"use client";
import { ApartmentContext } from "../utils/createContext";
import { useState, useEffect, useCallback } from "react";
import { Apartment, FilterType } from "../utils/types";

const initFilter = {
  floor: [],
  rooms: [],
  state: [],
  liked: [],
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
  const [likedApartments, setLikedApartments] = useState<string[]>([]);
  const [activateLikedApartments, setActivateLikedApartments] =
    useState<boolean>(false);
  const [isDescendent, setIsDescendent] = useState<boolean>(true);
  const [sort, setSort] = useState<string | null>(null);
  const [clickedApartment, setClickedApartment] = useState<Apartment | null>(
    null
  );
  const [showSVG, setShowSVG] = useState<boolean>(true);

  const getAllApartments = async () => {
    const res = await fetch(
      "http://altemuehleevm.api.melon.market/api/v2/objects/"
    );
    const data = await res.json();
    const resTwo = await fetch(
      "http://altemuehle.api.melon.sale/api/v2/objects/"
    );
    const dataTwo = await resTwo.json();
    // const sortedData = [...data.data].sort(
    //   (apartmentA, apartmentB) => apartmentA.id - apartmentB.id
    // );

    setApartments([...data, ...dataTwo]);
  };

  useEffect(() => {
    getAllApartments();
  }, []);

  console.log("apartments", apartments);

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
    const sortedApartments = [...(apartments || [])].sort(
      (apartment1: Apartment, apartment2: Apartment) => {
        const valueA = Number(apartment1[category as keyof Apartment]) || 0;
        const valueB = Number(apartment2[category as keyof Apartment]) || 0;
        return valueA - valueB;
      }
    );

    const min = sortedApartments?.[0][category as keyof Apartment] as number;
    const max = sortedApartments?.[sortedApartments.length - 1][
      category as keyof Apartment
    ] as number;
    return [min, max];
  };

  const handleLikedApartments = useCallback(
    (apartment: string) => {
      if (likedApartments.includes(apartment)) {
        const updated = likedApartments.filter((id) => id !== apartment);
        setLikedApartments(updated);
        localStorage.setItem("likedApartments", JSON.stringify(updated));
      } else {
        const updated = [...likedApartments, apartment];
        setLikedApartments(updated);
        localStorage.setItem("likedApartments", JSON.stringify(updated));
      }
    },
    [likedApartments]
  );

  const isLikedApartment = (apartment: string) =>
    likedApartments.includes(apartment);

  useEffect(() => {
    const storedLikedApartments = localStorage.getItem("likedApartments");
    if (storedLikedApartments)
      setLikedApartments(JSON.parse(storedLikedApartments));
  }, []);

  const filterByCheckbox = (
    apartments: Apartment[],
    category: keyof FilterType
  ) => {
    const currentFilter = filter[category] as string[];
    if (currentFilter.length) {
      return apartments.filter((apartment) => {
        const value = String(apartment[category as keyof Apartment]);
        return currentFilter.includes(value);
      });
    } else {
      return apartments;
    }
  };

  const filterByLikes = (apartments: Apartment[]) => {
    if (!likedApartments.length) return apartments;
    const filteredApartments = apartments.filter((apartment: Apartment) => {
      if (likedApartments.includes(apartment.title)) return apartment;
    });
    return filteredApartments;
  };

  const filterByRange = (
    apartments: Apartment[],
    category: keyof Apartment,
    min: number,
    max: number
  ) => {
    const filteredApartments = apartments.filter((apartment) => {
      return (
        Number(apartment[category]) >= min && Number(apartment[category]) <= max
      );
    });
    return filteredApartments;
  };

  const sortApartmentsByCategory = (apartments: Apartment[]) => {
    if (!sort) return apartments;
    if (isDescendent) {
      const sortedApartments = apartments.sort(
        (apartmentA, apartmentB) =>
          Number(apartmentA[sort as keyof Apartment]) -
          Number(apartmentB[sort as keyof Apartment])
      );
      return sortedApartments;
    } else {
      const sortedApartments = apartments.sort(
        (apartmentA, apartmentB) =>
          Number(apartmentB[sort as keyof Apartment]) -
          Number(apartmentA[sort as keyof Apartment])
      );
      return sortedApartments;
    }
  };

  const filterTargetApartments = (apartments: Apartment[]) => {
    const apartmentsCopy = [...apartments];
    const spaceMinMax = space as number[];
    const rentalPriceMinMax = rentalPrice as number[];
    let targetApartments: Apartment[];

    const filteredBySpace = filterByRange(
      apartmentsCopy,
      "area",
      spaceMinMax[0],
      spaceMinMax[1]
    );

    const filteredByrentalPrice = filterByRange(
      filteredBySpace,
      "rentalPrice",
      rentalPriceMinMax[0],
      rentalPriceMinMax[1]
    );

    const filteredByFloor = filterByCheckbox(filteredByrentalPrice, "floor");
    const filteredByRooms = filterByCheckbox(filteredByFloor, "rooms");
    const filteredByStatus = filterByCheckbox(filteredByRooms, "state");
    if (activateLikedApartments) {
      targetApartments = filterByLikes(filteredByStatus);
    } else {
      targetApartments = filteredByStatus;
    }

    return sortApartmentsByCategory(targetApartments);
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
    handleLikedApartments,
    isLikedApartment,
    activateLikedApartments,
    setActivateLikedApartments,
    isDescendent,
    setIsDescendent,
    sort,
    setSort,
    clickedApartment,
    setClickedApartment,
    showSVG,
    setShowSVG,
    getAllApartments,
  };

  return (
    <ApartmentContext.Provider value={value}>
      {children}
    </ApartmentContext.Provider>
  );
};

export default ApartmentProvider;
