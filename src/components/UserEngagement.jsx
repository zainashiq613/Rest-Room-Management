import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    value: 590,
  },
  {
    value: 400,
  },
  {
    value: 456,
  },
  {
    value: 500,
  },
  {
    value: 400,
  },
  {
    value: 600,
  },
  {
    value: 590,
  },
  {
    value: 400,
  },
  {
    value: 456,
  },
  {
    value: 500,
  },
];

export default function UserEngagement() {
  return (
    <div
      className="bg-white mt-5 rounded-xl"
      style={{ height: 300, width: "100%" }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart width={500} height={400} data={data}>
          <CartesianGrid opacity={0.4} />
          <YAxis tickCount={7} />
          <Tooltip />
          <Bar dataKey="value" barSize={20} fill="#A449EB" />
          <Line type="monotone" dataKey="value" stroke="#A449EB" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
