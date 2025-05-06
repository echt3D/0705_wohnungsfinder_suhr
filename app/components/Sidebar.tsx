"use client";
import { useState, useContext } from "react";
import FilterButton from "./FilterButton";
import { Content } from "../utils/types";
import ApartmentCard from "./ApartmentCard";
import Filter from "./Filter";
import { ApartmentContext } from "../utils/createContext";
import ApartmentDetail from "./ApartmentDetail";

type SidebarProps = {
  t: Content;
};

const Sidebar = ({ t }: SidebarProps) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const {
    apartments,
    filterTargetApartments,
    clickedApartment,
  } = useContext(ApartmentContext);
  return (
    <aside className="relative w-sidebar_desktop h-full gap-8 px-6 py-2 bg-secondary">
      <FilterButton
        t={(t.filter as Content).sort_filter as string}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
      />
      {openFilter && <Filter setOpenFilter={setOpenFilter} />}
      {clickedApartment && <ApartmentDetail />}

      <div className="overflow-scroll h-filter_desktop ">
        <ul className="flex flex-col gap-8 py-2">
          {apartments &&
            filterTargetApartments(apartments).map((apartment, i) => (
              <li
                key={i}
                className="px-2 py-4 shadow-md border rounded-lg bg-white hover:shadow-lg cursor-pointer relative"
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
