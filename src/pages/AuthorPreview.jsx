import React from 'react'

import { BiSolidShare } from "react-icons/bi";

const AuthorPreview = () => {
  return (
    <div className="container w-[95%] mx-auto mt-5 lg:w-full mb-8">
      {/* top */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <BiSolidShare className="text-[#2D9CDB] text-2xl" />
          <h2 className="text-xl font-semibold text-[#464255] lg:text-xl">
            Preview
          </h2>
        </div>
        <div className="bg-[#B98AFF] text-white text-sm font-medium px-1 h-10 rounded-lg"></div>
      </div>
      {/* bottom */}
      <div className="">
        {/*  */}
        <div className="">
          <div className="p-6 bg-white border border-[#E4E7EC] rounded-md space-y-6 lg:h-full pb-22">
            {/* Add Title */}
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-medium text-[#0B0B0B] mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-md  focus:outline-none"
              />
            </div>

            {/* Add Title */}
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-medium text-[#0B0B0B] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-md  focus:outline-none"
              />
            </div>

            {/* Add Title */}
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-medium text-[#0B0B0B] mb-1">
                Roll
              </label>
              <input
                type="text"
                placeholder="Roll"
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-md  focus:outline-none"
              />
            </div>

            <div className="flex items-end justify-end">
              <button className="bg-[#1570EF] text-white font-medium px-22 py-2 rounded-lg">
                Add Roll
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorPreview