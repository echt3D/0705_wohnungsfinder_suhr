"use client";
import { Apartment } from "../utils/types";
import t from "../data/text.json";

type EditApartmentPopupProps = {
  apartment: Apartment;
};

const EditApartmentPopup = ({ apartment }: EditApartmentPopupProps) => {
  const { title } = t.dashboard.edit_popup;

  return (
    <section className="fixed top-0 left-0 w-screen h-screen z-40 bg-dashboard_primary bg-opacity-70">
      <div className="max-w-desktop mx-auto flex justify-center items-center h-full">
        <div className="bg-white w-full h-[50vh] rounded-2xl flex flex-col items-center">
          <h2 className="text-h3_desktop text-dashboard_secondary red">
            {title}
          </h2>
          <p className="text-h3_desktop">{apartment.name}</p>
        </div>
      </div>
    </section>
  );
};

export default EditApartmentPopup;
