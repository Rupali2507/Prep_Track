import React from "react";
import { usePageContext } from "../context/PageContext";

import { FaBell, FaSearch, FaBars } from "react-icons/fa";
import asests from "../assets/assests";
import { useLocation } from "react-router-dom";

const TopBar = () => {
  const { visibility, setVisibility } = usePageContext();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="w-full">
      <div
        className={`flex  justify-between   ${
          visibility ? "ml-105 lg:ml-65" : ""
        }`}
      >
        <div
          className={`${
            visibility ? "hidden" : "flex"
          } lg:hidden cursor-pointer`}
        >
          <FaBars
            onClick={() => setVisibility(true)}
            className={` size-5 m-8`}
          />

          <div className={` p-6 flex items-center`}>
            <img className="  h-[35px]" src={asests.logo} alt="" />
          </div>
        </div>

        {location.pathname === "/dashboard" && (
          <div className="hidden lg:flex  p-5 text-lg font-light">
            Main Dashboard
          </div>
        )}
        {location.pathname === "/collaboration" && (
          <div className="hidden lg:flex p-5 text-lg font-light">
            Collaborations Rooms
          </div>
        )}
        {location.pathname === "/goals" && (
          <div className="hidden lg:flex p-5  text-lg font-light">Goals</div>
        )}
        <div className="p-5 flex ">
          <FaBell className="m-3 size-5 justify-center flex" />
          <div>
            <input
              type="text"
              placeholder="Search"
              className="border py-2 px-8 rounded-xl"
            />
          </div>
          <FaSearch className="absolute top-8 right-8" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
