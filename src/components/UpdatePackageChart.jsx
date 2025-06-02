import React from "react";
import ReactApexChart from "react-apexcharts";

const UpdatePackageChart = () => {
  const series = [
    {
      name: "2020",
      data: [
        9000, 15000, 17000, 18000, 30000, 38753, 25000, 18000, 22000, 19000,
        21000, 23000,
      ],
    },
    {
      name: "2021",
      data: [
        22000, 30000, 12000, 25000, 35000, 27000, 21000, 32000, 23000, 17657,
        30000, 37000,
      ],
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false },
    },
    colors: ["#1E90FF", "#FF4D4F"], // blue & red
    stroke: {
      curve: "smooth",
      width: 3,
    },
    markers: {
      size: 6,
      strokeWidth: 2,
      hover: { size: 9 },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      y: {
        formatter: (val) => `$ ${val.toLocaleString()}`,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val / 1000}k`,
      },
    },
    annotations: {
      xaxis: [
        {
          x: "Jun",
          borderColor: "#1E90FF",
          label: {
            style: {
              color: "#fff",
              background: "#1E90FF",
            },
            text: "$ 38,753.00",
          },
        },
        {
          x: "Oct",
          borderColor: "#FF4D4F",
          label: {
            style: {
              color: "#fff",
              background: "#FF4D4F",
            },
            text: "$ 17,657.00",
          },
        },
      ],
    },
    legend: {
      show: true,
      markers: {
        radius: 12,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl lg:text-2xl font-bold text-[#464255]">Update Package</h3>

      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default UpdatePackageChart;
