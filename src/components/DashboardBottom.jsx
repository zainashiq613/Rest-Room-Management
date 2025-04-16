import React from "react";
import BottomInfo from "./BottomInfo";
import BuildingPerformance from "./BuildingPerformance";
import DonutChart from "./DonutChart";
import Allbuildings from "./Allbuildings";

export default function DashboardBottom() {
  return (
    <div className="py-7 px-5">
      <BottomInfo />
      <div className="flex justify-between gap-5 items-center">
        <BuildingPerformance />
        <DonutChart />
      </div>
      <Allbuildings />
    </div>
  );
}
