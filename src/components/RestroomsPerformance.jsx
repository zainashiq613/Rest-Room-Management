import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import smile from "./images/smile-green.png";

const data = [
  {
    day: "5 May",
    value: 23,
    date: "2024-07-05",
  },
  {
    day: "6 May",
    value: 24,
    date: "2024-07-06",
  },
  {
    day: "7 May",
    value: 29,
    date: "2024-07-07",
  },
  {
    day: "8 May",
    value: 39,
    date: "2024-07-08",
  },
  {
    day: "9 May",
    value: 14,
    date: "2024-07-09",
  },
  {
    day: "10 May",
    value: 368,
    date: "2024-07-10",
  },
  {
    day: "11 May",
    value: 456,
    date: "2024-07-10",
  },
  {
    day: "12 May",
    value: 600,
    date: "2024-07-10",
  },
  {
    day: "13 May",
    value: 600,
    date: "2024-07-10",
  },
  {
    day: "14 May",
    value: 600,
    date: "2024-07-10",
  },
  {
    day: "15 May",
    value: 600,
    date: "2024-07-10",
  },
  {
    day: "16 May",
    value: 46,
    date: "2024-07-10",
  },
  {
    day: "17 May",
    value: 46,
    date: "2024-07-10",
  },
];

const renderTooltipContent = ({ payload }) => {
  if (!payload || payload.length === 0) return null;

  const entry = payload[0];
  const total = payload.reduce((result, e) => result + e.value, 0);

  // Format date like "15 July 2024"
  const formattedDate = new Date(entry.payload.date).toLocaleDateString(
    "en-GB",
    {
      weekday: "long",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div div className="bg-white flex items-center p-3 rounded-md">
      <img src={smile} />
      <div>
        <p className="flex gap-2 items-center text-[20px] text-[#A449EB]">
          {`${total}`}
        </p>
        <p className="text-sm text-gray-500 mb-1">{formattedDate}</p>
      </div>
    </div>
  );
};
export default function Buildingperformance() {
  return (
    <div className="basis-[32%] bg-white shadow-lg mt-5 rounded-xl py-3 px-4">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-[20px] font-bold">Restrooms Performance</h1>
      </div>
      <ResponsiveContainer width="106%" height={280}>
        <LineChart
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
            tickMargin={27}
            dataKey="value"
            axisLine={false}
            tickLine={false}
            tickCount={7}
          />
          <Tooltip content={renderTooltipContent} />
          <Line
            dot={false}
            strokeWidth={2}
            type="monotone"
            dataKey="value"
            stroke="#058F9A"
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-between items-center mt-2">
        <p className="text-[14px] text-[#767676]">
          Your performance is 50% better<br></br> compare to last month
        </p>
        <span className="text-[24px] text-[#2E2E30] font-bold">50%</span>
      </div>
    </div>
  );
}
