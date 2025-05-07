"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DashboardIcon from "./DashboardIcon";
import ApartmentIcon from "./ApartmentIcon";
import t from "../data/text.json";

type DashboardSidebarProps = {
  navIsClicked: boolean;
  setNavIsClicked: (navIsClicked: boolean) => void;
};

const DashboardSidebar = ({
  navIsClicked,
  setNavIsClicked,
}: DashboardSidebarProps) => {
  const { dashboard, apartment } = t.dashboard.sidebar;
  const path = usePathname();
  const navIsActive = (pathname: string) => pathname === path;

  return (
    <aside
      className={`h-full w-full fixed left-0  flex  ${
        navIsClicked ? "z-20" : "z-10"
      } `}
    >
      <nav
        className={`${
          navIsClicked
            ? "w-dashboard_sidebar_open_desktop"
            : "w-dashboard_sidebar_closed_desktop"
        } h-full bg-dashboard_primary py-12 px-4 transition-all duration-500 ease-in-out shadow-custom_sidebar`}
      >
        <ul className="flex flex-col gap-12">
          <li
            className={`relative w-full cursor-pointer`}
            onClick={() => setNavIsClicked(!navIsClicked)}
          >
            {!navIsClicked && (
              <div className="w-full absolute top-0 h-full"></div>
            )}
            <Link
              href="/dashboard"
              className={`flex gap-4 w-full ${
                navIsClicked ? "" : "place-content-center"
              }`}
            >
              <DashboardIcon navIsActive={navIsActive("/dashboard")} />
              {navIsClicked && (
                <span
                  className={`font-neue-kabel-medium text-h5_desktop ${
                    navIsActive("/dashboard")
                      ? "text-text_secondary"
                      : "text-text_tertiary"
                  }`}
                >
                  {dashboard}
                </span>
              )}
            </Link>
          </li>

          <li
            className={`relative w-full flex place-items-center place-content-center cursor-pointer`}
            onClick={() => setNavIsClicked(!navIsClicked)}
          >
            {!navIsClicked && (
              <div className="w-full absolute top-0 h-full"></div>
            )}
            <Link
              href="/dashboard/apartments"
              className={`flex gap-4 w-full ${
                navIsClicked ? "" : "place-content-center"
              }`}
            >
              <ApartmentIcon
                navIsActive={navIsActive("/dashboard/apartments")}
              />
              {navIsClicked && (
                <span
                  className={`font-neue-kabel-medium text-h5_desktop ${
                    navIsActive("/dashboard/apartments")
                      ? "text-text_secondary"
                      : "text-text_tertiary"
                  }`}
                >
                  {apartment}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`${
          navIsClicked
            ? "w-dashboard_open_desktop bg-opacity-80"
            : "w-0 bg-opacity-0"
        } h-full bg-dashboard_primary  transition-all duration-100 ease-in-out`}
      ></div>
    </aside>
  );
};

export default DashboardSidebar;
