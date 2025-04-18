import React from "react";
import locationimg from "./images/location.png";
import dots from "./images/dots.png";

export default function BuildingItem({
  address,
  title,
  floorsvalue,
  restroomsvalue,
  src,
}) {
  return (
    <div className="basis-[33%] h-84 mt-4">
      <div>
        <img src={src} className="rounded-3xl" />
        <a href="#">
          <img src={dots} className="relative" />
        </a>
      </div>
      <div className="bg-[#F7F7F7] py-4 px-3 relative bottom-20 rounded-t-3xl">
        <div className="flex justify-between">
          <div>
            <p className="flex items-center gap-1.5 text-[12px]">
              <img src={locationimg} />
              {address}
            </p>
            <h1 className="text-[20px] font-bold">{title}</h1>
          </div>
          <a
            href="#"
            className="bg-[#078E9B] p-2.5 rounded-xl self-start text-white"
          >
            Commercial
          </a>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-center basis-[47%] bg-[#E8E2FF] p-4 rounded-xl">
            <h1 className="font-bold text-[#A449EB] text-[24px]">
              {floorsvalue}
            </h1>
            <p className="text-[#11111199] text-[13px]">Number Of Floors</p>
          </div>
          <div className="text-center basis-[51%] bg-[#E8E2FF] p-4 rounded-xl">
            <h1 className="font-bold text-[#A449EB] text-[24px]">
              {restroomsvalue}
            </h1>
            <p className="text-[#11111199] text-[12px]">Number Of Restrooms</p>
          </div>
        </div>
      </div>
    </div>
  );
}
