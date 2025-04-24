import React from "react";
import BottomInfoItem from "./BottomInfoItem";
import infobuildingicon from "./images/info-building-Icon.png";
import inforestroomicon from "./images/info-rest-room-icon.png";
import infosensoricon from "./images/info-sensor-icon.png";
import infosubscriptionicon from "./images/info-subscription-icon.png";

export default function BottomInfo() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
      <BottomInfoItem
        title={"Total Buildings"}
        value={125}
        icon={infobuildingicon}
        desc={"8.5% Up from yesterday"}
      />
      <BottomInfoItem
        title={"Total Restrooms"}
        value={250}
        icon={inforestroomicon}
        desc={"8.5% Up from yesterday"}
      />
      <BottomInfoItem
        title={"Total Sensors"}
        value={350}
        icon={infosensoricon}
        desc={"8.5% Up from yesterday"}
      />
      <BottomInfoItem
        title={"Total Subscriptions"}
        value={50}
        icon={infosubscriptionicon}
        desc={"8.5% Up from yesterday"}
      />
    </div>
  );
}
