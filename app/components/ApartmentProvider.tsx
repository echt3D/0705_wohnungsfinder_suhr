"use client";
import { ApartmentContext } from "../utils/createContext";
import { useState, useEffect, useCallback } from "react";
import { Apartment, SellingApartment, FilterType } from "../utils/types";
import { bestPerspective } from "../data/bestPerspective";

const initFilter = {
  floor: [],
  rooms: [],
  state: [],
  liked: [],
};

// const visibleList: Record<string, string[]> = {
//   "1001": ["A.0.2"],
//   "1002": ["A.1.5"],
//   "1009": ["A.0.2"],
// };

const ApartmentProvider = ({ children }: { children: React.ReactNode }) => {
  const [rentalApartments, setRentalApartments] = useState<Apartment[] | []>(
    []
  );
  const [sellingApartments, setSellingApartments] = useState<
    SellingApartment[] | []
  >([]);
  const [activeApartments, setActiveApartments] = useState<string>("mieten");
  const [hoveredApartment, setHoveredApartment] = useState<
    Apartment | SellingApartment | null
  >(null);
  const [visu, setVisu] = useState<number>(1009);
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

  const handleClickedApartment = (
    clickedApartment: Apartment | SellingApartment | null
  ) => {
    if (clickedApartment) {
      const targetVisu =
        bestPerspective[clickedApartment.title as keyof typeof bestPerspective];
      const step = visu < targetVisu ? 1 : -1;

      const interval = setInterval(() => {
        setVisu((prev) => {
          const next = prev + step;
          if (
            (step > 0 && next >= targetVisu) ||
            (step < 0 && next <= targetVisu)
          ) {
            clearInterval(interval);
            return targetVisu;
          }
          return next;
        });
      }, 300);
    }
    // if (clickedApartment) {
    //   const isVisible = visibleList[visu].find(
    //     (activeReference) =>
    //       activeReference === clickedApartment.reference_number
    //   );

    //   if (!isVisible) {
    //     const toSetVisibleKey = Object.keys(visibleList).find(
    //       (visibleKey: keyof typeof visibleList) => {
    //         const activeVisuList = visibleList[visibleKey];
    //         const isVisible = activeVisuList.find(
    //           (activeReference) =>
    //             activeReference === clickedApartment.reference_number
    //         );
    //         return !!isVisible;
    //       }
    //     );

    //     setVisu(Number(toSetVisibleKey));
    //   }
    // }

    setClickedApartment(clickedApartment);
  };

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
    targetApartments: (Apartment | SellingApartment)[],
    category: keyof FilterType
  ) => {
    const currentFilter = filter[category] as string[];
    if (currentFilter.length) {
      return targetApartments.filter((apartment) => {
        const value = String(
          apartment[category as keyof (Apartment | SellingApartment)]
        );
        return currentFilter.includes(value);
      });
    } else {
      return targetApartments;
    }
  };

  const filterByLikes = (
    targetApartments: (Apartment | SellingApartment)[]
  ) => {
    if (!likedRentalApartments.length) return targetApartments;
    const filteredrentalApartments = targetApartments.filter(
      (apartment: Apartment | SellingApartment) => {
        if (likedRentalApartments.includes(apartment.title)) return apartment;
      }
    );
    return filteredrentalApartments;
  };

  const filterByRange = (
    targetApartments: (Apartment | SellingApartment)[],
    category: keyof Apartment | keyof SellingApartment,
    min: number,
    max: number
  ) => {
    const filteredrentalApartments = targetApartments.filter((apartment) => {
      return (
        Number(apartment[category as keyof (Apartment | SellingApartment)]) >=
          min &&
        Number(apartment[category as keyof (Apartment | SellingApartment)]) <=
          max
      );
    });
    return filteredrentalApartments;
  };

  const sortApartmentsByCategory = (
    targetApartments: (Apartment | SellingApartment)[]
  ) => {
    if (!sort) return targetApartments;
    if (isDescendent) {
      const sortedrentalApartments = targetApartments.sort(
        (apartmentA, apartmentB) =>
          Number(apartmentA[sort as keyof (Apartment | SellingApartment)]) -
          Number(apartmentB[sort as keyof (Apartment | SellingApartment)])
      );
      return sortedrentalApartments;
    } else {
      const sortedrentalApartments = targetApartments.sort(
        (apartmentA, apartmentB) =>
          Number(apartmentB[sort as keyof (Apartment | SellingApartment)]) -
          Number(apartmentA[sort as keyof (Apartment | SellingApartment)])
      );
      return sortedrentalApartments;
    }
  };

  const filterTargetApartments = (
    targetApartments: (Apartment | SellingApartment)[]
  ) => {
    const targetApartmentsCopy = [...targetApartments];
    const isRental = activeApartments === "mieten";
    const spaceMinMax =
      activeApartments === "mieten"
        ? (rentalSpace as number[])
        : (sellingSpace as number[]);
    const priceMinMax = isRental
      ? (rentalPrice as number[])
      : (sellingPrice as number[]);
    let targetrentalApartments: (Apartment | SellingApartment)[];

    const filteredByrentalSpace = filterByRange(
      targetApartmentsCopy,
      "area",
      spaceMinMax[0],
      spaceMinMax[1]
    );

    const filteredByrentalPrice = isRental
      ? filterByRange(
          filteredByrentalSpace as Apartment[],
          "rentalgross",
          priceMinMax[0],
          priceMinMax[1]
        )
      : filterByRange(
          filteredByrentalSpace as SellingApartment[],
          "selling_price",
          priceMinMax[0],
          priceMinMax[1]
        );

    const filteredByFloor = filterByCheckbox(filteredByrentalPrice, "floor");
    const filteredByRooms = filterByCheckbox(filteredByFloor, "rooms");
    const filteredByStatus = filterByCheckbox(filteredByRooms, "state");
    if (activateLikedrentalApartments) {
      targetrentalApartments = filterByLikes(filteredByStatus);
    } else {
      targetrentalApartments = filteredByStatus;
    }

    return sortApartmentsByCategory(targetrentalApartments);
  };

  const value = {
    rentalApartments,
    setRentalApartments,
    sellingApartments,
    setSellingApartments,
    activeApartments,
    setActiveApartments,
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
    setClickedApartment: handleClickedApartment,
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
