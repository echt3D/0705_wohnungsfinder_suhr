import t from "../data/text.json";
import Link from "next/link";

const ApartmentOverviewBlock = () => {
  const { title, text, button } = t.dashboard.apartment_overview_block;
  return (
    <div className="bg-dashboard_primary py-20 px-20 flex justify-center">
      <div className="flex flex-col gap-8 w-2/3">
        <h2 className="text-h2_desktop text-white">{title}</h2>
        <p className="text-white">{text}</p>
        <Link
          href={button.link}
          className="bg-white text-dashboard_primary text-center py-2 px-12 rounded-full hover:opacity-70 duration-200 cursor-pointer z-10 relative  w-2/3 font-semibold"
        >
          {button.label}
        </Link>
      </div>
    </div>
  );
};

export default ApartmentOverviewBlock;
