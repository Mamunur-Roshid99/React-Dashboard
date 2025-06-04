import React, { useEffect } from "react";

import { BiSolidShare } from "react-icons/bi";
import { CiStar } from "react-icons/ci";

import img from "../assets/viewcourse.jpg"

const ViewCourse = () => {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100); // Delay ensures component is mounted
  }, []);

  return (
    <div className="container w-[95%] mx-auto mt-5 lg:w-full mb-8">
      {/* top */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <BiSolidShare className="text-[#2D9CDB] text-2xl" />
          <h2 className="text-xl font-semibold text-[#464255] lg:text-xl">
            View Course
          </h2>
        </div>
        <div className="bg-[#B98AFF] text-white text-sm font-medium px-1 h-10 rounded-lg"></div>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
        {/* left */}
        <div className="lg:w-[65%] ">
          <div className="p-6 bg-white border border-[#E4E7EC] rounded-md space-y-6 lg:h-full">
            {/* Add Title */}
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-medium text-[#0B0B0B] mb-1">
                Course Name
              </label>
              <input
                type="text"
                placeholder="Course Name"
                className="w-full bg-[#F9FAFB] px-3 py-2 border border-[#E4E7EC] rounded-md  focus:outline-none"
              />
            </div>

            {/* Select Category */}
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-medium text-[#0B0B0B] mb-1">
                Course Type
              </label>
              <select className="w-full bg-[#F9FAFB] px-3 py-2 border border-[#E4E7EC] rounded-md  focus:outline-none">
                <option>Free</option>
              </select>
            </div>

            {/* Tag input */}
            <div>
              <label className="block text-sm font-normal text-[#0B0B0B] mb-1">
                Sub Course
              </label>
              <textarea
                placeholder="Sub course 1, Sub course 2"
                rows={3}
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-md bg-[#F9FAFB] text-sm focus:outline-none h-44"
              />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="lg:w-[35%] ">
          <div className="p-6 border border-[#E4E7EC] bg-white rounded-md space-y-4 lg:h-full">
            <label className="block text-sm text-[#0B0B0B] font-medium">Thumbnail</label>
            <div>
              <img src={img} className="rounded-lg" alt="" />
            </div>
            <div className="bg-[#FAFAFA] p-2 rounded-lg flex flex-col gap-1">
              <h1 className="text-[#464646] font-medium text-lg">Video</h1>
              <p className="text-[#000000] font-medium text-lg text-end">300</p>
            </div>
            <div className="bg-[#FAFAFA] p-2 rounded-lg flex items-start justify-between gap-1">
              <h1 className="text-[#464646] font-medium text-lg">Review</h1>
              <div className="text-[#2D9CDB] flex items-center gap-1 font-medium text-lg pt-7">
                <p>4.5</p>
                <CiStar className="text-base" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;