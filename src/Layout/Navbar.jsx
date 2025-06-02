import React, { useState } from 'react'

import profile from '../assets/navbar.jpg'

import { Badge, Box, IconButton } from "@mui/material";
import { RiNotification2Line } from "react-icons/ri";
import Drawer from "@mui/material/Drawer";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrHomeRounded } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { GrBlog } from "react-icons/gr";
import { IoNewspaper } from "react-icons/io5";
import { SiDiscourse } from "react-icons/si";
import { FiVideo } from "react-icons/fi";
import { FaWpforms } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { PiSignOutFill } from "react-icons/pi";
import logo from "../assets/logo.png";

const Navbar = () => {

  const [activeItem, setActiveItem] = useState("dashboard");
  const [open, setOpen] = useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const sidebar = (
      <section className="bg-white shadow-lg w-[290px] h-screen fixed">
            <div className="h-full pt-7 flex flex-col">
              {/* logo */}
              <div className="w-full ml-8 mb-12">
                <img src={logo} alt="logo" className="w-28" />
              </div>
              {/* links */}
              <div className="space-y-1 overflow-auto h-fit">
                {/* Dashboard */}
                <div
                  className={`pl-6 ${
                    activeItem === "dashboard"
                      ? "border-l-6 border-l-[#2D9CDBCC]"
                      : "pl-7"
                  }`}
                  onClick={() => setActiveItem("dashboard")}
                >
                  <div
                    className={`w-full flex items-center gap-5 py-4 px-5 text-lg cursor-pointer ${
                      activeItem === "dashboard"
                        ? "bg-[#00594526] text-[#2D9CDB] rounded-lg  font-semibold"
                        : "text-[#464255]  font-medium"
                    }`}
                  >
                    <GrHomeRounded />
                    <h1>Dashboard</h1>
                  </div>
                </div>
                {/* students */}
                <div
                  className={`pl-6 ${
                    activeItem === "students"
                      ? "border-l-6 border-l-[#2D9CDBCC]"
                      : "pl-7"
                  }`}
                  onClick={() => setActiveItem("students")}
                >
                  <div
                    className={`w-full flex items-center gap-5 py-4 px-5 text-lg cursor-pointer ${
                      activeItem === "students"
                        ? "bg-[#00594526] text-[#2D9CDB] rounded-lg font-semibold"
                        : "text-[#464255] font-medium"
                    }`}
                  >
                    <PiStudentBold />
                    <h1>Students</h1>
                  </div>
                </div>
                {/* blog */}
                <div
                  className={`pl-6 ${
                    activeItem === "blog" ? "border-l-6 border-l-[#2D9CDBCC]" : "pl-7"
                  }`}
                  onClick={() => setActiveItem("blog")}
                >
                  <div
                    className={`w-full flex items-center gap-5 py-4 px-5 text-lg cursor-pointer ${
                      activeItem === "blog"
                        ? "bg-[#00594526] text-[#2D9CDB] rounded-lg font-semibold"
                        : "text-[#464255] font-medium"
                    }`}
                  >
                    <GrBlog />
                    <h1>Blog</h1>
                  </div>
                </div>
                {/* News Letter */}
                <div
                  className={`pl-6 ${
                    activeItem === "newsletter"
                      ? "border-l-6 border-l-[#2D9CDBCC]"
                      : "pl-7"
                  }`}
                  onClick={() => setActiveItem("newsletter")}
                >
                  <div
                    className={`w-full flex items-center gap-5 py-4 px-5 text-lg cursor-pointer ${
                      activeItem === "newsletter"
                        ? "bg-[#00594526] text-[#2D9CDB] rounded-lg font-semibold"
                        : "text-[#464255] font-medium"
                    }`}
                  >
                    <IoNewspaper />
                    <h1>News Letter</h1>
                  </div>
                </div>
                {/* Course */}
                <div
                  className={`pl-6 ${
                    activeItem === "course"
                      ? "border-l-6 border-l-[#2D9CDBCC]"
                      : "pl-7"
                  }`}
                  onClick={() => setActiveItem("course")}
                >
                  <div
                    className={`w-full flex items-center gap-5 py-4 px-5 text-lg cursor-pointer ${
                      activeItem === "course"
                        ? "bg-[#00594526] text-[#2D9CDB] rounded-lg font-semibold"
                        : "text-[#464255] font-medium"
                    }`}
                  >
                    <SiDiscourse />
                    <h1>Course</h1>
                  </div>
                </div>
                {/* video */}
                <div
                  className={`pl-6 ${
                    activeItem === "video"
                      ? "border-l-6 border-l-[#2D9CDBCC]"
                      : "pl-7"
                  }`}
                  onClick={() => setActiveItem("video")}
                >
                  <div
                    className={`w-full flex items-center gap-5 py-4 px-5 text-lg cursor-pointer ${
                      activeItem === "video"
                        ? "bg-[#00594526] text-[#2D9CDB] rounded-lg font-semibold"
                        : "text-[#464255] font-medium"
                    }`}
                  >
                    <FiVideo />
                    <h1>Video</h1>
                  </div>
                </div>
                {/* form */}
                <div
                  className={`pl-6 ${
                    activeItem === "form" ? "border-l-6 border-l-[#2D9CDBCC]" : "pl-7"
                  }`}
                  onClick={() => setActiveItem("form")}
                >
                  <div
                    className={`w-full flex items-center gap-5 py-4 px-5 text-lg cursor-pointer ${
                      activeItem === "form"
                        ? "bg-[#00594526] text-[#2D9CDB] rounded-lg font-semibold"
                        : "text-[#464255] font-medium"
                    }`}
                  >
                    <FaWpforms />
                    <h1>Form</h1>
                  </div>
                </div>
                {/* Author */}
                <div
                  className={`pl-6 ${
                    activeItem === "author"
                      ? "border-l-6 border-l-[#2D9CDBCC]"
                      : "pl-7"
                  }`}
                  onClick={() => setActiveItem("author")}
                >
                  <div
                    className={`w-full flex items-center gap-5 py-4 px-5 text-lg cursor-pointer ${
                      activeItem === "author"
                        ? "bg-[#00594526] text-[#2D9CDB] rounded-lg font-semibold"
                        : "text-[#464255] font-medium"
                    }`}
                  >
                    <FaUserAlt />
                    <h1>Author</h1>
                  </div>
                </div>
                {/* Setting */}
                <div
                  className={`pl-6 ${
                    activeItem === "setting"
                      ? "border-l-6 border-l-[#2D9CDBCC]"
                      : "pl-7"
                  }`}
                  onClick={() => setActiveItem("setting")}
                >
                  <div
                    className={`w-full flex items-center gap-5 py-4 px-5 text-lg cursor-pointer ${
                      activeItem === "setting"
                        ? "bg-[#00594526] text-[#2D9CDB] rounded-lg font-semibold"
                        : "text-[#464255] font-medium"
                    }`}
                  >
                    <CiSettings />
                    <h1>Setting</h1>
                  </div>
                </div>
                {/* Sign Out */}
                <div
                  className={`pl-6 ${
                    activeItem === "signout"
                      ? "border-l-6 border-l-[#2D9CDBCC]"
                      : "pl-7"
                  }`}
                  onClick={() => setActiveItem("signout")}
                >
                  <div
                    className={`w-full flex items-center gap-5 py-4 px-5 text-lg cursor-pointer ${
                      activeItem === "signout"
                        ? "bg-[#00594526] text-[#2D9CDB] rounded-lg font-semibold"
                        : "text-[#464255] font-medium"
                    }`}
                  >
                    <PiSignOutFill />
                    <h1>Sign Out</h1>
                  </div>
                </div>
              </div>
            </div>
      </section>
    )

    return (
      <nav className="sticky top-0 bg-[#F9F9F9] z-50">
        <div className="w-[95%] mx-auto flex flex-col gap-7 py-4 lg:flex-row lg:items-center lg:justify-between lg:w-full lg:py-6">
          {/* head text */}
          <div className="text-center lg:text-start">
            <h1 className="text-[#464255] font-semibold text-2xl">Dashboard</h1>
            <p className="text-[#2D9CDB99] font-medium text-sm lg:text-base">
              Hi, Samantha. Welcome back to Sedap Admin!
            </p>
          </div>
          {/*  */}
          <div className="flex items-center justify-between lg:gap-7">
            {/*  */}
            <div className="block lg:hidden">
              <div
                onClick={toggleDrawer(true)}
                className="text-3xl text-[#2D9CDB]"
              >
                <GiHamburgerMenu />
              </div>
              <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                className="block"
              >
                {sidebar}
              </Drawer>
            </div>
            {/* notification bell */}
            <div className="lg:border-r lg:border-r-[#D0D6DE] lg:pr-7">
              <Box
                sx={{
                  backgroundColor: "#2D9CDB26",
                  borderRadius: "15px",
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton>
                  <Badge
                    badgeContent={21}
                    color="primary"
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "#2D9CDB",
                        color: "white",
                        fontSize: "10px",
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        border: "2px solid white",
                        top: -4,
                        right: -4,
                      },
                    }}
                  >
                    <RiNotification2Line color="#2D9CDB" />
                  </Badge>
                </IconButton>
              </Box>
            </div>
            {/* profile */}
            <div className="flex items-center gap-3 lg:gap-5">
              <h1 className="text-[#464255] font-medium">
                Hello, <b>Samantha</b>
              </h1>
              <div className="w-14 h-14 rounded-full">
                <img
                  src={profile}
                  alt="profile"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar
