import React from "react";
import {
  FaBullseye,
  FaChevronLeft,
  FaCog,
  FaSignOutAlt,
  FaTh,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import asests from "../assets/assests";
import { usePageContext } from "../context/PageContext";

const SideBar = () => {
  const navigate = useNavigate();
  const { visibility, setVisibility } = usePageContext();

  const location = useLocation();
  return (
    <div className="h-screen fixed">
      <div
        className={` ${
          visibility ? "visible" : "hidden"
        } border-r-2 w-64 h-full border-gray-800  flex-col justify-between lg:flex`}
      >
        {/* upper options */}
        <div className=" ">
          <div className="flex border-gray-700 border-b-1">
            <div className="p-6 flex items-center ">
              <img className="  h-[35px]" src={asests.logo} alt="" />
            </div>
            <div
              onClick={() => setVisibility(false)}
              className=" flex items-center cursor-pointer lg:hidden"
            >
              <FaChevronLeft className={`size-5 mr-2`} />
            </div>
          </div>

          <div
            className="flex justify-center "
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <div
              className={`menu ${
                location.pathname === "/dashboard" ? "active" : ""
              } flex items-center justify-start  text-lg  cursor-pointer w-full m-3 px-5 py-3 rounded-2xl gap-8`}
            >
              <FaTh /> Dashboard
            </div>
          </div>
          <div
            className=" flex justify-center "
            onClick={() => {
              navigate("/goals");
            }}
          >
            <div
              className={` menu ${
                location.pathname === "/goals" ? "active" : ""
              } flex items-center justify-start  text-lg  cursor-pointer w-full m-3 px-5 py-3 rounded-2xl gap-8`}
            >
              <FaBullseye /> My Goals
            </div>
          </div>
          <div
            className="flex justify-center"
            onClick={() => {
              navigate("/collaboration");
            }}
          >
            <div
              className={` menu ${
                location.pathname === "/collaboration" ? "active" : ""
              }   flex items-center justify-start  text-lg  cursor-pointer w-full m-3 px-5 py-3 rounded-2xl gap-8`}
            >
              <FaUsers /> Collab Rooms
            </div>
          </div>
        </div>
        {/* lower options */}
        <div className="pl-10 absolute bottom-0 ">
          <div className=" w-full pb-5 flex items-center   gap-8 cursor-pointer">
            <FaUser /> Profile
          </div>
          <div className=" w-full pb-5 flex items-center  gap-8 cursor-pointer">
            <FaCog />
            Settings
          </div>
          <div className=" w-full pb-5 flex items-center gap-8 cursor-pointer">
            <FaSignOutAlt />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
