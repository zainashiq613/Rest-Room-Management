import React from "react";
import used from "./images/used.png";
import UsedItem from "./UsedItem";

export default function MostUsed() {
  return (
    <div className="basis-[37%] bg-white p-6 rounded-xl shadow-lg">
      <h1 className="flex items-center gap-3 text-[20px] font-semibold ">
        <img src={used} />
        Most Used Restrooms
      </h1>
      <UsedItem room="Restroom 5" floor="Floor 2" />
      <UsedItem room="Restroom 8" floor="Floor 5" />
      <UsedItem room="Restroom 2" floor="Floor 2" />
    </div>
  );
}
