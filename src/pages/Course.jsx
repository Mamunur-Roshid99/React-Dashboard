import React, { useEffect } from "react";

import CourseTable from "../components/CourseTable";
import { Link } from "react-router-dom";

const Course = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100); // Delay ensures component is mounted
  }, []);

  return (
    <div className="container w-[95%] mx-auto mt-5 lg:w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-[#464255] lg:text-2xl">
          Course
        </h2>
        <Link to="/course/createcourse" className="bg-[#2d9cdb] text-white text-sm font-medium px-3 py-2 rounded-lg">
          Add Course
        </Link>
      </div>
      <CourseTable />
    </div>
  );
};

export default Course;
