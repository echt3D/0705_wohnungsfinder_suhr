import { createContext } from "react";
import { Apartment } from "./types";

interface ApartmentContext {
  apartments: Apartment[] | null;
  setApartments: (apartments: Apartment[] | null) => void;
  hoveredApartment: Apartment | null;
  setHoveredApartment: (hoveredApartment: Apartment | null) => void;
  getMinMax: (category: string) => number[];
  visu: number;
  setVisu: (visu: number) => void;
  space: number[] | number;
  setSpace: (space: number[] | number) => void;
  rentalPrice: number[] | number;
  setRentalPrice: (rentalPrice: number[] | number) => void;
}

export const ApartmentContext = createContext<ApartmentContext>({
  apartments: null,
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
});
