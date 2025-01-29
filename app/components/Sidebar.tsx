"use client";
import { useState } from "react";
import FilterButton from "./FilterButton";
import { Text, TextProps } from "../utils/types";

const Sidebar = ({ t }: TextProps) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  return (
    <aside className="w-sidebar_desktop h-desktop px-6 red">
      <FilterButton
        t={(t.filter as Text).sort_filter as string}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
      />
    </aside>
  );
};

export default Sidebar;
