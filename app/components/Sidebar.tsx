"use client";
import { useState, useContext } from "react";
import FilterButton from "./FilterButton";
import ApartmentCard from "./ApartmentCard";
import Filter from "./Filter";
import { ApartmentContext } from "../utils/createContext";
import ApartmentDetail from "./ApartmentDetail";

const Sidebar = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const { apartments, filterTargetApartments, clickedApartment } =
    useContext(ApartmentContext);
  return (
    <aside className="absolute bottom-0 xl:relative w-full xl:w-sidebar_desktop z-30 xl:h-full gap-8 px-6 py-2 bg-transparent xl:bg-secondary">
      <FilterButton openFilter={openFilter} setOpenFilter={setOpenFilter} />
      {openFilter && <Filter setOpenFilter={setOpenFilter} />}
      {clickedApartment && <ApartmentDetail />}

      <div className="overflow-scroll xl:h-filter_desktop">
        <ul className="flex flex-row xl:flex-col gap-8 py-2 w-[120vw] xl:w-full">
          {apartments &&
            filterTargetApartments(apartments).map((apartment, i) => (
              <li
                key={i}
                className="px-2 py-4 shadow-md border rounded-lg bg-white hover:shadow-lg cursor-pointer relative min-w-[240px] flex-grow"
              >
                <ApartmentCard apartment={apartment} />
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
