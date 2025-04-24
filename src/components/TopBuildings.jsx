import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import building from "./images/buildingicon.png";
import vector from "./images/Vector.png";

const data = [
  { label: "Building 1", color: "#7A5AF8", value: 70 },
  { label: "Building 2", color: "#FF955A", value: 26 },
  { label: "Building 3", color: "#34C1FD", value: 14 },
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
            label={renderCustomizedLabel}
            labelLine={false}
            data={data}
            innerRadius={60}
            outerRadius={90}
            cornerRadius={7}
            paddingAngle={5}
            startAngle={340}
            endAngle={-270}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend content={customLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

function customLegend() {
  return (
    <div className="ml-[-12px] w-[110%] flex text-center gap-3">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.color }}
          ></div>
          <span className="text-[13px]">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

// Custom label function
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const x = 2 + cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight="700"
    >
      {`${data[index].value}%`}
    </text>
  );
};
