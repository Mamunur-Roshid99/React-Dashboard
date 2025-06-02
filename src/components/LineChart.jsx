import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

import { TiArrowSortedDown } from "react-icons/ti";

const LineChart = () => {
  const labels = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Orders",
        data: [120, 240, 356, 200, 260, 280, 230],
        fill: true,
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(0, 123, 255, 0.3)");
          gradient.addColorStop(1, "rgba(0, 123, 255, 0)");
          return gradient;
        },
        borderColor: "#2D9CDB",
        tension: 0.4,
        pointBackgroundColor: (ctx) =>
          ctx.dataIndex === 2 ? "#2D9CDB" : "transparent",
        pointBorderColor: (ctx) =>
          ctx.dataIndex === 2 ? "#ffffff" : "transparent",
        pointRadius: (ctx) => (ctx.dataIndex === 2 ? 8 : 0),
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // important to make height work
    plugins: {
      tooltip: {
        callbacks: {
          title: () => "Oct 18th, 2020",
          label: (ctx) => `${ctx.parsed.y} Order`,
        },
        backgroundColor: "#ffffff",
        titleColor: "#333",
        bodyColor: "#333",
        borderColor: "#ddd",
        borderWidth: 1,
        titleFont: { weight: "bold" },
        bodyFont: { weight: "normal" },
        padding: 12,
        displayColors: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false, // ❌ remove bottom axis line
        },
        ticks: {
          color: "#888",
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false, // ❌ remove left axis line
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow w-full max-w-xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-[#464255] lg:text-lg">
          Active Students
        </h2>
        <div className="border border-[#B9BBBD] rounded-xl px-4 py-2 text-sm text-[#202020] flex items-center gap-1 cursor-pointer font-medium">
          Weekly
          <span className="text-[#FF5B5B] text-xl">
            <TiArrowSortedDown />
          </span>
        </div>
      </div>
      <div className=" lg:h-48">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
