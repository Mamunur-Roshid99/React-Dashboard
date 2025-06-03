import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const AuthorTable = () => {
    const rolls = ["Super Admin", "Admin", "Sub Admin", "Support Admin"];
  const authors = Array.from({ length: 4 }).map((_, index) => ({
    id: index + 1,
    name: "Md Hossain  Firoz",
    email: "Hoossen@gmail.com", // sample author image
    roll: rolls[index % rolls.length],
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(authors.length / rowsPerPage);

  const paginatedData = authors.slice(
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
                roll
              </th>
              <th className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#8B909A] text-sm font-medium uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((author) => (
              <tr key={author.id} className="bg-transparent hover:bg-[#E4E4E4]">
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  {author.name}
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  {author.email}
                </td>
                <td className="px-4 py-4 border-b border-b-[#E9E7FD] text-[#23272E]">
                  {author.roll}
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
          of {authors.length}
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

export default AuthorTable;