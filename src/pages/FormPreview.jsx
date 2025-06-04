import React from 'react'

import { BiSolidShare } from "react-icons/bi";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const FormPreview = () => {
  return (
    <div className="container w-[95%] mx-auto mt-5 lg:w-full mb-8">
      {/* top */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <BiSolidShare className="text-[#2D9CDB] text-2xl" />
          <h2 className="text-xl font-semibold text-[#464255] lg:text-xl">
            Form Preview
          </h2>
        </div>
        <button className="text-[#FF7161] cursor-pointer">
          <FaTrash />
        </button>
      </div>
      {/* bottom */}
      <div className="">
        {/*  */}
        <div className="">
          <div className="p-6 bg-white border border-[#E4E7EC] rounded-md space-y-6 lg:h-full">
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
                Phone Number
              </label>
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-md  focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-normal text-[#0B0B0B] mb-1">
                Message
              </label>
              <textarea
                placeholder="massage "
                rows={3}
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-md text-sm focus:outline-none h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPreview
