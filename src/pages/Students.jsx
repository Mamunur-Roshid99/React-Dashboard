import React from 'react'

import StudentTable from '../components/StudentTable'

import { TiArrowSortedDown } from "react-icons/ti";

const Students = () => {
  return (
    <div className='container w-[95%] mx-auto mt-5 lg:w-full'>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-[#464255] lg:text-xl">
          Our Students
        </h2>
        <div className="bg-white border border-[#FF7B7B] rounded-4xl px-5 py-2 text-sm text-[#202020] flex items-center gap-1 cursor-pointer font-medium">
          Free
          <span className="text-[#FF5B5B] text-xl">
            <TiArrowSortedDown />
          </span>
        </div>
      </div>
      <StudentTable />
    </div>
  );
}

export default Students
