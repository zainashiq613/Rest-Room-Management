import React from "react";
import up from "./up.png";

export default function BottomInfoItem({ title, value, desc, icon }) {
  return (
    <div className="bg-white rounded-xl box-shadow-lg p-6">
      <div className="flex  justify-between">
        <div>
          <p className="text-[16px] mb-3">{title}</p>
          <h1 className="text-[24px] font-bold mb-2">{value}</h1>
        </div>
        <div>
          <img src={icon} />
        </div>
      </div>
      <p className="flex items-center gap-3">
        <img src={up} />
        {desc}
      </p>
    </div>
  );
}
