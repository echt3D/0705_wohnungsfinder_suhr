"use client";
import DashboardMain from "../components/DashboardMain";
import RealTimeBlock from "../components/RealTimeBlock";
import StatisticBlock from "../components/StatisticBlock";
import ApartmentOverviewBlock from "../components/ApartmentOverviewBlock";
import DocumentBlock from "../components/DocumentBlock";
import MediaBlock from "../components/MediaBlock";

export default function Dashboard() {
  return (
    <>
      <DashboardMain />
      <RealTimeBlock />
      <StatisticBlock />
      <section className="grid grid-cols-2">
        <ApartmentOverviewBlock />
        <DocumentBlock />
      </section>
      <MediaBlock />
    </>
  );
}
