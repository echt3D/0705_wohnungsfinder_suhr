"use client";
import t from "../data/text.json";
import StatusSelect from "./StatusSelect";
import { Apartment } from "../utils/types";
import Image from "next/image";
import { useState } from "react";
import EditApartmentPopup from "./EditApartmentPopup";

type ApartmentDetailsCardProps = {
  apartment: Apartment;
};

const ApartmentDetailsCard = ({ apartment }: ApartmentDetailsCardProps) => {
  const {
    area_label,
    rooms_label,
    floor_label,
    description_label,
    notes_label,
  } = t.dashboard.apartments.apartment_details_block.aparment_details_card;
  const [editApartment, setEditApartment] = useState<boolean>(false);

  return (
    <>
      <div className="w-full bg-white px-4 py-6 rounded-2xl shadow-custom">
        <div className="w-full bg-dashboard_tertiary h-[200px]"></div>
        <div className="flex flex-col gap-4 pt-8">
          <div>
            <p className="text-h4_desktop text-center">{`Whg. ${apartment.name}`}</p>
            <ul>
              <li className="flex justify-between border-b border-dashboard_primary py-2">
                <p className="font-semibold">{area_label}</p>
                <p>{`${apartment.area} m²`}</p>
              </li>
              <li className="flex justify-between border-b border-dashboard_primary py-2">
                <p className="font-semibold">{rooms_label}</p>
                <p>{`${apartment.rooms} Zimmer`}</p>
              </li>
              <li className="flex justify-between border-b border-dashboard_primary py-2">
                <p className="font-semibold">{floor_label}</p>
                <p>{apartment.floor}</p>
              </li>
              <li className="border-b border-dashboard_primary py-2">
                <p className="font-semibold">{description_label}</p>
                <p>{apartment.description}</p>
              </li>
              <li className=" border-b border-dashboard_primary py-2">
                <p className="font-semibold">{notes_label}</p>
                <p>{apartment.notes}</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center  gap-6">
            <div className="w-1/2">
              <StatusSelect
                apartmentId={apartment.apartmentId}
                status={apartment.state}
              />
            </div>
            <button
              className="p-2 shadow-custom hover:opacity-80 rounded-full"
              onClick={() => setEditApartment(true)}
            >
              <Image
                src="/icons/pencil.svg"
                width={20}
                height={20}
                alt="edit icon"
              />
            </button>
          </div>
        </div>
      </div>
      {editApartment && <EditApartmentPopup apartment={apartment} />}
    </>
  );
};

export default ApartmentDetailsCard;
