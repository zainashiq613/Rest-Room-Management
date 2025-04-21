import React, { useState } from "react";
import dropdown from "./images/drop-down.png";
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { day: "5 May", floor1: 45, floor2: 49, floor3: 12 },
  { day: "6 May", floor1: 23, floor2: 20, floor3: 23 },
  { day: "7 May", floor1: 50, floor2: 20, floor3: 23 },
  { day: "8 May", floor1: 18, floor2: 20, floor3: 34 },
  { day: "9 May", floor1: 41, floor2: 20, floor3: 12 },
  { day: "10 May", floor1: 33, floor2: 20, floor3: 23 },
  { day: "11 May", floor1: 26, floor2: 20, floor3: 12 },
  { day: "12 May", floor1: 29, floor2: 20, floor3: 35 },
  { day: "13 May", floor1: 49, floor2: 20, floor3: 34 },
  { day: "14 May", floor1: 9, floor2: 20, floor3: 48 },
  { day: "15 May", floor1: 15, floor2: 20, floor3: 28 },
  { day: "16 May", floor1: 21, floor2: 20, floor3: 49 },
  { day: "17 May", floor1: 34, floor2: 20, floor3: 36 },
];

export default function RestRoomsActivity() {
  const [hoveredLine, setHoveredLine] = useState(null);

  const handleLineHover = (line) => {
    setHoveredLine(line);
  };

  const handleLineLeave = () => {
    setHoveredLine(null);
  };

  return (
    <div className="basis-[68%] bg-white h-87 rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center">
        <div>
          <a href="#" className="flex items-center text-[#A449EB] text-[14px]">
            Building 1 <img src={dropdown} />
          </a>
          <h1 className="text-[24px] font-semi-bold"> Restrooms Activity </h1>
        </div>
        <div>
          <span className="flex border text-[#A449EB] py-1.5 px-2 rounded-md">
            This Month
            <img src={dropdown} />
          </span>
        </div>
      </div>
      <div className="w-full">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis
              interval={0}
              fontSize={11}
              dataKey="day"
              tickMargin={14}
              tickLine={false}
              axisLine={false}
            />
            <CartesianGrid opacity={0.3} vertical={false} />
            <YAxis
              tickCount={6}
              tickMargin={40}
              tickLine={false}
              axisLine={false}
            />

            {/* Floor 1 Line */}
            <Line
              strokeWidth={2.5}
              type="monotone"
              dot={false}
              dataKey="floor1"
              stroke={hoveredLine === "floor1" ? "#FF5733" : "#FE981C"} // Change color on hover
              onMouseEnter={() => handleLineHover("floor1")}
              onMouseLeave={handleLineLeave}
            />

            {/* Floor 2 Line */}
            <Line
              strokeWidth={2.5}
              type="monotone"
              dot={false}
              dataKey="floor2"
              stroke={hoveredLine === "floor2" ? "#3498db" : "#1F2253"} // Change color on hover
              onMouseEnter={() => handleLineHover("floor2")}
              onMouseLeave={handleLineLeave}
            />

            {/* Floor 3 Line */}
            <Line
              strokeWidth={2.5}
              type="monotone"
              dot={false}
              dataKey="floor3"
              stroke={hoveredLine === "floor3" ? "#FF6347" : "#FF4C85"} // Change color on hover
              onMouseEnter={() => handleLineHover("floor3")}
              onMouseLeave={handleLineLeave}
            />

            <Tooltip content={renderTooltip} />
            <Legend
              verticalAlign="top"
              height={32}
              iconType="square"
              align="center"
              wrapperStyle={{
                position: "absolute",
                top: "-19%",
                right: "-11%",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const renderTooltip = ({ active, payload }) => {
  if (active) {
    const value = payload[0].value;
    const label = payload[0].dataKey;

    return (
      <div className="bg-white py-3 px-4 rounded-xl shadow">
        <p className="text-[#7C8DB5]">{label}</p>
        <p className="flex items-center gap-1 text-[16px] font-bold">
          {value}% In Use
        </p>
      </div>
    );
  }

  return null;
};
