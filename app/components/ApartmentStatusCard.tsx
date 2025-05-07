"use client";

import { Select, SelectItem } from "@heroui/select";

type ApartmentStatusCardProps = {
  name: string;
  status: string;
  floor: string;
};

const ApartmentStatusCard = ({
  name,
  status,
  floor,
}: ApartmentStatusCardProps) => {
  return (
    <div className="w-[280px] flex flex-col gap-4 p-12 shadow-custom rounded-2xl z-10">
      <div>
        <p className="text-dashboard_secondary text-body_small_desktop">{`Etage ${floor}`}</p>
        <p className="text-dashboard_primary text-h3_desktop">{name}</p>
      </div>
      <Select
        radius="full"
        classNames={{
          trigger: `bg-${status}`,
          value: "text-white font-semibold",
          mainWrapper: "text-white ",
        }}
      >
        <SelectItem key="frei">frei</SelectItem>
        <SelectItem key="reserviert">reserviert</SelectItem>
        <SelectItem key="vermietet">vermietet</SelectItem>
      </Select>
    </div>
  );
};

export default ApartmentStatusCard;
