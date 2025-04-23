import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dropdown from "./images/drop-down.png";
import up from "./images/up.png";

const data = [
  {
    day: "1",
    value: 0,
    date: "2024-07-01",
  },
  {
    day: "2",
    value: 15,
    date: "2024-07-02",
  },
  {
    day: "3",
    value: 12,
    date: "2024-07-03",
  },
  {
    day: "4",
    value: 23,
    date: "2024-07-04",
  },
  {
    day: "5",
    value: 24,
    date: "2024-07-05",
  },
  {
    day: "6",
    value: 24,
    date: "2024-07-06",
  },
  {
    day: "7",
    value: 29,
    date: "2024-07-07",
  },
  {
    day: "8",
    value: 37,
    date: "2024-07-08",
  },
  {
    day: "9",
    value: 36,
    date: "2024-07-09",
  },
  {
    day: "10",
    value: 42,
    date: "2024-07-10",
  },
  {
    day: "11",
    value: 38,
    date: "2024-07-11",
  },
  {
    day: "12",
    value: 22,
    date: "2024-07-12",
  },
  {
    day: "13",
    value: 40,
    date: "2024-07-13",
  },
  {
    day: "14",
    value: 23,
    date: "2024-07-14",
  },
  {
    day: "15",
    value: 40,
    date: "2024-07-15",
  },
  {
    day: "16",
    value: 45,
    date: "2024-07-16",
  },
  {
    day: "17",
    value: 27,
    date: "2024-07-17",
  },
  {
    day: "18",
    value: 32,
    date: "2024-07-18",
  },
  {
    day: "19",
    value: 14,
    date: "2024-07-19",
  },
  {
    day: "20",
    value: 46,
    date: "2024-07-20",
  },
  {
    day: "21",
    value: 20,
    date: "2024-07-21",
  },
  {
    day: "22",
    value: 2,
    date: "2024-07-22",
  },
  {
    day: "23",
    value: 45,
    date: "2024-07-23",
  },
  {
    day: "24",
    value: 43,
    date: "2024-07-24",
  },
  {
    day: "25",
    value: 23,
    date: "2024-07-25",
  },
  {
    day: "26",
    value: 24,
    date: "2024-07-26",
  },
  {
    day: "27",
    value: 29,
    date: "2024-07-27",
  },
  {
    day: "28",
    value: 39,
    date: "2024-07-28",
  },
  {
    day: "29",
    value: 14,
    date: "2024-07-29",
  },
  {
    day: "30",
    value: 46,
    date: "2024-07-30",
  },
];
export default function Buildingperformance() {
  return (
    <div className="basis-[80%] bg-white shadow-lg rounded-xl h-87 py-3 px-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[20px] font-bold"> Buildings Performance </h1>
        <span className="flex border py-1.5 px-2 text-[16px] rounded-md text-[#A449EB] items-center">
          This Month <img src={dropdown} />
        </span>
      </div>
      <ResponsiveContainer className="ml-[-20px]" width="100%" height={280}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid opacity={0.4} />
          <XAxis
            dataKey="day"
            fontSize={10}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey="value"
            axisLine={false}
            tickLine={false}
            tickCount={6}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            cursor={{
              stroke: "#F64E60",
              strokeWidth: 1,
              strokeDasharray: "2",
            }}
            content={renderTooltip}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#9787FF"
            fill="#9787FF"
            activeDot={{
              r: 5,
              fill: "#F64E60",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

const renderTooltip = ({ active, payload }) => {
  if (active) {
    const fullData = payload[0].payload;

    const date = fullData.date;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return (
      <div className="bg-white py-3 px-4 rounded-xl shadow">
        <p className="text-sm text-gray-500 mb-1">{formattedDate}</p>
        <p className="flex items-center gap-1 text-[20px] font-bold text-[#A449EB]">
          {fullData.value}% <img src={up} alt="up" />
        </p>
      </div>
    );
  }

  return null;
};
