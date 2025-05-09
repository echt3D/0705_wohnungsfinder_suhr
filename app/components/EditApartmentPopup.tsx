"use client";
import { Apartment } from "../utils/types";
import t from "../data/text.json";
import Image from "next/image";
import StatusSelect from "./StatusSelect";
import { Input } from "@heroui/input";

type EditApartmentPopupProps = {
  apartment: Apartment;
  setEditApartment: (editApartment: boolean) => void;
};

const EditApartmentPopup = ({
  apartment,
  setEditApartment,
}: EditApartmentPopupProps) => {
  const { title } = t.dashboard.edit_popup;


  return (
    <section className="fixed top-0 left-0 w-screen h-screen z-40 bg-dashboard_primary bg-opacity-70">
      <div className="max-w-desktop mx-auto flex justify-center items-center h-full">
        <div className="bg-white w-full  rounded-2xl flex flex-col items-center gap-8 px-20 py-12">
          <div className="w-full flex flex-col  items-center">
            <div className="grid grid-cols-[1fr_auto] w-full items-center">
              <h2 className="text-h3_desktop text-dashboard_secondary text-center">
                {title}
              </h2>
              <Image
                src="/icons/close.svg"
                width={20}
                height={20}
                alt="close icon"
                onClick={() => setEditApartment(false)}
                className="cursor-pointer hover:opacity-70 duration-200"
              />
            </div>
            <p className="text-h3_desktop">{`Whg. ${apartment.name}`}</p>
          </div>
          <div className="grid grid-cols-2 w-full gap-12">
            <Input
              label="Grösse (m²) *"
              defaultValue={`${apartment.area}`}
              radius="full"
              type="string"
            />
            <Input
              label="Beschrieb"
              radius="full"
              type="string"
              defaultValue={apartment.description ? apartment.description : ""}
            />
            <Input
              label="Zimmer*"
              defaultValue={`${apartment.rooms}`}
              radius="full"
              type="string"
            />
            <Input
              label="Notizen"
              radius="full"
              type="string"
              defaultValue={apartment.notes ? apartment.notes : ""}
            />
            <Input
              label="Etage*"
              defaultValue={`${apartment.floor}`}
              radius="full"
              type="string"
            />

            <StatusSelect
              apartmentId={apartment.apartmentId}
              status={apartment.state}
            />
          </div>
          <button className="text-dashboard_secondary font-semibold hover:opacity-70 duration-200">
            Änderungen speichern &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditApartmentPopup;
