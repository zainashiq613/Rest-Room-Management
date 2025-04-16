// components/BuildingsPerformance.jsx
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
import { XAxis, YAxis, AreaChart, Tooltip, Area } from "recharts";

const data = [
  { day: 1, value: 50 },
  { day: 2, value: 12 },
  { day: 3, value: 20 },
  { day: 4, value: 15 },
  { day: 5, value: 56 },
  { day: 6, value: 16 },
  { day: 7, value: 19 },
  { day: 8, value: 17 },
  { day: 9, value: 21 },
  { day: 10, value: 22 },
  { day: 11, value: 6 },
  { day: 12, value: 24 },
  { day: 13, value: 26 },
  { day: 14, value: 23 },
  { day: 15, value: 27 },
  { day: 16, value: 29 },
  { day: 17, value: 28 },
  { day: 18, value: 30 },
  { day: 19, value: 31 },
  { day: 20, value: 32 },
  { day: 21, value: 33 },
  { day: 22, value: 26 },
  { day: 23, value: 23 },
  { day: 24, value: 27 },
  { day: 25, value: 29 },
  { day: 26, value: 28 },
  { day: 27, value: 30 },
  { day: 28, value: 31 },
  { day: 29, value: 32 },
  { day: 30, value: 33 },
];

export default function BuildingsPerformance() {
  return (
    <div className="bg-white p-4 basis-[70%] rounded-2xl shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">Buildings Performance</h2>
      <AreaChart width={700} height={280} data={data} stackOffset="expand">
        <XAxis dataKey="day" />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        <YAxis dataKey="value" />
        <Tooltip />
      </AreaChart>
    </div>
  );
}
