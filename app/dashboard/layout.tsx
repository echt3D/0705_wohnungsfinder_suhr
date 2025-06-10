"use client";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import { useState } from "react";
import DashboardFooter from "../components/DashboardFooter";
import ApartmentProvider from "../components/ApartmentProvider";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [navIsClicked, setNavIsClicked] = useState(false);

  return (
    <ApartmentProvider>
      <DashboardHeader />

      <main className="flex w-full font-neue-kabel-regular text-body_desktop mt-header_desktop">
        <DashboardSidebar
          navIsClicked={navIsClicked}
          setNavIsClicked={setNavIsClicked}
        />
        <aside
          className={`absolute min-h-height_desktop left-dashboard_sidebar_width top-dashboard_header_height w-dashboard_closed_desktop overflow-scroll`}
        >
          {children}
          <DashboardFooter />
        </aside>
      </main>
    </ApartmentProvider>
  );
};

export default Layout;
