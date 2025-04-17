import React from "react";
import BottomInfo from "./BottomInfo";
import BuildingPerformance from "./BuildingPerformance";
import DonutChart from "./DonutChart";
import Allbuildings from "./Allbuildings";
// import UserEngagement from "./UserEngagement";
import RestroomsPerformance from "./RestroomsPerformance";
// import ActiveSensors from "./ActiveSensors";

export default function DashboardBottom() {
  return (
    <div className="py-7 px-5">
      <BottomInfo />
      <BuildingPerformance />
      <DonutChart />
      <RestroomsPerformance />
      <Allbuildings />
    </div>
  );
}
