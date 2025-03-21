"use client";
import { useState } from "react";
import FilterButton from "./FilterButton";
import { Text, Apartment } from "../utils/types";
import ApartmentCard from "./ApartmentCard";
import Filter from "./Filter";

type SidebarProps = {
  t: Text;
  apartments: Apartment[] | null;
  space: number[] | number;
  spaceMinMax: number[];
  setSpace: (space: number[] | number) => void;
};

const Sidebar = ({
  t,
  apartments,
  spaceMinMax,
  space,
  setSpace,
}: SidebarProps) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  return (
    <aside className="relative w-sidebar_desktop h-full flex flex-col  gap-8 blue px-6 py-2 bg-secondary">
      <FilterButton
        t={(t.filter as Text).sort_filter as string}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
      />
      {openFilter && (
        <Filter spaceMinMax={spaceMinMax} space={space} setSpace={setSpace} />
      )}

      <div className="overflow-y-auto min-h-0">
        <ul className="flex flex-col gap-8">
          {apartments &&
            apartments.map((apartment, i) => (
              <li
                key={i}
                className="px-2 py-4 shadow-md border rounded-lg bg-white"
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
