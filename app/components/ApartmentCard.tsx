import { Apartment } from "../utils/types";
import StatusBatch from "./StatusBatch";
import LikeButton from "./LikeButton";
import { ApartmentContext } from "../utils/createContext";
import { useContext } from "react";

const ApartmentCard = ({ apartment }: { apartment: Apartment }) => {
  const { setClickedApartment } = useContext(ApartmentContext);
  return (
    <>
      <div className="absolute right-2 z-10">
        <LikeButton apartment={apartment.title} />
      </div>
      <div
        className="flex flex-col gap-2"
        onClick={() => setClickedApartment(apartment)}
      >
        <div className="flex items-center">
          <StatusBatch status={apartment.state} />
        </div>
        <div className="flex gap-2 text-sm">
          <span className="text-primary">{`Whg. ${apartment.name}`}</span>
          <span>{`${apartment.area} m²`}</span>
          <span>{apartment.floor}</span>
        </div>
        <p>{`${apartment.rooms}-Zimmer Wohnung`}</p>
        <p className="text-md">{`Miete 
        ${new Intl.NumberFormat("de-CH", {
          style: "currency",
          currency: "CHF",
          maximumSignificantDigits: 3,
        }).format(apartment.rentalPrice)} p.M.`}</p>
      </div>
    </>
  );
};

export default ApartmentCard;