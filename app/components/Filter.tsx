import { Slider } from "@heroui/slider";
import { RadioGroup, Radio } from "@heroui/react";
import { useContext } from "react";
import { ApartmentContext } from "../utils/createContext";
import t from "../data/text.json";

const Filter = () => {
  const {
    apartments,
    space,
    setSpace,
    getMinMax,
    rentalPrice,
    setRentalPrice,
    sortDirection,
    sortByMethod,
  } = useContext(ApartmentContext);
  const { sort, sort_method } = t.filter;

  const spaceMinMax = getMinMax("area");
  const rentalPriceMinMax = getMinMax("rentalPrice");
  return (
    <div className="w-full h-full bg-white red">
      <div className=" blue h-[90vh]">
        <RadioGroup label={sort}>
          {sort_method.map((method, i) => (
            <Radio
              key={i}
              value={method.value}
              onChange={() =>
                sortByMethod(apartments, method.value, sortDirection)
              }
            >
              {method.label}
            </Radio>
          ))}
        </RadioGroup>

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
