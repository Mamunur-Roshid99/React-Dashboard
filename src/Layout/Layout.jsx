import React from "react";

import Navbar from "./Navbar";
import Slidebar from "./Slidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full flex gap-4 align-center justify-between">
      <Slidebar />

      <div className="w-screen lg:ml-[320px] lg:mr-9">
        <Navbar />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
