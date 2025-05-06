import Image from "next/image";

const DashboardHeader = () => {
  return (
    <header className="bg-white px-12 flex justify-between items-center h-header_desktop  z-30 fixed top-0 w-screen">
      <Image
        src="/logos/echt3d_logo.svg"
        height={100}
        width={100}
        alt="echt3D logo"
      />
    </header>
  );
};

export default DashboardHeader;
