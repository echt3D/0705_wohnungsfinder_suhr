import Image from "next/image";
import Option from "./Option";

const Header = () => {
  return (
    <header className="bg-white px-12 flex justify-between items-center h-header_desktop">
      <Image
        src="/logos/allreal_bama_logo_black_rgb_100.svg"
        height={100}
        width={100}
        alt="echt3D logo"
      />

      <Option />
    </header>
  );
};

export default Header;
