import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Buildingicon from "./buildingicon.png";
import vector from "./Vector.png";

const data = [
  { name: "Building 1", value: 70, color: "#a78bfa" }, // Purple
  { name: "Building 2", value: 36, color: "#fb923c" }, // Orange
  { name: "Building 3", value: 24, color: "#38bdf8" }, // Blue
];

const TopBuildingsChart = () => {
  return (
    <div className="p-6 basis-[30%] rounded-2xl bg-white shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <img src={Buildingicon} />
        <h2 className="text-lg font-semibold">Top Buildings</h2>
      </div>

      <div className="relative h-45">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={50}
              outerRadius={76}
              paddingAngle={5}
              startAngle={-20}
              endAngle={-380}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  cornerRadius={5}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-purple-600">
          <img src={vector} />
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-4 text-sm">
        {data.map((entry, index) => (
          <div className="flex items-center space-x-1" key={index}>
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className="text-[13px]">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBuildingsChart;
