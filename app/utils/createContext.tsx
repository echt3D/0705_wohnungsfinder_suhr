import { createContext } from "react";
import { Apartment, FilterType } from "./types";

interface ApartmentContext {
  apartments: Apartment[] | [];
  setApartments: (apartments: Apartment[] | []) => void;
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
  filterTargetApartments: (apartments: Apartment[]) => Apartment[];
  handleLikedApartments: (apartment: string) => void;
  isLikedApartment: (apartment: string) => boolean;
  activateLikedApartments: boolean;
  setActivateLikedApartments: (activateLikedApartments: boolean) => void;
  isDescendent: boolean;
  setIsDescendent: (isDescendent: boolean) => void;
  sort: string | null;
  setSort: (sort: string | null) => void;
  clickedApartment: Apartment | null;
  setClickedApartment: (clickedApartment: Apartment | null) => void;
  showSVG: boolean;
  setShowSVG: (showSVG: boolean) => void;
  getAllApartments: () => void;
}

export const ApartmentContext = createContext<ApartmentContext>({
  apartments: [],
  setApartments: () => {},
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
  filterTargetApartments: () => [],
  handleLikedApartments: () => {},
  isLikedApartment: () => false,
  activateLikedApartments: false,
  setActivateLikedApartments: () => {},
  isDescendent: false,
  setIsDescendent: () => {},
  sort: null,
  setSort: () => {},
  clickedApartment: null,
  setClickedApartment: () => {},
  showSVG: false,
  setShowSVG: () => {},
  getAllApartments: () => {},
});
