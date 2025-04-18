import React from "react";
import BottomInfo from "./BottomInfo";
import AllBuildings from "./Allbuildings";
import Buildingperformance from "./Buildingperformance";

export default function DashboardBottom() {
  return (
    <div className="py-7 px-5">
      <BottomInfo />
      <div>
        <Buildingperformance />
      </div>
      <AllBuildings />
    </div>
  );
}
