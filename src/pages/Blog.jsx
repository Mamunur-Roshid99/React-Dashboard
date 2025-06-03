import React from "react";

import BlogTable from "../components/BlogTable";

const Blog = () => {
  return (
    <div className="container w-[95%] mx-auto mt-5 lg:w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-[#464255] lg:text-2xl">
          Our Blog
        </h2>
        <div className="bg-[#2d9cdb] text-white text-sm font-medium px-3 py-2 rounded-lg">Add New Blog</div>
      </div>
      <BlogTable />
    </div>
  );
};

export default Blog;
