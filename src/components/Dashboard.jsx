import React from "react";
import DashboardTop from "./DashboardTop";
import DashboardBottom from "./DashboardBottom";

export default function Dashboard() {
  return (
    <div className="bg-[#F5F2FF]">
      <DashboardTop />
      <DashboardBottom />
    </div>
  );
}
