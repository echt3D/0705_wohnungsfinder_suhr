"use client";
import t from "../data/text.json";
import ApartmentStatusCircle from "./ApartmentStatusCircle";
import { ApartmentContext } from "../utils/createContext";
import { useContext } from "react";

const ApartmentsMain = () => {
  const { lead, title, all, free, occupied, reserved } =
    t.dashboard.apartments.main;
  const { apartments } = useContext(ApartmentContext);

  const getValueByApartmentStatus = (status: string): number => {
    const apartmentsByStatus = apartments.filter(
      (apartment) => apartment.state === status
    );
    return apartmentsByStatus.length;
  };

  return (
    <section className="bg-dashboard_primary py-20">
      <div className="max-w-desktop mx-auto flex flex-col gap-20">
        <div className="flex flex-col items-center w-full ">
          <p className="text-dashboard_secondary text-h2_desktop font-light">
            {lead}
          </p>
          <h1 className="text-white text-h1_desktop text-center">{title}</h1>
        </div>
        <div className="grid grid-cols-4">
          <ApartmentStatusCircle label={all} value={apartments.length} />
          <ApartmentStatusCircle
            label={free}
            value={getValueByApartmentStatus("frei")}
          />
          <ApartmentStatusCircle
            label={occupied}
            value={getValueByApartmentStatus("reserviert")}
          />
          <ApartmentStatusCircle
            label={reserved}
            value={getValueByApartmentStatus("gemietet")}
          />
        </div>
      </div>
    </section>
  );
};

export default ApartmentsMain;
