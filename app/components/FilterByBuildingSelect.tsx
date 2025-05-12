"use client";
import { Select, SelectItem } from "@heroui/select";

import t from "../data/text.json";

type FilterByBuildingProps = {
  setSelectedBuilding: (selectedBuilding: string) => void;
};

const FilterByBuildingSelect = ({
  setSelectedBuilding,
}: FilterByBuildingProps) => {
  const { status_filter_options } =
    t.dashboard.apartments.apartment_status_block;

  const handleBuilding = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedBuilding(e.target.value);

  return (
    <div className="z-10 w-full flex justify-center">
      <Select
        label="Filter"
        radius="full"
        placeholder={`${status_filter_options[0].building}`}
        classNames={{
          value: "font-semibold",
        }}
        className="max-w-sm"
        onChange={handleBuilding}
      >
        {status_filter_options.map((option) => (
          <SelectItem key={option.value}>{option.building}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default FilterByBuildingSelect;
