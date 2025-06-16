import { Apartment, SellingApartment } from "../utils/types";
import StatusBatch from "./StatusBatch";
import LikeButton from "./LikeButton";
import { ApartmentContext } from "../utils/createContext";
import { useContext } from "react";

const ApartmentCard = ({
  apartment,
}: {
  apartment: Apartment | SellingApartment;
}) => {
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
        <div className="flex items-center gap-2">
          <StatusBatch status={apartment.object_state_text} />
          <div className="rounded-md  text-sm px-2 py-1 border-line border">
            <span>
              {`${"rentalgross" in apartment ? "zum Mieten" : "zum Kaufen"}`}
            </span>
          </div>
        </div>
        <div className="flex gap-2 text-sm">
          <span className="text-primary">{`Whg. ${apartment.title}`}</span>
          <span>{`${apartment.area} m²`}</span>
          <span>{apartment.floor}</span>
        </div>
        <p>{`${apartment.rooms}-Zimmer Wohnung`}</p>
        <p className="text-md">{`${
          "rentalgross" in apartment
            ? `Miete 
        ${new Intl.NumberFormat("de-CH", {
          style: "currency",
          currency: "CHF",
          maximumSignificantDigits: 3,
        }).format(apartment.rentalgross)} p.M.`
            : `Verkaufspreis ${new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumSignificantDigits: 3,
              }).format(apartment.selling_price)}`
        }`}</p>
      </div>
    </>
  );
};

export default ApartmentCard;
