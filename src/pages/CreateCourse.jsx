import React, { useRef, useState, useEffect } from "react";

import { BiSolidShare } from "react-icons/bi";
import { MdOutlineCloudUpload } from "react-icons/md";
import { Link } from "react-router-dom";

const CreateCourse = () => {
  const [image, setImage] = useState(null);
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100); // Delay ensures component is mounted
  }, []);

  return (
    <div className="container w-[95%] mx-auto mt-5 lg:w-full mb-8">
      {/* top */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <BiSolidShare className="text-[#2D9CDB] text-2xl" />
          <h2 className="text-xl font-semibold text-[#464255] lg:text-xl">
            Create Course
          </h2>
        </div>
        <Link to="/course/viewcourse" className="bg-[#2d9cdb] text-white text-sm font-medium px-3 py-2 rounded-lg">
          Publish
        </Link>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
        {/* left */}
        <div className="lg:w-[65%] ">
          <div className="p-6 bg-white border border-[#E4E7EC] rounded-md space-y-6 lg:h-full">
            {/* Add Title */}
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-medium text-[#0B0B0B] mb-1">
                Course Name
              </label>
              <input
                type="text"
                placeholder="Course Name"
                className="w-full bg-[#F9FAFB] px-3 py-2 border border-[#E4E7EC] rounded-md  focus:outline-none"
              />
            </div>

            {/* Select Category */}
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-medium text-[#0B0B0B] mb-1">
                Course Type
              </label>
              <select className="w-full bg-[#F9FAFB] px-3 py-2 border border-[#E4E7EC] rounded-md  focus:outline-none">
                <option>Free</option>
              </select>
            </div>

            {/* Tag input */}
            <div>
              <label className="block text-sm font-normal text-[#0B0B0B] mb-1">
                Sub Course
              </label>
              <textarea
                placeholder="Sub course 1, Sub course 2"
                rows={3}
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-md bg-[#F9FAFB] text-sm focus:outline-none h-44"
              />
            </div>
            {/* Tag input */}
            <div>
              <label className="block text-sm font-normal text-[#0B0B0B] mb-1">
                Sub Course
              </label>
              <textarea
                placeholder="Sub course 1, Sub course 2"
                rows={3}
                className="w-full px-3 py-2 border border-[#E4E7EC] rounded-md bg-[#F9FAFB] text-sm focus:outline-none h-40"
              />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="lg:w-[35%] ">
          <div className="p-6 border border-[#E4E7EC] bg-white rounded-md space-y-4 lg:h-full">
            <label className="block text-sm text-[#0B0B0B] font-medium">Thumbnail</label>

            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={handleClick}
              className="flex items-center justify-center px-4 py-8 border-2 border-dashed border-[#6B7280] rounded-md bg-gray-50 text-center cursor-pointer"
            >
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="max-h-40 object-contain"
                />
              ) : (
                <div className="flex flex-col gap-1 items-center justify-center">
                  <p className="text-2xl">
                    <MdOutlineCloudUpload />
                  </p>
                  <p className="text-sm text-[#6B7280] font-medium">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-[#6B7280] mt-1">
                    SVG, PNG, JPG or GIF (MAX. 800×400px)
                  </p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                ref={inputRef}
                hidden
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;