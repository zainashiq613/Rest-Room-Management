// src/components/TopBuildings.jsx
import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import buildingicon from "./buildingicon.png";
import vector from "./Vector.png";

const data = [
  { name: "Building 1", value: 70, color: "#8B5CF6" },
  { name: "Building 2", value: 26, color: "#FB923C" },
  { name: "Building 3", value: 14, color: "#38BDF8" },
];

const TopBuildings = () => {
  return (
    <div className="basis-[31%] rounded-2xl shadow-lg p-6 bg-white">
      <div className="flex items-center gap-2 mb-6">
        <img src={buildingicon} />
        <h2 className="text-lg font-semibold">Top Buildings</h2>
      </div>

      <div className="relative flex justify-center items-center">
        <PieChart width={220} height={220}>
          <Pie
            data={data}
            innerRadius={59}
            outerRadius={90}
            dataKey="value"
            startAngle={330}
            endAngle={-360}
            paddingAngle={5}
            labelLine={false}
            cornerRadius={7}
            label={({ value, cx, cy, midAngle }) => {
              const RADIAN = Math.PI / 180;
              const radius = 75;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={12}
                  fontWeight="bold"
                >
                  {`${value}%`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute">
          <img src={vector} />
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4 text-sm">
        {data.map((entry, index) => (
          <div className="flex items-center gap-2" key={index}>
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className="text-[11px]">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBuildings;
