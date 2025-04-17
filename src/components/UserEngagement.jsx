import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  BarController,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  BarController
);

const UserEngagement = () => {
  const barColors = new Array(7).fill("#D9D9D9");
  barColors[3] = "#A259FF"; // Highlighted bar

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        type: "bar",
        label: "Bar",
        data: [450, 580, 360, 400, 590, 390, 310],
        backgroundColor: barColors,
        borderRadius: 6,
        barThickness: 24,
      },
      {
        type: "line",
        label: "Line",
        data: [450, 580, 360, 400, 590, 390, 310],
        borderColor: "#A259FF",
        borderWidth: 2,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#A259FF",
        pointRadius: 5,
        pointHoverRadius: 6,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#9E9E9E" },
      },
      y: {
        grid: { drawBorder: false, color: "#E0E0E0" },
        ticks: {
          stepSize: 100,
          beginAtZero: true,
          color: "#9E9E9E",
        },
      },
    },
  };

  return (
    <div className="basis-[30%] bg-white rounded-[16px] shadow p-6 font-sans">
      <h2 className="text-black text-lg font-semibold mb-4">
        User’s Engagement
      </h2>

      <div className="relative h-[240px]">
        <Bar data={data} options={options} />
        <div className="absolute top-[50px] left-[170px] bg-white rounded-[12px] px-4 py-2 shadow text-sm text-center">
          <div className="text-purple-500 text-xl font-bold">590</div>
          <div className="text-gray-500 text-xs">Monday, April 22nd</div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-gray-500 text-sm">
          Your performance is 30% better
          <br />
          compare to last month
        </p>
        <span className="text-black text-2xl font-semibold">30%</span>
      </div>
    </div>
  );
};

export default UserEngagement;
