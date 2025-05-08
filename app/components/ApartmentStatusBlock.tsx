import t from "../data/text.json";
import ApartmentStatusCard from "./ApartmentStatusCard";
import { Apartment } from "../utils/types";

type ApartmentStatusBlockProps = {
  apartments: Apartment[];
};

const ApartmentStatusBlock = ({ apartments }: ApartmentStatusBlockProps) => {
  const { title } = t.dashboard.apartments.apartment_status_block;
  return (
    <section className="py-20">
      <div className="max-w-desktop mx-auto flex flex-col items-center justify-center gap-16">
        <h2 className="text-h2_desktop">{title}</h2>
        <ul className="grid grid-cols-4 gap-8 z-10">
          {apartments.map((apartment, i) => (
            <li key={i}>
              <ApartmentStatusCard
                name={apartment.name}
                floor={apartment.floor}
                status={apartment.state}
                apartmentId={apartment.apartmentId}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ApartmentStatusBlock;
