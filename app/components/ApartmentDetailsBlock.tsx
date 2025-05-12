"use client";
import t from "../data/text.json";
import ApartmentDetailsCard from "./ApartmentDetailsCard";
import { Apartment } from "../utils/types";
import FilterByBuildingSelect from "./FilterByBuildingSelect";
import { useState } from "react";

type ApartmentDetailsBlockProps = {
  apartments: Apartment[];
};

const ApartmentDetailsBlock = ({ apartments }: ApartmentDetailsBlockProps) => {
  const { title } = t.dashboard.apartments.apartment_details_block;
  const [selectedBuilding, setSelectedBuilding] = useState<string>("all");

  const filterByBuilding = (option: string) => {
    const copy = [...apartments];
    if (option === "all") return copy;
    const filteredApartments = copy.filter(
      (apartment) => apartment.referenceNumber[0] === option
    );
    return filteredApartments;
  };

  return (
    <section className="bg-dashboard_tertiary py-20 ">
      <div className="max-w-desktop mx-auto flex flex-col items-center gap-16">
        <h2 className="text-h2_desktop">{title}</h2>
        <FilterByBuildingSelect setSelectedBuilding={setSelectedBuilding} />
        <ul className="grid grid-cols-3 gap-8  w-full z-10">
          {filterByBuilding(selectedBuilding).map((apartment, i) => (
            <li key={i}>
              <ApartmentDetailsCard apartment={apartment} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ApartmentDetailsBlock;
