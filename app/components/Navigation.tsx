"use client";
import Image from "next/image";
import { useContext } from "react";
import { AptContext } from "../utils/createContext";
const Navigation = () => {
  const { visu, setVisu } = useContext(AptContext);

  const switchRight = () => {
    return visu < 1012 ? setVisu(visu + 1) : setVisu(1001);
  };

  const switchLeft = () => (visu > 1001 ? setVisu(visu - 1) : setVisu(1012));

  return (
    <div className="xl:absolute xl:bottom-8 right-16 flex flex-row gap-2 red">
      <button
        className="w-12 h-12 rounded-full bg-white flex place-items-center place-content-center "
        onClick={() => switchRight()}
      >
        <Image
          src="/icons/arrow_left.svg"
          width={12}
          height={12}
          alt="arrow left icon"
        />
      </button>
      <button
        className="w-12 h-12 rounded-full bg-white flex place-items-center place-content-center"
        onClick={() => switchLeft()}
      >
        <Image
          src="/icons/arrow_right.svg"
          width={12}
          height={12}
          alt="arrow right icon"
        />
      </button>
    </div>
  );
};

export default Navigation;
