import { Slider } from "@heroui/slider";
import { RadioGroup, Radio } from "@heroui/react";
import { Checkbox } from "@heroui/react";
import { useContext } from "react";
import { ApartmentContext } from "../utils/createContext";
import { Apartment, SellingApartment, FilterType } from "../utils/types";
import Image from "next/image";
import t from "../data/text.json";

type FilterProps = {
  setOpenFilter: (filter: boolean) => void;
};

const Filter = ({ setOpenFilter }: FilterProps) => {
  const {
    rentalApartments,
    sellingApartments,
    activeApartments,
    rentalSpace,
    setRentalSpace,
    sellingSpace,
    setSellingSpace,
    getMinMax,
    rentalPrice,
    setRentalPrice,
    sellingPrice,
    setSellingPrice,
    filter,
    setFilter,
    activateLikedrentalApartments,
    setActivateLikedrentalApartments,
    isDescendent,
    setIsDescendent,
    sort,
    setSort,
  } = useContext(ApartmentContext);
  const {
    sort_label,
    sort_method,
    only_available,
    only_liked,
    reset_filter,
    show_results,
    floors_label,
    rooms_label,
    other_filtering,
  } = t.filter;

  const rentalSpaceMinMax = getMinMax(rentalApartments, "area");
  const rentalPriceMinMax = getMinMax(rentalApartments, "rentalgross");
  const sellingSpaceMinMax = getMinMax(sellingApartments, "area");
  const sellingPriceMinMax = getMinMax(sellingApartments, "selling_price");

  const createCheckboxes = (
    keyName: keyof (Apartment | SellingApartment)
  ): string[] => {
    const checkboxArr: string[] = [];

    for (const apartment of activeApartments === "mieten"
      ? rentalApartments
      : sellingApartments) {
      if (apartment.hasOwnProperty(keyName)) {
        const value = String(apartment[keyName]);
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

  const isRental = (): boolean =>
    "rentalgross" in
    (activeApartments === "mieten" ? rentalApartments : sellingApartments)[0];

  return (
    <div className="w-full xl:h-filter_desktop  fixed bottom-0  xl:absolute  xl:top-filter_top_desktop px-6 pt-2 left-0 z-20 bg-secondary">
      <div className="flex flex-col gap-8 bg-white px-4 py-4 rounded-2xl xl:rounded-none xl:py-2 h-full">
        <div className="flex justify-between">
          <RadioGroup label={sort_label} value={sort} onValueChange={setSort}>
            {sort_method.map((method, i) => (
              <Radio
                key={i}
                value={method.value}
                onChange={() => setSort(method.value)}
              >
                {method.label}
              </Radio>
            ))}
          </RadioGroup>
          <div className="h-full">
            <Image
              src="/icons/arrow.svg"
              height={20}
              width={20}
              alt="sort arrow"
              onClick={() => setIsDescendent(!isDescendent)}
              className={`cursor-pointer ${
                isDescendent ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>
        </div>
        <section className="flex flex-col gap-4">
          <Slider
            label="Fläche (m²)"
            value={isRental() ? rentalSpace : sellingSpace}
            minValue={isRental() ? rentalSpaceMinMax[0] : sellingSpaceMinMax[0]}
            maxValue={isRental() ? rentalSpaceMinMax[1] : sellingSpaceMinMax[1]}
            size="md"
            step={1}
            hideThumb={false}
            onChange={isRental() ? setRentalSpace : setSellingSpace}
          />
          <Slider
            label={`${
              isRental() ? "Bruttomiete (CHF)" : "Verkaufspreis (CHF)"
            }`}
            value={isRental() ? rentalPrice : sellingPrice}
            minValue={isRental() ? rentalPriceMinMax[0] : sellingPriceMinMax[0]}
            maxValue={isRental() ? rentalPriceMinMax[1] : sellingPriceMinMax[1]}
            size="md"
            step={1}
            hideThumb={false}
            onChange={isRental() ? setRentalPrice : setSellingPrice}
          />
        </section>
        <section className="flex flex-col gap-2">
          <p className="font-medium ">{floors_label}</p>

          <div className="grid grid-cols-2 gap-2">
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
        </section>
        <section className="flex flex-col gap-2">
          <p className="font-medium ">{rooms_label}</p>
          <div className="grid grid-cols-2 gap-2">
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
        </section>
        <section className="flex flex-col gap-2">
          <p className="font-medium">{other_filtering}</p>
          <Checkbox
            name={"state"}
            value={"frei"}
            onChange={handleCheckboxes}
            isSelected={isChecked("state", "frei")}
          >
            {only_available}
          </Checkbox>
          <Checkbox
            isSelected={activateLikedrentalApartments}
            onChange={() =>
              setActivateLikedrentalApartments(!activateLikedrentalApartments)
            }
          >
            {only_liked}
          </Checkbox>
        </section>
        <section className="flex flex-col gap-2 mt-auto">
          <button
            className="text-md font-semibold text-tertiary hover:opacity-80 duration-200 cursor-pointer"
            onClick={() => {
              setSort(null);
              setActivateLikedrentalApartments(false);
              setFilter({
                floor: [],
                rooms: [],
                state: [],
              });
            }}
          >
            {reset_filter}
          </button>
          <button
            className="bg-primary text-white px-2 py-4 font-medium hover:opacity-80 duration-200 cursor-pointer"
            onClick={() => setOpenFilter(false)}
          >{`${show_results} (${
            activeApartments === "mieten"
              ? rentalApartments.length
              : sellingApartments.length
          })`}</button>
        </section>
      </div>
    </div>
  );
};

export default Filter;
