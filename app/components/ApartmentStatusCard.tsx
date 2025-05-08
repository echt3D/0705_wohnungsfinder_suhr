"use client";
import { Select, SelectItem } from "@heroui/select";
import t from "../data/text.json";
import { useState } from "react";

type ApartmentStatusCardProps = {
  name: string;
  status: string;
  floor: string;
  apartmentId: string;
};

const ApartmentStatusCard = ({
  name,
  status,
  floor,
  apartmentId,
}: ApartmentStatusCardProps) => {
  const { status_value } = t.dashboard.apartments.apartment_status_block;
  const [updatedStatus, setUpdatedStatus] = useState<string>(status);

  const handleState = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUpdatedStatus(e.target.value);
    fetch("/api/update-status", {
      method: "PATCH",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({ apartmentId, state: e.target.value }),
    })
      .then((res) => res.json())
      .then((data) => console.log("data", data));
  };
  return (
    <div className="w-[280px] flex flex-col gap-4 p-12 shadow-custom rounded-2xl ">
      <div>
        <p className="text-dashboard_secondary text-body_small_desktop">{`Etage ${floor}`}</p>
        <p className="text-dashboard_primary text-h4_desktop">{`Whg. ${name}`}</p>
      </div>
      <Select
        radius="full"
        placeholder={`${status}`}
        classNames={{
          trigger: `bg-${updatedStatus}`,
          value: "text-white font-semibold",
        }}
        onChange={handleState}
      >
        {status_value.map((status) => (
          <SelectItem key={status}>{status}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default ApartmentStatusCard;
