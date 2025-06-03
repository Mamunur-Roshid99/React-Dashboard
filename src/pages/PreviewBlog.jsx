import React from 'react'

import { BiSolidShare } from "react-icons/bi";

const PreviewBlog = () => {
  return (
    <div className="container w-[95%] mx-auto mt-5 lg:w-full">
        {/* top */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <BiSolidShare className="text-[#2D9CDB] text-2xl" />
          <h2 className="text-xl font-semibold text-[#464255] lg:text-xl">
            Preview Blog
          </h2>
        </div>
        <div className="bg-[#B98AFF] text-white text-sm font-medium px-1 h-10 rounded-lg"></div>
      </div>
      {/* body */}
      <div></div>
    </div>
  );
}

export default PreviewBlog