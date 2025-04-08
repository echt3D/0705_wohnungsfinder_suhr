"use client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wohnungsfinder from "./components/Wohnungsfinder";
import Navigation from "./components/Navigation";
import t from "./data/text.json";

// type Checkbox = {
//   floor: string[];
//   rooms: string[];
//   state: string[];
// };

// const initCheckbox: Checkbox = {
//   floor: [],
//   rooms: [],
//   state: [],
// };

export default function Home() {
  // const [checkbox, setCheckbox] = useState<Checkbox>(initCheckbox);

  // const filterByRange = (
  //   apartments: Apartment[],
  //   category: string,
  //   min: number,
  //   max: number
  // ) =>
  //   apartments.filter(
  //     (apartment) =>
  //       (apartment[category as keyof Apartment] as number) >= min &&
  //       (apartment[category as keyof Apartment] as number) <= max
  //   );

  // const filterByCheckbox = (apartments: Apartment[], category: string) => {
  //   if (checkbox?.[category as keyof Checkbox].length) {
  //     return apartments.filter((apartment) => {
  //       const targetValue = apartment?.[category as keyof Apartment];
  //       const valueString = targetValue !== null ? String(targetValue) : "";

  //       if (checkbox?.[category as keyof Checkbox].includes(valueString)) {
  //         return apartment;
  //       }
  //     });
  //   } else {
  //     return apartments;
  //   }
  // };

  // const sortApartments = (
  //   apartments: Apartment[],
  //   category: string,
  //   direction: string
  // ) => {
  //   const apartmentsCopy = [...apartments];

  //   const filteredBySpace = filterByRange(
  //     apartmentsCopy,
  //     "area",
  //     (space as number[])[0],
  //     (space as number[])[1]
  //   );

  //   const filteredByFloor = filterByCheckbox(filteredBySpace, "floor");
  //   const filteredByRooms = filterByCheckbox(filteredByFloor, "rooms");
  //   const filteredByStatus = filterByCheckbox(
  //     filteredByRooms,
  //     "stateSimplyfied"
  //   );
  //   return filteredBySpace;
  // };

  return (
    <>
      <Header />
      <main className="w-screen h-desktop flex place-items-center place-content-center">
        <Sidebar t={t} />
        <aside className="h-full w-desktop">
          <Wohnungsfinder />
          <Navigation />
        </aside>
      </main>
    </>
  );
}
