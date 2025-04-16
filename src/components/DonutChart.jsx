// components/TopBuildings.jsx
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Building 1', value: 70 },
  { name: 'Building 2', value: 26 },
  { name: 'Building 3', value: 14 },
];

const COLORS = ['#8b5cf6', '#fb923c', '#38bdf8'];

export default function TopBuildings() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-72">
      <h2 className="text-xl font-semibold mb-4">Top Buildings</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm space-y-1">
        {data.map((entry, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: COLORS[index] }} />
              {entry.name}
            </span>
            <span>{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
