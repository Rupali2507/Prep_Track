import React from "react";
import {
  FaBullseye,
  FaCog,
  FaSignOutAlt,
  FaTh,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import NavBar from "../components/NavBar";
import asests from "../assets/assests";
import { useState } from "react";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
    <div>
      {/* NavBar for smaller screen */}
      <div className="lg:hidden">
        <NavBar />
      </div>
      {/* sidebar for larger screen*/}
      <SideBar />
    </div>
  );
};

export default Dashboard;
