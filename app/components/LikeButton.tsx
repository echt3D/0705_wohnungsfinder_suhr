import { useContext } from "react";
import { ApartmentContext } from "../utils/createContext";

type LikeButtonProps = {
  apartment: string;
};

const LikeButton = ({ apartment }: LikeButtonProps) => {
  const { handleLikedrentalApartments, isLikedApartment } =
    useContext(ApartmentContext);
  return (
    <div
      onClick={() => handleLikedrentalApartments(apartment)}
      className={`w-8 h-8 p-1 xl:w-10 xl:h-10 flex place-items-center place-content-center border-2 hover:opacity-70  ${
        isLikedApartment(apartment) ? "border-[#FF5D47]" : "border-secondary"
      } rounded-full cursor-pointer`}
    >
      <svg viewBox="1 0 22 22" className="w-full h-full">
        <path
          fill={`${isLikedApartment(apartment) ? "#FF5D47" : "transparent"}`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1 18.2916L12 18.3896L11.9 18.2916C7.14 14.0638 4 11.2681 4 8.43324C4 6.47139 5.5 5 7.5 5C9.04 5 10.54 5.97112 11.07 7.31499H12.94C13.46 5.97112 14.96 5 16.5 5C18.5 5 20 6.47139 20 8.43324C20 11.2681 16.86 14.0638 12.1 18.2916Z"
        ></path>
        <path
          fill="#FF5D47"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 5.05014C13.09 3.79455 14.76 3 16.5 3C19.58 3 22 5.37384 22 8.3951C22 12.1 18.6056 15.1193 13.4627 19.6939L13.45 19.7052L12 21L10.55 19.715L10.5105 19.6798C5.38263 15.1088 2 12.0935 2 8.3951C2 5.37384 4.42 3 7.5 3C9.24 3 10.91 3.79455 12 5.05014ZM12 18.3515L12.1 18.2534C16.86 14.0256 20 11.23 20 8.3951C20 6.43324 18.5 4.96185 16.5 4.96185C14.96 4.96185 13.46 5.93297 12.94 7.27684H11.07C10.54 5.93297 9.04 4.96185 7.5 4.96185C5.5 4.96185 4 6.43324 4 8.3951C4 11.23 7.14 14.0256 11.9 18.2534L12 18.3515Z"
        ></path>
      </svg>
    </div>
  );
};

export default LikeButton;
