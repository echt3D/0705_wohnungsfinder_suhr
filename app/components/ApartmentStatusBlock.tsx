import t from "../data/text.json";
import ApartmentStatusCard from "./ApartmentStatusCard";

const ApartmentStatusBlock = () => {
  const { title } = t.dashboard.apartments.apartment_status_block;
  return (
    <section className="py-20">
      <div className="max-w-desktop mx-auto flex flex-col items-center justify-center">
        <h2 className="text-h2_desktop">{title}</h2>
        <ApartmentStatusCard name={"whg.hi"} floor={"2.OG"} status={"frei"} />
      </div>
    </section>
  );
};

export default ApartmentStatusBlock;
