import React from "react";
import PagesTop from "./PagesTop";
import DashboardBottom from "./DashboardBottom";

export default function Dashboard() {
  return (
    <div className="bg-[#F5F2FF] basis-[100%]">
      <PagesTop title="Dashboard" />
      <DashboardBottom />
    </div>
  );
}
