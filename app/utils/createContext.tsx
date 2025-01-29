import { createContext } from "react";

interface Apt {
  visu: number;
  setVisu: (visu: number) => void;
}

export const AptContext = createContext<Apt>({
  // hoveredApt: {},
  // setHoveredApt: () => {},
  // clickedApt: {},
  // setClickedApt: () => {},
  // isHovered: () => {},
  visu: 1002,
  setVisu: () => {},
  // likedApts: [],
  // setLikedApts: () => {},
  // handleLikedApts: () => {},
  // isLikedApt: () => {},
  // sortApts: () => {},
  // handleSort: () => {},
  // sort: {},
  // setSort: () => {},
  // filterByRange: () => {},
  // price: [],
  // setPrice: () => {},
  // space: [],
  // setSpace: () => {},
  // checkbox: {},
  // setCheckbox: () => {},
  // handleCheckbox: () => {},
  // showSVG: "",
  // setShowSVG: () => {},
  // openDetail: "",
  // setOpenDetail: () => {},
  // activateLiked: "",
  // setActivateLiked: () => {},
  // apartments: [],
  // setApartments: () => {},
  // editApartment: "",
  // setEditApartment: () => {},
});
