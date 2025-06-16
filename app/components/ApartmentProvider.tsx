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
  const [rentalApartments, setRentalApartments] = useState<Apartment[] | []>(
    []
  );
  const [hoveredApartment, setHoveredApartment] = useState<Apartment | null>(
    null
  );
  const [visu, setVisu] = useState<number>(1002);
  const [space, setSpace] = useState<number[] | number>([0, 0]);
  const [rentalPrice, setRentalPrice] = useState<number[] | number>([0, 0]);
  const [filter, setFilter] = useState<FilterType>(initFilter);
  const [likedRentalApartments, setLikedRentalApartments] = useState<string[]>(
    []
  );
  const [activateLikedrentalApartments, setActivateLikedrentalApartments] =
    useState<boolean>(false);
  const [isDescendent, setIsDescendent] = useState<boolean>(true);
  const [sort, setSort] = useState<string | null>(null);
  const [clickedApartment, setClickedApartment] = useState<Apartment | null>(
    null
  );
  const [showSVG, setShowSVG] = useState<boolean>(true);

  const getAllRentalApartments = async () => {
    const res = await fetch(
      "http://altemuehleevm.api.melon.market/api/v2/objects/"
    );
    const data = await res.json();

    // const sortedData = [...data.data].sort(
    //   (apartmentA, apartmentB) => apartmentA.id - apartmentB.id
    // );
    setRentalApartments(data);
  };

  const getAllSellingApartments = async () => {
    const res = await fetch(
      "http://altemuehleevm.api.melon.market/api/v2/objects/"
    );
    const data = await res.json();

    // const sortedData = [...data.data].sort(
    //   (apartmentA, apartmentB) => apartmentA.id - apartmentB.id
    // );
    setRentalApartments(data);
  };

  useEffect(() => {
    getAllRentalApartments();
    getAllSellingApartments();
  }, []);

  useEffect(() => {
    if (rentalApartments && rentalApartments.length > 0) {
      const minMaxSpace = getMinMax("area");
      const minMaxRentalPrice = getMinMax("rentalgross");
      console.log("minMaxRentalPrice", minMaxRentalPrice);
      setSpace(minMaxSpace);
      setRentalPrice(minMaxRentalPrice);
    }
  }, [rentalApartments]);

  const getMinMax = (category: string): number[] => {
    if (!rentalApartments || rentalApartments.length === 0) {
      return [0, 0];
    }
    const sortedRentalApartments = [...(rentalApartments || [])].sort(
      (apartment1: Apartment, apartment2: Apartment) => {
        const valueA = Number(apartment1[category as keyof Apartment]) || 0;
        const valueB = Number(apartment2[category as keyof Apartment]) || 0;
        return valueA - valueB;
      }
    );

    const min = sortedRentalApartments?.[0][
      category as keyof Apartment
    ] as number;
    const max = sortedRentalApartments?.[sortedRentalApartments.length - 1][
      category as keyof Apartment
    ] as number;
    return [min, max];
  };

  const handleLikedRentalApartments = useCallback(
    (apartment: string) => {
      if (likedRentalApartments.includes(apartment)) {
        const updated = likedRentalApartments.filter((id) => id !== apartment);
        setLikedRentalApartments(updated);
        localStorage.setItem("likedRentalApartments", JSON.stringify(updated));
      } else {
        const updated = [...likedRentalApartments, apartment];
        setLikedRentalApartments(updated);
        localStorage.setItem("likedRentalApartments", JSON.stringify(updated));
      }
    },
    [likedRentalApartments]
  );

  const isLikedApartment = (apartment: string) =>
    likedRentalApartments.includes(apartment);

  useEffect(() => {
    const storedLikedrentalApartments = localStorage.getItem(
      "likedRentalApartments"
    );
    if (storedLikedrentalApartments)
      setLikedRentalApartments(JSON.parse(storedLikedrentalApartments));
  }, []);

  const filterByCheckbox = (
    rentalApartments: Apartment[],
    category: keyof FilterType
  ) => {
    const currentFilter = filter[category] as string[];
    if (currentFilter.length) {
      return rentalApartments.filter((apartment) => {
        const value = String(apartment[category as keyof Apartment]);
        return currentFilter.includes(value);
      });
    } else {
      return rentalApartments;
    }
  };

  const filterByLikes = (rentalApartments: Apartment[]) => {
    if (!likedRentalApartments.length) return rentalApartments;
    const filteredrentalApartments = rentalApartments.filter(
      (apartment: Apartment) => {
        if (likedRentalApartments.includes(apartment.title)) return apartment;
      }
    );
    return filteredrentalApartments;
  };

  const filterByRange = (
    rentalApartments: Apartment[],
    category: keyof Apartment,
    min: number,
    max: number
  ) => {
    const filteredrentalApartments = rentalApartments.filter((apartment) => {
      return (
        Number(apartment[category]) >= min && Number(apartment[category]) <= max
      );
    });
    return filteredrentalApartments;
  };

  const sortrentalApartmentsByCategory = (rentalApartments: Apartment[]) => {
    if (!sort) return rentalApartments;
    if (isDescendent) {
      const sortedrentalApartments = rentalApartments.sort(
        (apartmentA, apartmentB) =>
          Number(apartmentA[sort as keyof Apartment]) -
          Number(apartmentB[sort as keyof Apartment])
      );
      return sortedrentalApartments;
    } else {
      const sortedrentalApartments = rentalApartments.sort(
        (apartmentA, apartmentB) =>
          Number(apartmentB[sort as keyof Apartment]) -
          Number(apartmentA[sort as keyof Apartment])
      );
      return sortedrentalApartments;
    }
  };

  const filterTargetrentalApartments = (rentalApartments: Apartment[]) => {
    const rentalApartmentsCopy = [...rentalApartments];
    const spaceMinMax = space as number[];
    const rentalPriceMinMax = rentalPrice as number[];
    let targetrentalApartments: Apartment[];

    const filteredBySpace = filterByRange(
      rentalApartmentsCopy,
      "area",
      spaceMinMax[0],
      spaceMinMax[1]
    );

    const filteredByrentalPrice = filterByRange(
      filteredBySpace,
      "rentalgross",
      rentalPriceMinMax[0],
      rentalPriceMinMax[1]
    );

    const filteredByFloor = filterByCheckbox(filteredByrentalPrice, "floor");
    const filteredByRooms = filterByCheckbox(filteredByFloor, "rooms");
    const filteredByStatus = filterByCheckbox(filteredByRooms, "state");
    if (activateLikedrentalApartments) {
      targetrentalApartments = filterByLikes(filteredByStatus);
    } else {
      targetrentalApartments = filteredByStatus;
    }

    return sortrentalApartmentsByCategory(targetrentalApartments);
  };

  const value = {
    rentalApartments,
    setRentalApartments,
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
    filterTargetrentalApartments,
    handleLikedRentalApartments,
    isLikedApartment,
    activateLikedrentalApartments,
    setActivateLikedrentalApartments,
    isDescendent,
    setIsDescendent,
    sort,
    setSort,
    clickedApartment,
    setClickedApartment,
    showSVG,
    setShowSVG,
    getAllRentalApartments,
  };

  return (
    <ApartmentContext.Provider value={value}>
      {children}
    </ApartmentContext.Provider>
  );
};

export default ApartmentProvider;
