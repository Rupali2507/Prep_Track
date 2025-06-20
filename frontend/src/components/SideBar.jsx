import React from "react";
import {
  FaBullseye,
  FaCog,
  FaSignOutAlt,
  FaTh,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import asests from "../assets/assests";

const SideBar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  return (
    <div>
      <div className="hidden border-r-2 w-64 h-screen border-gray-800 lg:flex flex-col justify-between">
        {/* upper options */}
        <div className="">
          <div className="p-6 flex items-center border-gray-700 border-b-1">
            <img className="  h-[35px]" src={asests.logo} alt="" />
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
        <div className="pl-10">
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
