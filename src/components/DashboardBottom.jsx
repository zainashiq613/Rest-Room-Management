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
    <div className="py-4 px-2 h-[73vh] overflow-auto w-[100%] overflow-x-hidden fixed sm:py-5 sm:px-7 lg:relative xl:py-5 xl:px-4">
      <BottomInfo />
      <div className="flex gap-5 flex-wrap justify-between items-center">
        <Buildingperformance />
        <TopBuildings />
      </div>
      <div className="flex items-center flex-wrap justify-between gap-5">
        <UserEngagement />
        <RestroomsPerformance />
        <ActiveSensors />
      </div>
      <div className="mt-5 flex flex-wrap justify-between items-center gap-5">
        <RestRoomsActivity />
        <MostUsed />
      </div>
      <AllBuildings />
    </div>
  );
}
