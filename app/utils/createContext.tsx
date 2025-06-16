import { createContext } from "react";
import { Apartment, SellingApartment, FilterType } from "./types";

interface ApartmentContext {
  rentalApartments: Apartment[] | [];
  setRentalApartments: (rentalApartments: Apartment[] | []) => void;
  sellingApartments: SellingApartment[] | [];
  setSellingApartments: (sellingApartments: SellingApartment[] | []) => void;
  targetApartments: (Apartment | SellingApartment)[];
  setTargetApartments: (
    targetApartments: (Apartment | SellingApartment)[]
  ) => void;
  hoveredApartment: Apartment | SellingApartment | null;
  setHoveredApartment: (
    hoveredApartment: Apartment | SellingApartment | null
  ) => void;
  getMinMax: (
    apartments: (Apartment | SellingApartment)[],
    category: string
  ) => number[];
  visu: number;
  setVisu: (visu: number) => void;
  rentalSpace: number[] | number;
  setRentalSpace: (rentalSpace: number[] | number) => void;
  rentalPrice: number[] | number;
  setRentalPrice: (rentalPrice: number[] | number) => void;
  sellingSpace: number[] | number;
  setSellingSpace: (sellingSpace: number[] | number) => void;
  sellingPrice: number[] | number;
  setSellingPrice: (sellingPrice: number[] | number) => void;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  filterTargetApartments: (rentalApartments: Apartment[]) => Apartment[];
  handleLikedRentalApartments: (apartment: string) => void;
  isLikedApartment: (apartment: string) => boolean;
  activateLikedrentalApartments: boolean;
  setActivateLikedrentalApartments: (
    activateLikedrentalApartments: boolean
  ) => void;
  isDescendent: boolean;
  setIsDescendent: (isDescendent: boolean) => void;
  sort: string | null;
  setSort: (sort: string | null) => void;
  clickedApartment: Apartment | SellingApartment | null;
  setClickedApartment: (
    clickedApartment: Apartment | SellingApartment | null
  ) => void;
  showSVG: boolean;
  setShowSVG: (showSVG: boolean) => void;
}

export const ApartmentContext = createContext<ApartmentContext>({
  rentalApartments: [],
  setRentalApartments: () => {},
  sellingApartments: [],
  setSellingApartments: () => {},
  targetApartments: [],
  setTargetApartments: () => {},
  hoveredApartment: null,
  setHoveredApartment: () => {},
  getMinMax: () => [0, 0],
  visu: 1002,
  setVisu: () => {},
  rentalSpace: 0,
  setRentalSpace: () => {},
  rentalPrice: 0,
  setRentalPrice: () => {},
  sellingSpace: 0,
  setSellingSpace: () => {},
  sellingPrice: 0,
  setSellingPrice: () => {},
  filter: { floor: [], rooms: [], state: [] },
  setFilter: () => {},
  filterTargetApartments: () => [],
  handleLikedRentalApartments: () => {},
  isLikedApartment: () => false,
  activateLikedrentalApartments: false,
  setActivateLikedrentalApartments: () => {},
  isDescendent: false,
  setIsDescendent: () => {},
  sort: null,
  setSort: () => {},
  clickedApartment: null,
  setClickedApartment: () => {},
  showSVG: false,
  setShowSVG: () => {},
});
