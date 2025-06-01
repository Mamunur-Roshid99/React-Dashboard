import React, { useState } from 'react'

import profile from '../assets/navbar.jpg'

import { Badge, Box, IconButton } from "@mui/material";
import { RiNotification2Line } from "react-icons/ri";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { GiHamburgerMenu } from "react-icons/gi";

import Slidebar from './Slidebar';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    return (
      <nav className="sticky top-0 bg-[#F9F9F9]">
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
                {<Slidebar />}
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
