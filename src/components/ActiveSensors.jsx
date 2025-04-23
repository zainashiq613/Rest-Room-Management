import React from "react";
import active from "./images/error.png";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
const data = [
  {
    name: "Queuing",
    value: 31,
    fill: "#FF5248",
  },
  {
    name: "Flow Count",
    value: 26,
    fill: "#00D1FF",
  },
  {
    name: "Stall Occupancy",
    value: 15,
    fill: "#00AF95",
  },
  {
    name: "Toilet Paper",
    value: 0,
    fill: "#7A5AF8",
  },
  {
    name: "Water Leakage",
    value: 0,
    fill: "#FAD85D",
  },
];
export default function ActiveSensors() {
  return (
    <div className="basis-[32%] mt-5 h-98 bg-white rounded-xl shadow-lg py-3 px-4">
      <div>
        <h1 className="flex items-center gap-2 text-[20px] font-bold">
          <img src={active} />
          ActiveSensors
        </h1>
      </div>
      <ResponsiveContainer className="mt-[-30px]" height={310}>
        <RadialBarChart barSize={13} data={data}>
          <RadialBar
            cornerRadius={10}
            innerRadius={10}
            minAngle={25}
            background={{ fill: "#ffffff" }}
            startAngle={0}
            endAngle={360}
            dataKey="value"
          />
          <Legend content={customLegend} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-[22px] font-bold text-[#030229]">
        99%
      </div>
    </div>
  );
}

function customLegend() {
  return (
    <div className="w-[100%] flex flex-wrap relative top-13 justify-center gap-3">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.fill }}
          ></div>
          <span className="text-[14px] text-[#030229]">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
