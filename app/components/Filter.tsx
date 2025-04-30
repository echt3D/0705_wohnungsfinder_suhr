import { Slider } from "@heroui/slider";
import { RadioGroup, Radio } from "@heroui/react";
import { Checkbox } from "@heroui/react";
import { useContext } from "react";
import { ApartmentContext } from "../utils/createContext";
import { Apartment, FilterType } from "../utils/types";
import Image from "next/image";
import t from "../data/text.json";

type FilterProps = {
  setOpenFilter: (filter: boolean) => void;
};

const Filter = ({ setOpenFilter }: FilterProps) => {
  const {
    apartments,
    space,
    setSpace,
    getMinMax,
    rentalPrice,
    setRentalPrice,
    filter,
    setFilter,
    filterTargetApartments,
  } = useContext(ApartmentContext);
  const {
    sort,
    sort_method,
    only_available,
    only_liked,
    reset_filter,
    show_results,
  } = t.filter;

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

  const isChecked = (name: string, value: string) =>
    (filter[name as keyof FilterType] as string[]).includes(value);

  return (
    <div className="w-full h-full bg-white red">
      <div className=" blue flex flex-col">
        <div className="flex justify-between">
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
              isSelected={isChecked("floor", floorItem)}
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
              value={roomsItem}
              onChange={handleCheckboxes}
              isSelected={isChecked("rooms", `${roomsItem}`)}
            >{`${roomsItem} Zimmer`}</Checkbox>
          ))}
        </div>

        <Checkbox
          name={"state"}
          value={"frei"}
          onChange={handleCheckboxes}
          isSelected={isChecked("state", "frei")}
        >
          {only_available}
        </Checkbox>
        <Checkbox>{only_liked}</Checkbox>
        <button
          onClick={() =>
            setFilter({
              floor: [],
              rooms: [],
              state: [],
            })
          }
        >
          {reset_filter}
        </button>
        <button onClick={() => setOpenFilter(false)}>{`${show_results} (${
          filterTargetApartments(apartments).length
        })`}</button>
      </div>
    </div>
  );
};

export default Filter;
