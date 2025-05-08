import t from "../data/text.json";
import ApartmentDetailsCard from "./ApartmentDetailsCard";
import { Apartment } from "../utils/types";

type ApartmentDetailsBlockProps = {
  apartments: Apartment[];
};

const ApartmentDetailsBlock = ({ apartments }: ApartmentDetailsBlockProps) => {
  const { title } = t.dashboard.apartments.apartment_details_block;

  return (
    <section className="bg-dashboard_tertiary py-20 ">
      <div className="max-w-desktop mx-auto flex flex-col items-center gap-16">
        <h2 className="text-h2_desktop">{title}</h2>
        <ul className="grid grid-cols-3 gap-8  w-full z-10">
          {apartments.map((apartment, i) => (
            <li key={i}>
              <ApartmentDetailsCard apartment={apartment} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ApartmentDetailsBlock;
