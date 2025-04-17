import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

// Base style for each ring layer
const ringBase = {
  cutout: "80%",
  rotation: -90,
  circumference: 360,
};

const ringData = (value, color) => ({
  datasets: [
    {
      data: [value, 100 - value],
      backgroundColor: [color, "#F2F2F2"],
      borderWidth: 0,
    },
  ],
});

const options = {
  plugins: { tooltip: { enabled: false } },
  cutout: "80%",
  elements: {
    arc: { borderWidth: 0 },
  },
};

const rings = [
  { value: 99, color: "#F04438", size: "w-[200px] h-[200px]" }, // Queuing
  { value: 99, color: "#06AED4", size: "w-[170px] h-[170px]" }, // Flow Count
  { value: 99, color: "#12B76A", size: "w-[140px] h-[140px]" }, // Stall Occupancy
];

const labels = [
  { color: "#F04438", text: "Queuing" },
  { color: "#06AED4", text: "Flow Count" },
  { color: "#12B76A", text: "Stall Occupancy" },
  { color: "#A259FF", text: "Toilet Paper" },
  { color: "#FEC84B", text: "Water Leakage" },
];

const ActiveSensors = () => {
  return (
    <div className="basis-[30%] h-99 bg-white rounded-[16px] shadow p-6 font-sans flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-red-500 text-xl">⚠️</span>
        <h2 className="text-black text-lg font-semibold">Active Sensors</h2>
      </div>

      {/* Radial Chart */}
      <div className="relative flex items-center justify-center h-[220px] mt-4">
        {rings.map((ring, idx) => (
          <div key={idx} className={`absolute ${ring.size}`}>
            <Doughnut
              data={ringData(ring.value, ring.color)}
              options={{ ...options, ...ringBase }}
            />
          </div>
        ))}
        <div className="absolute text-black font-bold text-xl">99%</div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-700 justify-items-start px-4 mt-6">
        {labels.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveSensors;
