import { Slider } from "@heroui/slider";
import { Checkbox } from "@heroui/checkbox";

import { useContext } from "react";
import { ApartmentContext } from "../utils/createContext";

const Filter = () => {
  const { space, setSpace, getMinMax, rentalPrice, setRentalPrice } =
    useContext(ApartmentContext);

  const spaceMinMax = getMinMax("area");
  const rentalPriceMinMax = getMinMax("rentalPrice");
  return (
    <div className="w-full h-full bg-white red">
      <div className=" blue h-[90vh]">
        <div className="flex flex-col">
          <Checkbox radius="full">Wohnfläche</Checkbox>
          <Checkbox radius="full">Geschoss</Checkbox>
          <Checkbox radius="full">Zimmer</Checkbox>
        </div>
        <Slider
          label="Fläche (m²)"
          value={space}
          minValue={spaceMinMax[0]}
          maxValue={spaceMinMax[1]}
          size="md"
          step={1}
          hideThumb={false}
          onChange={setSpace}
        />
        <Slider
          label="Bruttomiete (CHF)"
          value={rentalPrice}
          minValue={rentalPriceMinMax[0]}
          maxValue={rentalPriceMinMax[1]}
          size="md"
          step={100}
          hideThumb={false}
          onChange={setRentalPrice}
        />
      </div>
    </div>
  );
};

export default Filter;
