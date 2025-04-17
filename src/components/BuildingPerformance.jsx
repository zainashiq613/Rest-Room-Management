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

const data = [
  { day: 1, value: 10 },
  { day: 2, value: 12 },
  { day: 3, value: 13 },
  { day: 4, value: 22 },
  { day: 5, value: 23 },
  { day: 6, value: 23 },
  { day: 7, value: 25 },
  { day: 8, value: 35 },
  { day: 9, value: 38 },
  { day: 10, value: 43 },
  { day: 11, value: 21 },
  { day: 12, value: 39 },
  { day: 13, value: 20 },
  { day: 14, value: 40 },
  { day: 15, value: 45 },
  { day: 16, value: 25 },
  { day: 17, value: 44 },
  { day: 18, value: 35 },
  { day: 19, value: 34 },
  { day: 20, value: 33 },
  { day: 21, value: 30 },
  { day: 22, value: 29 },
  { day: 23, value: 12 },
  { day: 24, value: 18 },
  { day: 25, value: 10 },
  { day: 26, value: 12 },
  { day: 27, value: 9 },
  { day: 28, value: 11 },
  { day: 29, value: 8 },
  { day: 30, value: 10 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg p-2 shadow text-sm text-center border">
        <p className="text-xs text-gray-500">15 July 2024</p>
        <p className="text-purple-600 text-lg font-semibold">45%</p>
        <p className="text-green-500">↑</p>
      </div>
    );
  }
  return null;
};

const BuildingsPerformanceChart = () => {
  return (
    <div className="p-4 rounded-2xl mb-5 shadow-md bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Buildings Performance</h2>
        <div className="text-purple-600 text-sm border rounded px-2 py-1 cursor-pointer">
          This Month ▼
        </div>
      </div>
      <ResponsiveContainer height={232}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#a78bfa" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid opacity={0.5} />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 13 }}
            tickCount={30}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 50]}
            tickCount={6}
            tickFormatter={(val) => `${val}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#a78bfa"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BuildingsPerformanceChart;
