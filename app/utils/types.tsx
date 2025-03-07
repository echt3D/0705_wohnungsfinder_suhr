export interface Text {
  [key: string]: string | Text;
}



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
