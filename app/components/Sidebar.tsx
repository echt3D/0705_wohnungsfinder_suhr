"use client";
import { useState } from "react";
import FilterButton from "./FilterButton";
import { Text, Apartment } from "../utils/types";
import ApartmentCard from "./ApartmentCard";

type SidebarProps = {
  t: Text;
  apartments: Apartment[] | null;
};

const Sidebar = ({ t, apartments }: SidebarProps) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  return (
    <aside className="w-sidebar_desktop h-full px-6 flex flex-col  gap-8 blue">
      <FilterButton
        t={(t.filter as Text).sort_filter as string}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
      />
      <div className="overflow-y-auto min-h-0">
        <ul className="flex flex-col gap-8">
          {apartments &&
            apartments.map((apartment, i) => (
              <li key={i} className="px-2 py-4 shadow-md border rounded-lg">
                <ApartmentCard apartment={apartment} />
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
