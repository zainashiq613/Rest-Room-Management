import React from "react";
import PagesTop from "./PagesTop";
import DashboardBottom from "./DashboardBottom";

export default function Dashboard() {
  return (
    <div className="bg-[#F5F2FF] basis-[80%]">
      <PagesTop title="Dashboard" />
      <DashboardBottom />
    </div>
  );
}
