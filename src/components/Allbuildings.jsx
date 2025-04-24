import React from "react";
import BuildingItem from "./BuildingItem";
import buildingitem_1 from "./images/building-item-1.png";
import buildingitem_2 from "./images/building-item-2.png";
import buildingitem_3 from "./images/building-item-3.png";

export default function Allbuildings() {
  return (
    <div className="bg-white border h-fit border-[#63636321] px-3 py-4 mt-5 rounded-xl shadow-xl xl:h-92">
      <div className="flex justify-between">
        <h1 className="text-[#05004E] font-bold text-[18px] xl:text-[24px] mb-5">
          All Buildings
        </h1>
        <a href="#" className="text-[#05004E99] text-[16px] xl:text-[18px]">
          View all
        </a>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-3">
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
