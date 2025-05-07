import t from "../data/text.json";
import Image from "next/image";

const DashboardFooter = () => {
  const {
    title,
    text,
    company,
    address,
    phone,
    mobile,
    email,
    instagram,
    linkedin,
    website,
  } = t.dashboard.footer;
  return (
    <section className="bg-dashboard_primary text-white py-20 relative z-10">
      <div className="max-w-desktop mx-auto grid grid-cols-2 ">
        <aside className="w-full flex flex-col gap-8">
          <h2 className="text-h2_desktop ">{title}</h2>
          <div>
            <p>{text.one}</p>
            <p>{text.two}</p>
          </div>
        </aside>
        <aside className="w-full flex justify-end gap-12">
          <div className="flex flex-col items-end justify-between">
            <p>{company}</p>
            <p className="w-4/5 text-right">{address}</p>
            <div className="text-right">
              <p>{phone}</p>
              <p>{mobile}</p>
              <p>{email}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <a
              href={instagram}
              target="_blank"
              className="hover:opacity-70 duration-200"
            >
              <Image
                src="/icons/instagram.svg"
                width={32}
                height={32}
                alt="instagram icon"
              />
            </a>
            <a
              href={linkedin}
              target="_blank"
              className="hover:opacity-70 duration-200"
            >
              <Image
                src="/icons/linkedin.svg"
                width={32}
                height={32}
                alt="linkedin icon"
              />
            </a>
            <a
              href={website}
              target="_blank"
              className="hover:opacity-70 duration-200"
            >
              <Image
                src="/icons/echt3d.svg"
                width={36}
                height={36}
                alt="echt3d icon"
                className=""
              />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default DashboardFooter;
