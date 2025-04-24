import React from "react";
import BottomInfo from "./BottomInfo";
import AllBuildings from "./Allbuildings";
import Buildingperformance from "./Buildingperformance";
import TopBuildings from "./TopBuildings";
import UserEngagement from "./UserEngagement";
import MostUsed from "./MostUsed";
import RestRoomsActivity from "./RestRoomsActivity";
import RestroomsPerformance from "./RestroomsPerformance";
import ActiveSensors from "./ActiveSensors";

export default function DashboardBottom() {
  return (
    <div className="py-7 px-5 h-[70vh] overflow-auto w-[80%] overscroll-y-contain top-[27.2%] fixed">
      <BottomInfo />
      <div className="flex gap-5 justify-between items-center">
        <Buildingperformance />
        <TopBuildings />
      </div>
      <div className="flex items-center justify-between">
        <UserEngagement />
        <RestroomsPerformance />
        <ActiveSensors />
      </div>
      <div className="mt-5 flex justify-between items-center gap-5">
        <RestRoomsActivity />
        <MostUsed />
      </div>
      <AllBuildings />
    </div>
  );
}
