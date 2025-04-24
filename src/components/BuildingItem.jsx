import React from "react";
import locationimg from "./images/location.png";
// import dots from "./images/dots.png";

export default function BuildingItem({
  address,
  title,
  floorsvalue,
  restroomsvalue,
  src,
}) {
  return (
    <div className="basis-[100%] h-fit xl:basis-[32%]">
      <div className="w-full ">
        <div>
          <img src={src} className="rounded-3xl w-[100%]" />
        </div>
      </div>
      <div className="bg-[#F7F7F7] py-4 px-3 relative bottom-20 rounded-t-3xl">
        <div className="flex justify-between">
          <div>
            <p className="flex items-center gap-1.5 text-[11px]">
              <img src={locationimg} />
              {address}
            </p>
            <h1 className="text-[18px] font-semibold">{title}</h1>
          </div>
          <a
            href="#"
            className="bg-[#078E9B] p-2 text-[12px] rounded-md self-start text-white"
          >
            Commercial
          </a>
        </div>
        <div className="flex w-full justify-between items-center mt-4">
          <div className="text-center basis-[47%] bg-[#E8E2FF] p-4 rounded-xl">
            <h1 className="font-bold text-[#A449EB] text-[20px]">
              {floorsvalue}
            </h1>
            <p className="text-[#11111199] text-[12px]">Number Of Floors</p>
          </div>
          <div className="text-center basis-[51%] bg-[#E8E2FF] p-4 rounded-xl">
            <h1 className="font-bold text-[#A449EB] text-[20px]">
              {restroomsvalue}
            </h1>
            <p className="text-[#11111199] text-[12px]">Number Of Restrooms</p>
          </div>
        </div>
      </div>
    </div>
  );
}
