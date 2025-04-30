import { Slider } from "@heroui/slider";
import { RadioGroup, Radio } from "@heroui/react";
import { Checkbox } from "@heroui/react";
import { useContext } from "react";
import { ApartmentContext } from "../utils/createContext";
import { Apartment, FilterType } from "../utils/types";
import Image from "next/image";
import t from "../data/text.json";

const Filter = () => {
  const {
    apartments,
    space,
    setSpace,
    getMinMax,
    rentalPrice,
    setRentalPrice,
    filter,
    setFilter,
  } = useContext(ApartmentContext);
  const { sort, sort_method, only_available, only_liked } = t.filter;

  const spaceMinMax = getMinMax("area");
  const rentalPriceMinMax = getMinMax("rentalPrice");

  const createCheckboxes = (keyName: string): string[] => {
    const checkboxArr: string[] = [];

    for (const apartment of apartments) {
      if (apartment.hasOwnProperty(keyName)) {
        const value = String(apartment[keyName as keyof Apartment]);
        if (!checkboxArr.includes(value)) {
          checkboxArr.push(value);
        }
      }
    }
    return checkboxArr;
  };

  const handleCheckboxes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const current = filter[name as keyof FilterType] as string[];

    if (Array.isArray(current)) {
      if (!current.includes(value)) {
        setFilter({ ...filter, [name]: [...current, value] });
      } else {
        const filteredCheckBox = current.filter((checked) => checked !== value);
        setFilter({ ...filter, [name]: filteredCheckBox });
      }
    }
  };

  return (
    <div className="w-full h-full bg-white red">
      <div className=" blue h-[90vh]">
        <div className="flex  justify-between">
          <RadioGroup label={sort}>
            {sort_method.map((method, i) => (
              <Radio key={i} value={method.value}>
                {method.label}
              </Radio>
            ))}
          </RadioGroup>
          <div className="h-full">
            <Image
              src="/icons/arrow.svg"
              height={24}
              width={24}
              alt="sort arrow"
            />
          </div>
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
        <div className="grid grid-cols-2">
          {createCheckboxes("floor").map((floorItem, i) => (
            <Checkbox
              key={i}
              name={"floor"}
              value={floorItem}
              onChange={handleCheckboxes}
            >
              {floorItem}
            </Checkbox>
          ))}
        </div>
        <div className="grid grid-cols-2">
          {createCheckboxes("rooms").map((roomsItem, i) => (
            <Checkbox
              name={"rooms"}
              key={i}
              onChange={handleCheckboxes}
            >{`${roomsItem} Zimmer`}</Checkbox>
          ))}
        </div>

        <Checkbox>{only_available}</Checkbox>
        <Checkbox>{only_liked}</Checkbox>
      </div>
    </div>
  );
};

export default Filter;
