import t from "../data/text.json";
import Link from "next/link";

const MediaBlock = () => {
  const { title, text, button } = t.dashboard.media_block;
  return (
    <section
      style={{ backgroundImage: "url(/images/1002.jpg)" }}
      className="bg-cover bg-dashboard_primary bg-blend-multiply bg-opacity-80 h-[50vh] bg-center text-white"
    >
      <div className="max-w-desktop mx-auto flex flex-col items-center justify-center gap-8 h-full w-1/3">
        <h2 className="text-h2_desktop">{title}</h2>
        <p className="text-center">{text}</p>
        <Link
          href={button.link}
          className="bg-dashboard_primary text-white text-center py-2 px-12 rounded-full hover:opacity-70 duration-200 cursor-pointer z-10 relative  w-2/3 font-semibold"
        >
          {button.label}
        </Link>
      </div>
    </section>
  );
};

export default MediaBlock;
