import t from "../data/text.json";

interface FilterButtonProps {
  openFilter: boolean;
  setOpenFilter: (openFilter: boolean) => void;
}

const FilterButton = ({ openFilter, setOpenFilter }: FilterButtonProps) => {
  const { sort_filter } = t.filter;
  return (
    <section
      onClick={() => setOpenFilter(!openFilter)}
      className={`w-fit md:w-1/4 xl:w-full shadow-xl border bg-secondary rounded-lg flex justify-between items-center cursor-pointer p-4 text-text_primary h-filter_button_desktop
      }`}
    >
      <div className="flex gap-2 items-center">
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          className="fill-text_primary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.84523 9.54405C9.05359 9.73215 9.16785 9.98105 9.16785 10.2356V17.7634C9.16785 18.2156 9.82205 18.4474 10.2074 18.1282L12.7167 15.7209C13.0527 15.3827 13.2387 15.2174 13.2387 14.883V10.2375C13.2387 9.98295 13.3552 9.73595 13.5613 9.54595L20.7621 3.00615C21.302 2.51595 20.8853 1.71985 20.0877 1.71985H2.31887C1.52128 1.71985 1.10456 2.51405 1.6445 3.00615L8.84523 9.54405Z" />
        </svg>
        <div className="hidden md:block">
          <p className="text-sm">{sort_filter}</p>
        </div>
      </div>
      <div className="hidden md:block">
        <svg
          width="8"
          height="6"
          viewBox="0 0 10 6"
          xmlns="http://www.w3.org/2000/svg"
          className={`fill-text_primary 
            ${openFilter ? "rotate-180" : "rotate-0"}
          `}
        >
          <path d="M0.240397 1.70347L4.42338 5.7685C4.58337 5.92391 4.79168 6 5 6C5.20832 6 5.4183 5.92229 5.57662 5.7685L9.76127 1.70347C10.0796 1.39427 10.0796 0.892412 9.76127 0.581585L9.4013 0.231906C9.08299 -0.0773019 8.56637 -0.0773019 8.2464 0.231906L5.57662 2.82536C5.41663 2.98078 5.20832 3.05686 5 3.05686C4.79168 3.05686 4.5817 2.97916 4.42338 2.82536L1.75194 0.231905C1.43363 -0.0773022 0.917007 -0.0773022 0.597033 0.231905L0.237064 0.581585C-0.0795756 0.892411 -0.0795756 1.39427 0.240397 1.70347Z" />
        </svg>
      </div>
    </section>
  );
};

export default FilterButton;
