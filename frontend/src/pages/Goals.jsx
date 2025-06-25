import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import asests from "../assets/assests";
import { usePageContext } from "../context/PageContext";
import { FaBars } from "react-icons/fa";
import TopBar from "../components/TopBar";
const Goals = () => {
  const { visibility, setVisibility } = usePageContext();
  return (
    <div className="flex">
      <div className={`${visibility ? "flex" : "hidden"} lg:flex `}>
        <SideBar />
      </div>
      <div className="flex flex-col  w-full">
        <div>
          <TopBar />
        </div>
      </div>
    </div>
  );
};

export default Goals;
