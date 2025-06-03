import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogTable = () => {
  const blogs = Array.from({ length: 50 }).map((_, index) => ({
    id: index + 1,
    title:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    authorImage:
      "https://i.pinimg.com/736x/2d/96/1a/2d961a76b1c307d7495abbb370396990.jpg", // sample author image
    fissureImage:
      "https://i.pinimg.com/736x/2d/96/1a/2d961a76b1c307d7495abbb370396990.jpg", // sample image
    views: "1 M +",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(blogs.length / rowsPerPage);

  const paginatedData = blogs.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="w-full border border-[#CED4DA] rounded-lg my-5">
      <div className="w-full overflow-x-auto">
        <table className="w-[600px] md:w-full text-sm text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium">
                BLOG TITLE
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium">
                AUTHOR
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium">
                FISSURE IMAGE
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium">
                VIEW
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((blog) => (
              <tr key={blog.id} className="bg-transparent hover:bg-[#E4E4E4]">
                <td className="px-5 py-4 border-b border-b-[#E9E7FD] text-[#23272E] lg:w-96">
                  {blog.title}
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  <img
                    src={blog.authorImage}
                    alt="Author"
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  <img
                    src={blog.fissureImage}
                    alt="Fissure"
                    className="w-24 h-20 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  {blog.views}
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  <button className="text-[#4D4D4D] pr-3 cursor-pointer">
                    <Link to="/blog/preview">
                      <FaEye />
                    </Link>
                  </button>
                  <button className="text-[#FF7161] pr-3 cursor-pointer">
                    <FaTrash />
                  </button>
                  <button className="text-[#2D9CDB] cursor-pointer">
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-5 text-sm">
        <span className="text-[#8B909A] font-medium flex items-center gap-3">
          Showing{" "}
          <div className="border border-[#E9E7FD] flex items-center gap-2 text-[#23272E] px-4 py-2 rounded-lg">
            {rowsPerPage} <IoIosArrowDown />
          </div>{" "}
          of {blogs.length}
        </span>

        <div className="flex items-center gap-1 mt-2 sm:mt-0">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded bg-[#F1F2F6] text-sm disabled:opacity-50 flex items-center justify-center"
          >
            <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-8 h-8 rounded text-sm ${
                currentPage === index + 1
                  ? "bg-[#0F60FF] text-white"
                  : "bg-[#F1F2F6]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 rounded bg-[#F1F2F6] text-sm disabled:opacity-50 flex items-center justify-center"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
