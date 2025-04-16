import React from "react";
import BottomInfoItem from "./BottomInfoItem";
import infobuildingicon from "./info-building-Icon.png";
import inforestroomicon from "./info-rest-room-icon.png";
import infosensoricon from "./info-sensor-icon.png";
import infosubscriptionicon from "./info-subscription-icon.png";

export default function BottomInfo() {
  return (
    <div className="flex justify-between items-center mb-5">
      <BottomInfoItem
        title={"Total Buildings"}
        value={125}
        icon={infobuildingicon}
        desc={"8.5% Up from yesterday"}
      />
      <BottomInfoItem
        title={"Total Restrooms"}
        value={125}
        icon={inforestroomicon}
        desc={"8.5% Up from yesterday"}
      />
      <BottomInfoItem
        title={"Total Buildings"}
        value={250}
        icon={infosensoricon}
        desc={"8.5% Up from yesterday"}
      />
      <BottomInfoItem
        title={"Total Buildings"}
        value={125}
        icon={infosubscriptionicon}
        desc={"8.5% Up from yesterday"}
      />
    </div>
  );
}
