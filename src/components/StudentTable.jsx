import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const StudentTable = () => {
  const students = Array.from({ length: 50 }).map((_, index) => ({
    id: index + 1,
    name: "Enamul Hossen Firoz",
    mobile: "01722924089",
    gender: "male",
    type: index === 1 ? "Free" : "Paid",
    lastPay: "20-02-2022 / 6M",
    action: index === 1 ? "Unlock" : "Block",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(students.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = students.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="w-full  border border-[#CED4DA] rounded-lg my-5">
      <div className="w-full overflow-x-auto">
        <table className="min-w-[800px] w-full text-sm text-left">
          <thead className="">
            <tr>
              <th className="px-4 py-4 border-b border-b-[#DBDADE] text-[#8B909A] text-sm font-medium">
                STUDENT'S NAME
              </th>
              <th className="px-4 py-4 border-b border-b-[#DBDADE] text-[#8B909A] text-sm font-medium">
                MOBILE NUMBER
              </th>
              <th className="px-4 py-4 border-b border-b-[#DBDADE] text-[#8B909A] text-sm font-medium">
                GENDER
              </th>
              <th className="px-4 py-4 border-b border-b-[#DBDADE] text-[#8B909A] text-sm font-medium">
                STUDENT'S TYPE
              </th>
              <th className="px-4 py-4 border-b border-b-[#DBDADE] text-[#8B909A] text-sm font-medium">
                LAST PAY - PACKAGE
              </th>
              <th className="px-4 py-4 border-b border-b-[#DBDADE] text-[#8B909A] text-sm font-medium">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="px-4 py-4 border-b border-b-[#DBDADE] text-[#23272E] font-medium">
                  {student.name}
                </td>
                <td className="px-4 py-4 border-b border-b-[#DBDADE] text-[#23272E] font-medium">
                  {student.mobile}
                </td>
                <td className="px-4 py-4 border-b border-b-[#DBDADE] text-[#23272E] font-medium">
                  {student.gender}
                </td>
                <td className="px-4 py-4 border-b border-b-[#DBDADE] text-[#23272E] font-medium">
                  {student.type}
                </td>
                <td className="px-4 py-4 border-b border-b-[#DBDADE] text-[#23272E] font-medium">
                  {student.lastPay}
                </td>
                <td className="px-4 py-4 border-b border-b-[#DBDADE]">
                  <button className={`px-3 py-1 text-[#23272E] font-medium`}>
                    {student.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-5 border-t border-t-[#DBDADE] text-sm">
        <span className="text-[#8B909A] font-medium flex items-center gap-3">
          Showing{" "}
          <div className="border border-[#E9E7FD] flex items-center gap-2 text-[#23272E] px-4 py-2 rounded-lg">
            {rowsPerPage} <IoIosArrowDown />
          </div>{" "}
          of {students.length}
        </span>

        {/* Pagination Buttons */}
        <div className="flex items-center gap-1 mt-2 sm:mt-0">
          {/* Left Arrow */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded bg-[#F1F2F6] text-sm disabled:opacity-50 flex items-center justify-center"
          >
            <FaChevronLeft />
          </button>

          {/* Numbered Buttons */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-8 h-8 rounded text-sm ${
                currentPage === index + 1
                  ? "bg-[#0F60FF] text-white"
                  : "bg-[#F1F2F6]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Right Arrow */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
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

export default StudentTable;