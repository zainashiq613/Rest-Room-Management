import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import building from "./images/buildingicon.png";
import vector from "./images/Vector.png";

const data = [
  { name: "Building 1", value: 70 },
  { name: "Building 2", value: 26 },
  { name: "Building 3", value: 14 },
];

export default function TopBuildings() {
  return (
    <div className="relative bg-white basis-[30%] h-[344px] rounded-xl py-3 px-4 shadow-lg">
      <h1 className="flex items-center text-[20px] font-bold gap-2">
        <img src={building} alt="building icon" className="w-6 h-6" />
        Top Buildings
      </h1>
      <img
        src={vector}
        alt="background vector"
        className="absolute top-[40%] left-1/2 transform -translate-x-1/2"
      />

      <ResponsiveContainer className="mt-4" width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            cornerRadius={7}
            paddingAngle={5}
            startAngle={340}
            endAngle={-270}
            dataKey="value"
          >
            <Cell fill="#7A5AF8" />
            <Cell fill="#FF955A" />
            <Cell fill="#34C1FD" />
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
