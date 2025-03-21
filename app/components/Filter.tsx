import { Slider } from "@heroui/slider";

type FilterProps = {
  spaceMinMax: number[];
  space: number[] | number;
  setSpace: (space: number[] | number) => void;
};

const Filter = ({ spaceMinMax, space, setSpace }: FilterProps) => {
  return (
    <div className="w-full h-full bg-white red">
      <div className=" blue h-[90vh]">
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
      </div>
    </div>
  );
};

export default Filter;
