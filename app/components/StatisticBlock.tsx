import t from "../data/text.json";
import Image from "next/image";
import Link from "next/link";

const StatisticBlock = () => {
  const { title, button } = t.dashboard.main.statistic;
  return (
    <section className="bg-dashboard_tertiary py-20">
      <div className="max-w-desktop mx-auto flex flex-col items-center gap-8">
        <h2 className="text-h2_desktop">{title}</h2>
        <div className="grid grid-cols-3 gap-8">
          <Image
            src="/dummy/dummy_1.svg"
            width={360}
            height={600}
            alt="dummy 1"
          />
          <Image
            src="/dummy/dummy_2.svg"
            width={360}
            height={600}
            alt="dummy 2"
          />
          <Image
            src="/dummy/dummy_3.svg"
            width={360}
            height={600}
            alt="dummy 3"
          />
        </div>
        <Link
          href={button.link}
          className="bg-dashboard_primary text-white text-center py-2 px-12 rounded-full hover:opacity-70 duration-200 cursor-pointer z-10 relative"
        >
          {button.label}
        </Link>
      </div>
    </section>
  );
};

export default StatisticBlock;
