import { useContext } from "react";
import { ApartmentContext } from "../utils/createContext";
import Image from "next/image";
import t from "../data/text.json";
import StatusBatch from "./StatusBatch";
import LikeButton from "./LikeButton";
import Link from "next/link";

const ApartmentDetail = () => {
  const { clickedApartment, setClickedApartment } =
    useContext(ApartmentContext);
  const {
    back,
    address,
    apartment,
    open_floorplan,
    data,
    move_in_date,
    properties,
    space,
    rooms,
    apply,
    virtual_tour,
  } = t.details;

  return (
    clickedApartment && (
      <section className="fixed xl:absolute z-20 top-0 left-0 w-full  xl:w-sidebar_desktop h-full gap-8 px-6 py-2 bg-primary bg-opacity-70">
        <div className="bg-white rounded-xl h-full px-2 py-4 flex flex-col gap-8 w-full">
          <div className="flex justify-between items-center">
            <button
              className="flex gap-2 hover:opacity-70"
              onClick={() => setClickedApartment(null)}
            >
              <Image
                src="/icons/triangle.svg"
                width={16}
                height={16}
                alt="go back icon"
                className="rotate-90"
              />
              <span>{back}</span>
            </button>
            <div className="flex gap-2 items-center">
              <StatusBatch status={clickedApartment.object_state_text} />
              <LikeButton apartment={clickedApartment.title} />
            </div>
          </div>
          <div>
            <p className="text-2xl font-medium text-primary">
              {apartment} {clickedApartment.title}
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-md text-primary">{address}</p>
            <p>{`${clickedApartment.building.address}, ${clickedApartment.building.postal_code} ${clickedApartment.building.city}`}</p>
            {clickedApartment.factsheets && (
              <a
                href={clickedApartment.factsheets}
                target="_blank"
                className="w-full border-primary border-2 block text-center p-2 rounded-full text-primary hover:text-white hover:bg-primary duration-200"
              >
                {open_floorplan}
              </a>
            )}
            {clickedApartment.virtual_tour_link && (
              <a
                href={clickedApartment.virtual_tour_link}
                target="_blank"
                className="w-full border-primary border-2 block text-center p-2 rounded-full text-primary hover:text-white hover:bg-primary duration-200"
              >
                {virtual_tour}
              </a>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-md text-primary">{data}</p>
            <span>
              {move_in_date}{" "}
              {`${
                clickedApartment.move_in_date
                  ? clickedApartment.move_in_date
                  : "---"
              }`}
            </span>
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="text-md text-primary">{properties}</p>
            <div className="grid grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/icons/area.svg"
                  width={24}
                  height={24}
                  alt="area icon"
                />
                <div className="flex flex-col items-center">
                  <p>{clickedApartment.area} m²</p>
                  <p>{space}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/icons/floor.svg"
                  width={24}
                  height={24}
                  alt="floor icon"
                />

                <p>{clickedApartment.floor}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/icons/rooms.svg"
                  width={24}
                  height={24}
                  alt="floor icon"
                />
                <div className="flex flex-col items-center">
                  <p>{clickedApartment.rooms}</p>
                  <p>{rooms}</p>
                </div>
              </div>
            </div>
          </div>
          <Link
            href={clickedApartment.application_form}
            target="_blank"
            className={`mt-auto w-full bg-primary text-white p-2 text-center rounded-xl duration-200 ${
              clickedApartment.object_state_text === "Frei"
                ? "hover:opacity-70 pointer-events-auto"
                : "opacity-70 pointer-events-none"
            }`}
          >
            {apply}
          </Link>
        </div>
      </section>
    )
  );
};

export default ApartmentDetail;
