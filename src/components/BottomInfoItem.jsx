import React from "react";
import up from "./images/up.png";

export default function BottomInfoItem({ title, value, desc, icon }) {
  return (
    <div className="basis-[100%] bg-white rounded-lg shadow-lg py-6 px-6 sm:basis-[48%] xl:basis-[24%]">
      <div className="flex  justify-between">
        <div>
          <p className="text-[16px] font-medium text-[#202224] mb-3">{title}</p>
          <h1 className="text-[24px] font-semibold text-[#202224] mb-2">
            {value}
          </h1>
        </div>
        <div>
          <img src={icon} />
        </div>
      </div>
      <p className="flex font-normal text-[#606060] text-[16px] items-center gap-3">
        <img src={up} />
        {desc}
      </p>
    </div>
  );
}
