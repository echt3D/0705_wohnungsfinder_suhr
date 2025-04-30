import { Apartment } from "../utils/types";
import StatusBatch from "./StatusBatch";
import LikeButton from "./LikeButton";

const ApartmentCard = ({ apartment }: { apartment: Apartment }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <StatusBatch status={apartment.state} />
        <LikeButton apartment={apartment.title} />
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
    </>
  );
};

export default ApartmentCard;
