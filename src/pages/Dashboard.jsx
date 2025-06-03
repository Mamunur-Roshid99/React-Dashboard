import React, { useEffect } from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import UpdatePackageChart from "../components/UpdatePackageChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

const Dashboard = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100); // Delay ensures component is mounted
  }, []);

  return (
    <section>
      <div className="container w-[95%] mx-auto lg:w-full">
        {/* top */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-5">
          {/* student */}
          <div className="bg-white shadow p-4 rounded-xl border-b-2 border-b-[#2D9CDB]">
            <h1 className="text-black font-medium text-2xl lg:text-3xl">
              500000
            </h1>
            <div className="flex items-center justify-between">
              <p className="text-[#272727] text-lg">Students</p>
              <FaArrowRightLong className="text-[#2D9CDB]" />
            </div>
          </div>
          {/* course */}
          <div className="bg-white shadow p-4 rounded-xl border-b-2 border-b-[#2D9CDB]">
            <h1 className="text-black font-medium text-2xl lg:text-3xl">
              500000
            </h1>
            <div className="flex items-center justify-between">
              <p className="text-[#272727] text-lg">course</p>
              <FaArrowRightLong className="text-[#2D9CDB]" />
            </div>
          </div>
          {/* Blog */}
          <div className="bg-white shadow p-4 rounded-xl border-b-2 border-b-[#2D9CDB]">
            <h1 className="text-black font-medium text-2xl lg:text-3xl">300</h1>
            <div className="flex items-center justify-between">
              <p className="text-[#272727] text-lg">Blog</p>
              <FaArrowRightLong className="text-[#2D9CDB]" />
            </div>
          </div>
          {/* News Letter */}
          <div className="bg-white shadow p-4 rounded-xl border-b-2 border-b-[#2D9CDB]">
            <h1 className="text-black font-medium text-2xl lg:text-3xl">300</h1>
            <div className="flex items-center gap-4 justify-between">
              <p className="text-[#272727] text-lg">News Letter</p>
              <FaArrowRightLong className="text-[#2D9CDB]" />
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="my-8">
          <UpdatePackageChart />
          <div className="flex flex-col gap-8 mt-8 md:flex-row md:items-start md:justify-between">
            <LineChart className="md:w-[50%] lg:h-72" />
            <BarChart className="md:w-[50%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
