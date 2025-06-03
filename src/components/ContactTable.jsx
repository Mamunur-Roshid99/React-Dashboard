import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const ContactTable = () => {
  const Forms = Array.from({ length: 50 }).map((_, index) => ({
    id: index + 1,
    name: "Md Hossain  Firoz",
    email: "Hoossen@gmail.com", // sample author image
    number: "01722924089",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(Forms.length / rowsPerPage);

  const paginatedData = Forms.slice(
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
                Name
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium uppercase">
                Email
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium uppercase">
                Phone Number
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((form) => (
              <tr key={form.id} className="bg-transparent hover:bg-[#E4E4E4]">
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  {form.name}
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  {form.email}
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  {form.number}
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  <button className="text-[#4D4D4D] pr-3 cursor-pointer">
                    <FaEye />
                  </button>
                  <button className="text-[#FF7161] cursor-pointer">
                    <FaTrash />
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
          of {Forms.length}
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

export default ContactTable;