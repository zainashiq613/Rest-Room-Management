import React from "react";
import BottomInfo from "./BottomInfo";
import AllBuildings from "./Allbuildings";
import Buildingperformance from "./Buildingperformance";
import TopBuildings from "./TopBuildings";
import UserEngagement from "./UserEngagement";
import MostUsed from "./MostUsed";
import RestRoomsActivity from "./RestRoomsActivity";

export default function DashboardBottom() {
  return (
    <div className="py-7 px-5">
      <BottomInfo />
      <div>
        <Buildingperformance />
        <TopBuildings />
      </div>
      <div>
        <UserEngagement />
      </div>
      <div>
        <RestRoomsActivity />
        <MostUsed />
      </div>
      <AllBuildings />
    </div>
  );
}
