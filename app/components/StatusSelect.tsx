import { Select, SelectItem } from "@heroui/select";
import { useState } from "react";
import t from "../data/text.json";

type StatusSelectProps = {
  apartmentId: string;
  status: string;
};
const StatusSelect = ({ apartmentId, status }: StatusSelectProps) => {
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
  );
};

export default StatusSelect;
