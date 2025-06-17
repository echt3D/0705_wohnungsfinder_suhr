"use client";
import { ApartmentContext } from "../utils/createContext";
import { useState, useEffect, useCallback } from "react";
import { Apartment, SellingApartment, FilterType } from "../utils/types";

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
  const [sellingApartments, setSellingApartments] = useState<
    SellingApartment[] | []
  >([]);
  const [targetApartments, setTargetApartments] = useState<
    (Apartment | SellingApartment)[] | []
  >([]);
  const [hoveredApartment, setHoveredApartment] = useState<
    Apartment | SellingApartment | null
  >(null);
  const [visu, setVisu] = useState<number>(1002);
  const [rentalSpace, setRentalSpace] = useState<number[] | number>([0, 0]);
  const [rentalPrice, setRentalPrice] = useState<number[] | number>([0, 0]);
  const [sellingSpace, setSellingSpace] = useState<number[] | number>([0, 0]);
  const [sellingPrice, setSellingPrice] = useState<number[] | number>([0, 0]);
  const [filter, setFilter] = useState<FilterType>(initFilter);
  const [likedRentalApartments, setLikedRentalApartments] = useState<string[]>(
    []
  );
  const [activateLikedrentalApartments, setActivateLikedrentalApartments] =
    useState<boolean>(false);
  const [isDescendent, setIsDescendent] = useState<boolean>(true);
  const [sort, setSort] = useState<string | null>(null);
  const [clickedApartment, setClickedApartment] = useState<
    Apartment | SellingApartment | null
  >(null);
  const [showSVG, setShowSVG] = useState<boolean>(true);

  const getAllRentalApartments = async () => {
    const res = await fetch("/api/get-all-rental-apartments");
    const data = await res.json();
    setRentalApartments(data);
  };

  const getAllSellingApartments = async () => {
    const res = await fetch("/api/get-all-selling-apartments");
    const data = await res.json();
    setSellingApartments(data);
  };

  useEffect(() => {
    getAllRentalApartments();
    getAllSellingApartments();
  }, []);

  useEffect(() => {
    setTargetApartments([...rentalApartments, ...sellingApartments]);
  }, [rentalApartments, sellingApartments]);

  useEffect(() => {
    if (rentalApartments && rentalApartments.length > 0) {
      const minMaxRentalSpace = getMinMax(rentalApartments, "area");
      const minMaxRentalPrice = getMinMax(rentalApartments, "rentalgross");
      setRentalSpace(minMaxRentalSpace);
      setRentalPrice(minMaxRentalPrice);
    }
  }, [rentalApartments]);

  useEffect(() => {
    if (sellingApartments && sellingApartments.length > 0) {
      const minMaxSellingSpace = getMinMax(sellingApartments, "area");
      const minMaxSellingPrice = getMinMax(sellingApartments, "selling_price");
      setSellingSpace(minMaxSellingSpace);
      setSellingPrice(minMaxSellingPrice);
    }
  }, [sellingApartments]);

  const getMinMax = (
    apartments: (Apartment | SellingApartment)[],
    category: string
  ): number[] => {
    if (!apartments || apartments.length === 0) {
      return [0, 0];
    }
    const sortedApartments = [...(apartments || [])].sort(
      (
        apartment1: Apartment | SellingApartment,
        apartment2: Apartment | SellingApartment
      ) => {
        const valueA =
          Number(
            apartment1[category as keyof (Apartment | SellingApartment)]
          ) || 0;
        const valueB =
          Number(
            apartment2[category as keyof (Apartment | SellingApartment)]
          ) || 0;
        return valueA - valueB;
      }
    );

    const min = sortedApartments?.[0][
      category as keyof (Apartment | SellingApartment)
    ] as number;
    const max = sortedApartments?.[sortedApartments.length - 1][
      category as keyof (Apartment | SellingApartment)
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

  const filterTargetApartments = (rentalApartments: Apartment[]) => {
    const rentalApartmentsCopy = [...rentalApartments];
    const rentalSpaceMinMax = rentalSpace as number[];
    const rentalPriceMinMax = rentalPrice as number[];
    let targetrentalApartments: Apartment[];

    const filteredByrentalSpace = filterByRange(
      rentalApartmentsCopy,
      "area",
      rentalSpaceMinMax[0],
      rentalSpaceMinMax[1]
    );

    const filteredByrentalPrice = filterByRange(
      filteredByrentalSpace,
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
    sellingApartments,
    setSellingApartments,
    targetApartments,
    setTargetApartments,
    hoveredApartment,
    setHoveredApartment,
    getMinMax,
    visu,
    setVisu,
    rentalSpace,
    setRentalSpace,
    rentalPrice,
    setRentalPrice,
    sellingSpace,
    setSellingSpace,
    sellingPrice,
    setSellingPrice,
    filter,
    setFilter,
    filterTargetApartments,
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
