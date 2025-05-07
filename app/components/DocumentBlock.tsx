import t from "../data/text.json";
import Link from "next/link";

const DocumentBlock = () => {
  const { title, text, button } = t.dashboard.document_block;
  return (
    <div className="bg-white py-20 px-20 flex justify-center">
      <div className="flex flex-col gap-8 w-2/3">
        <h2 className="text-h2_desktop ">{title}</h2>
        <p className="">{text}</p>
        <Link
          href={button.link}
          className="bg-dashboard_primary text-white text-center py-2 px-12 rounded-full hover:opacity-70 duration-200 cursor-pointer z-10 relative  w-2/3 font-semibold"
        >
          {button.label}
        </Link>
      </div>
    </div>
  );
};

export default DocumentBlock;
