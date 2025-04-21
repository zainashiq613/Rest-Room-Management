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
    uv: 39,
    pv: 2400,
    fill: "#FF5248",
  },
  {
    name: "Flow Count",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "Stall Occupancy",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "Toilet Paper",
  },
  {
    name: "Water Leakage",
  },
];
export default function ActiveSensors() {
  return (
    <div className="basis-[32%] h-94 bg-white rounded-xl shadow-lg py-3 px-4">
      <div>
        <h1 className="flex items-center gap-2 text-[20px] font-bold">
          <img src={active} />
          ActiveSensors
        </h1>
      </div>
      <ResponsiveContainer height={280} className="border">
        <RadialBarChart
          innerRadius={"50%"}
          outerRadius={"80%"}
          barSize={12}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="uv"
          />
          {/* <Legend iconSize={10} fontSize={10} iconType="circle" /> */}
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
