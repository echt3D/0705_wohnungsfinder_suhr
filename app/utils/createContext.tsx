import { createContext } from "react";
import { Apartment, FilterType } from "./types";

interface ApartmentContext {
  rentalApartments: Apartment[] | [];
  setRentalApartments: (rentalApartments: Apartment[] | []) => void;
  hoveredApartment: Apartment | null;
  setHoveredApartment: (hoveredApartment: Apartment | null) => void;
  getMinMax: (category: string) => number[];
  visu: number;
  setVisu: (visu: number) => void;
  space: number[] | number;
  setSpace: (space: number[] | number) => void;
  rentalPrice: number[] | number;
  setRentalPrice: (rentalPrice: number[] | number) => void;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  filterTargetrentalApartments: (rentalApartments: Apartment[]) => Apartment[];
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
  clickedApartment: Apartment | null;
  setClickedApartment: (clickedApartment: Apartment | null) => void;
  showSVG: boolean;
  setShowSVG: (showSVG: boolean) => void;
  getAllRentalApartments: () => void;
}

export const ApartmentContext = createContext<ApartmentContext>({
  rentalApartments: [],
  setRentalApartments: () => {},
  hoveredApartment: null,
  setHoveredApartment: () => {},
  getMinMax: () => [0, 0],
  visu: 1002,
  setVisu: () => {},
  space: 0,
  setSpace: () => {},
  rentalPrice: 0,
  setRentalPrice: () => {},
  filter: { floor: [], rooms: [], state: [] },
  setFilter: () => {},
  filterTargetrentalApartments: () => [],
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
  getAllRentalApartments: () => {},
});
