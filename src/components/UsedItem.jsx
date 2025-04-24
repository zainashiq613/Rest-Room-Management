import React from "react";
import usedgraph from "./images/usedgraph.png";
import down from "./images/down.png";

export default function UsedItem({ room, floor }) {
  return (
    <div className="flex justify-between items-center py-4 mt-2 border-b border-[#97979780]">
      <div>
        <h1 className="font-bold text-[13px] xl:text-[16px]">{room}</h1>
        <p className="text-[13px] xl:text-[17px]">{floor}</p>
      </div>
      <div className="self-baseline-last">
        <img src={usedgraph} />
      </div>
      <div>
        <p className="flex items-center gap-3 font-bold">
          50% <img src={down} />
        </p>
      </div>
    </div>
  );
}
