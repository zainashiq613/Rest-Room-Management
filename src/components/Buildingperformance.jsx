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
import up from "./up.png";
import dropdown from "./drop-down.png";

const data = [
  {
    day: "1",
    value: 20,
    date: "2024-07-01",
  },
  {
    day: "2",
    value: 2,
    date: "2024-07-02",
  },
  {
    day: "3",
    value: 45,
    date: "2024-07-03",
  },
  {
    day: "4",
    value: 43,
    date: "2024-07-04",
  },
  {
    day: "5",
    value: 23,
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
    value: 39,
    date: "2024-07-08",
  },
  {
    day: "9",
    value: 14,
    date: "2024-07-09",
  },
  {
    day: "10",
    value: 46,
    date: "2024-07-10",
  },
  {
    day: "11",
    value: 20,
    date: "2024-07-11",
  },
  {
    day: "12",
    value: 2,
    date: "2024-07-12",
  },
  {
    day: "13",
    value: 45,
    date: "2024-07-13",
  },
  {
    day: "14",
    value: 43,
    date: "2024-07-14",
  },
  {
    day: "15",
    value: 23,
    date: "2024-07-15",
  },
  {
    day: "16",
    value: 24,
    date: "2024-07-16",
  },
  {
    day: "17",
    value: 29,
    date: "2024-07-17",
  },
  {
    day: "18",
    value: 39,
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

const toPercent = (decimal) => `${decimal * 1}%`;

const renderTooltipContent = ({ payload }) => {
  if (!payload || payload.length === 0) return null;

  const entry = payload[0];
  const total = payload.reduce((result, e) => result + e.value, 0);

  // Format date like "15 July 2024"
  const formattedDate = new Date(entry.payload.date).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="bg-white p-3 rounded-md">
      <p className="text-sm text-gray-500 mb-1">{formattedDate}</p>
      <p className="flex gap-2 items-center text-[20px] text-[#A449EB]">
        {`${total}%`} <img src={up} />
      </p>
    </div>
  );
};
export default function Buildingperformance() {
  return (
    <div className="basis-[80%] bg-white shadow-lg rounded-xl h-87 py-3 px-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[20px] font-bold"> Buildings Performance </h1>
        <span className="flex border py-1.5 px-2 text-[16px] rounded-md text-[#A449EB] items-center">
          This Month <img src={dropdown} />
        </span>
      </div>
      <ResponsiveContainer
        ResponsiveContainer
        className="ml-[-20px]"
        width="104%"
        height={280}
      >
        <AreaChart
          data={data}
          stackOffset="expand"
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
            tickFormatter={toPercent}
          />
          <Tooltip content={renderTooltipContent} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
