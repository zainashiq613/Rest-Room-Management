import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const RestroomsPerformance = () => {
  const data = {
    labels: ['5 May', '6 May', '7 May', '8 May', '9 May', '10 May', '11 May', '12 May', '13 May'],
    datasets: [
      {
        label: 'Performance',
        data: [0, 300, 500, 280, 600, 600, 600, 580, 350],
        borderColor: '#00A9A4',
        tension: 0.4,
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
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
        ticks: { color: '#9E9E9E', font: { size: 12 } },
      },
      y: {
        min: 0,
        max: 600,
        ticks: {
          stepSize: 100,
          color: '#9E9E9E',
          font: { size: 12 },
        },
        grid: { color: '#E0E0E0' },
      },
    },
  };

  return (
    <div className="basis-[30%] bg-white rounded-[16px] shadow p-6 font-sans">
      <h2 className="text-black text-lg font-semibold mb-4">Restrooms Performance</h2>

      <div className="relative h-[240px]">
        <Line data={data} options={options} />
        <div className="absolute top-[40px] left-[200px] bg-white rounded-[12px] px-4 py-2 shadow text-sm text-center">
          <div className="text-teal-600 text-xl font-bold">590</div>
          <div className="text-gray-500 text-xs">Monday, April 22nd</div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-gray-500 text-sm">
          You performance is 50% better<br />compare to last month
        </p>
        <span className="text-black text-2xl font-semibold">50%</span>
      </div>
    </div>
  );
};

export default RestroomsPerformance;
