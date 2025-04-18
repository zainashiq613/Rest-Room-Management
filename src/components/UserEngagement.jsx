import React from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from "recharts";
import smile from "./images/smile.png";

const data = [
  {
    value: 290,
    date: "2024-07-01",
  },
  {
    value: 382,
    date: "2024-07-02",
  },
  {
    value: 356,
    date: "2024-07-03",
  },
  {
    value: 600,
    date: "2024-07-04",
  },
  {
    value: 400,
    date: "2024-07-05",
  },
  {
    value: 300,
    date: "2024-07-06",
  },
  {
    value: 500,
    date: "2024-07-07",
  },
  {
    value: 569,
    date: "2024-07-08",
  },
  {
    value: 487,
    date: "2024-07-09",
  },
  {
    value: 368,
    date: "2024-07-10",
  },
];

const renderTooltipContent = ({ payload }) => {
  if (!payload || payload.length === 0) return null;

  const entry = payload[0];
  const total = payload.reduce((result, e) => e.value, 0);
  const formattedDate = new Date(entry.payload.date).toLocaleDateString(
    "en-GB",
    {
      weekday: "long",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="bg-white flex items-center p-3 rounded-md">
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
    <div className="basis-[32%] h-fit mt-5 bg-white shadow-lg rounded-xl py-3 px-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[20px] font-bold"> Buildings Performance </h1>
      </div>
      <ResponsiveContainer width="102%" height={280}>
        <ComposedChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} opacity={0.4} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis
            tickMargin={20}
            dataKey="value"
            axisLine={false}
            tickLine={false}
            tickCount={7}
          />
          <Tooltip content={renderTooltipContent} />
          <Bar dataKey="value" fill="#E9ECF1" />
          <Line dataKey="value" stroke="#A449EB" />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="flex justify-between items-center mt-2">
        <p className="text-[14px] text-[#767676]">
          Your performance is 30% better<br></br> compare to last month
        </p>
        <span className="text-[24px] text-[#2E2E30] font-bold">30%</span>
      </div>
    </div>
  );
}
