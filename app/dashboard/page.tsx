"use client";
import DashboardMain from "../components/DashboardMain";
import RealTimeBlock from "../components/RealTimeBlock";
import StatisticBlock from "../components/StatisticBlock";

export default function Dashboard() {
  return (
    <>
      <DashboardMain />
      <RealTimeBlock />
      <StatisticBlock />
    </>
  );
}
