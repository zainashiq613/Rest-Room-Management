import React from "react";
import BuildingItem from "./BuildingItem";
import buildingitem_1 from "./building-item-1.png";
import buildingitem_2 from "./building-item-2.png";
import buildingitem_3 from "./building-item-3.png";

export default function Allbuildings() {
  return (
    <div className="bg-white border border-[#63636321] px-3 py-6 mt-5 rounded-xl">
      <div className="flex justify-between">
        <h1 className="text-[#05004E] font-bold text-[20px]">All Buildings</h1>
        <a href="#" className="text-[#05004E99]">
          View all
        </a>
      </div>
      <div div className="grid grid-cols-3 grid-rows-1 gap-5">
        <BuildingItem
          address="Ayub street kotlakhpat, Lahore"
          title="Office Building"
          floorsvalue="05"
          restroomsvalue="03"
          src={buildingitem_1}
        />
        <BuildingItem
          address="Ayub street kotlakhpat, Lahore"
          title="Arfa Tower"
          floorsvalue="26"
          restroomsvalue="15"
          src={buildingitem_2}
        />
        <BuildingItem
          address="Ayub street kotlakhpat, Lahore"
          title="Tetratech"
          floorsvalue="06"
          restroomsvalue="14"
          src={buildingitem_3}
        />
      </div>
    </div>
  );
}
