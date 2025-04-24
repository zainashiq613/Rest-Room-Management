import React from "react";
import used from "./images/used.png";
import UsedItem from "./UsedItem";

export default function MostUsed() {
  return (
    <div className="basis-[100%] bg-white p-3 rounded-xl shadow-lg xl:basis-[26%] xl:h-91">
      <h1 className="flex items-center gap-3 text-[18px] font-semibold xl:text-[20px]">
        <img src={used} />
        Most Used Restrooms
      </h1>
      <UsedItem room="Restroom 5" floor="Floor 2" />
      <UsedItem room="Restroom 8" floor="Floor 5" />
      <UsedItem room="Restroom 2" floor="Floor 2" />
    </div>
  );
}
