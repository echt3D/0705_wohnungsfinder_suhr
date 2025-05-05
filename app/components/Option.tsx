"use client";
import Image from "next/image";
import { useState, useContext } from "react";
import { ApartmentContext } from "../utils/createContext";
import { Switch } from "@heroui/switch";
import t from "../data/text.json";

const Option = () => {
  const { showSVG, setShowSVG } = useContext(ApartmentContext);
  const [openOption, setOpenOption] = useState(false);
  const { option, show_availability } = t.option;

  return (
    <>
      <div className="bg-white w-option_switch cursor-pointer">
        <div
          className="flex place-items-center place-content-center gap-2 "
          onClick={() => setOpenOption(!openOption)}
        >
          <div className="border-4 rounded-full p-2">
            <Image
              src="/icons/option.svg"
              width={24}
              height={24}
              alt="option icon"
            />
          </div>
          <div>
            <Image
              src="/icons/triangle.svg"
              width={12}
              height={12}
              alt="triangle icon"
              className={`${openOption ? "rotate-180" : "rotate-0"}`}
            />
          </div>
        </div>
      </div>
      {openOption && (
        <div className="w-fit h-option_switch absolute z-10 top-24 right-12 bg-white ml-8 p-6 rounded-2xl flex flex-col justify-center text-text_primary font-neue-kabel-regular shadow-xl">
          <p>{option}</p>
          <div className="flex gap-2 items-center">
            <p>{show_availability}</p>
            <Switch
              defaultSelected
              size="sm"
              color="default"
              isSelected={showSVG}
              onValueChange={() => setShowSVG(!showSVG)}
            ></Switch>
          </div>
        </div>
      )}
    </>
  );
};

export default Option;
