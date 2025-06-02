import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

import { TiArrowSortedDown } from "react-icons/ti";

const BarChart = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Blue Bars",
        data: [60, 0, 40, 0, 60, 0, 60],
        backgroundColor: "#2196F3",
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      {
        label: "Yellow Bars",
        data: [0, 80, 0, 70, 0, 30, 0],
        backgroundColor: "#FFD700",
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          color: "#A3A3A3",
        },
        grid: {
          color: "#eee",
          drawBorder: false,
        },
        border: {
          display: false, // ✅ key line to hide Y-axis border
        },
      },
      x: {
        stacked: true,
        ticks: {
          color: "#A3A3A3",
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        border: {
          display: false, // optional
        },
      },
    },
  };  

  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full max-w-md relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-[#464255] lg:text-lg">
          Blog View
        </h2>
        <div className="border border-[#B9BBBD] rounded-xl px-4 py-2 text-sm text-[#202020] flex items-center gap-1 cursor-pointer font-medium">
          Weekly
          <span className="text-[#FF5B5B] text-xl">
            <TiArrowSortedDown />
          </span>
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;