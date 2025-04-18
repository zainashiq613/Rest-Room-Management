import React from "react";
import usedgraph from "./usedgraph.png";
import down from "./down.png";

export default function UsedItem({ room, floor }) {
  return (
    <div className="flex justify-between items-center py-4 mt-2 border-b border-[#97979780]">
      <div>
        <h1 className="font-bold">{room}</h1>
        <p>{floor}</p>
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
