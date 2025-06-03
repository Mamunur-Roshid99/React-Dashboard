import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const CourseTable = () => {
  const courses = Array.from({ length: 50 }).map((_, index) => ({
    id: index + 1,
    title: "There are many variations of passages of Lorem Ipsum available.",
    subtitle: "printing, and typesetting ,industry Lorem, Ipsum has ", // sample author image
    fissureImage:
      "https://i.pinimg.com/736x/2d/96/1a/2d961a76b1c307d7495abbb370396990.jpg", // sample image
    video: "200",
    status: "Pro",
    review: "4.5"
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(courses.length / rowsPerPage);

  const paginatedData = courses.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="w-full border border-[#CED4DA] rounded-lg my-5">
      <div className="w-full overflow-x-auto">
        <table className="w-[800px] md:w-full text-sm text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium uppercase">
                Course TITLE
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium uppercase">
                Sub course
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium uppercase">
                thumbnail
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium uppercase">
                Video
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium uppercase">
                Status
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium uppercase">
                Review
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((course) => (
              <tr key={course.id} className="bg-transparent hover:bg-[#E4E4E4]">
                <td className="px-5 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  {course.title}
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  {course.subtitle}
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  <img
                    src={course.fissureImage}
                    alt="Fissure"
                    className="w-24 h-20 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  {course.video}
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  {course.status}
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#2D9CDB]">
                  <div className="flex items-center gap-1">
                    {course.review}
                    <CiStar className="text-base" />
                  </div>
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  <button className="text-[#4D4D4D] pr-3 cursor-pointer">
                    <FaEye />
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
          of {courses.length}
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

export default CourseTable;