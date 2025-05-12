"use client";
import { Apartment } from "../utils/types";
import t from "../data/text.json";
import Image from "next/image";
import StatusSelect from "./StatusSelect";
import { Input } from "@heroui/input";
import { useState, useContext } from "react";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { ApartmentContext } from "../utils/createContext";

type EditApartmentPopupProps = {
  apartment: Apartment;
  setEditApartment: (editApartment: boolean) => void;
};

type EditedApartment = {
  area: number | null;
  floor: string;
  rooms: number | null;
  description: string | null;
  notes: string | null;
};

const EditApartmentPopup = ({
  apartment,
  setEditApartment,
}: EditApartmentPopupProps) => {
  const { title, save_change } = t.dashboard.edit_popup;
  const [edited, setEdited] = useState<EditedApartment>({
    area: apartment.area,
    floor: apartment.floor,
    rooms: apartment.rooms,
    description: apartment.description,
    notes: apartment.notes,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { getAllApartments } = useContext(ApartmentContext);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    return name === "area" || name === "rooms"
      ? setEdited({ ...edited, [name]: Number(value) })
      : setEdited({ ...edited, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("/api/update-apartment", {
      method: "PATCH",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({ ...edited, apartmentId: apartment.apartmentId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setIsLoading(false);
          setEditApartment(false);
          getAllApartments();
        }
      });
  };

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
          <Form
            className="w-full flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 w-full gap-12">
              <Input
                label="Grösse (m²) *"
                name="area"
                value={`${edited.area}`}
                defaultValue={`${edited.area}`}
                radius="full"
                type="number"
                onChange={handleInput}
              />
              <Input
                label="Beschrieb"
                name="description"
                radius="full"
                type="text"
                defaultValue={
                  apartment.description ? apartment.description : ""
                }
                onChange={handleInput}
              />
              <Input
                label="Zimmer*"
                name="rooms"
                defaultValue={`${apartment.rooms}`}
                radius="full"
                type="number"
                onChange={handleInput}
              />
              <Input
                label="Notizen"
                name="notes"
                radius="full"
                type="text"
                defaultValue={apartment.notes ? apartment.notes : ""}
                onChange={handleInput}
              />
              <Input
                label="Etage*"
                name="rooms"
                defaultValue={`${apartment.floor}`}
                radius="full"
                type="text"
                onChange={handleInput}
              />

              <StatusSelect
                apartmentId={apartment.apartmentId}
                status={apartment.state}
              />
            </div>
            <Button
              type="submit"
              className="font-semibold bg-transparent text-dashboard_secondary hover:opacity-70"
              isLoading={isLoading}
            >
              {save_change}
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default EditApartmentPopup;
