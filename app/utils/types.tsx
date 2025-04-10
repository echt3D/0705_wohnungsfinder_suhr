export interface Apartment {
  apartmentId: string;
  address: string;
  factsheet?: string | null;
  incidentalCosts?: number | null;
  state: string;
  moveInDate?: Date | null;
  floor: string;
  floorNum: number;
  priceUnit: string;
  rentalPrice: number;
  rentalPriceSquaremeterNet?: number | null;
  rentalPriceSquaremeter?: number | null;
  title: string;
  name: string;
  rooms: number | null;
  area: number | null;
  virtualTourLink: string;
  balcony: number | null;
  loggiaArea: number | null;
  gardenSittingPlaceArea: number | null;
  terraceArea: number | null;
  basementArea: number | null;
  parkingSpaceCost: number | null;
  deposit: number | null;
  reduitArea: number | null;
  referenceNumber: string;
}

export interface FilterType {
  floor: string[] | [];
  rooms: string[] | [];
}

export interface Sort {
  method: string;
  direction: string;
}

export interface SortMethod {
  label: string;
  value: string;
}

export interface Content {
  [key: string]: string | Content | SortMethod[];
}
