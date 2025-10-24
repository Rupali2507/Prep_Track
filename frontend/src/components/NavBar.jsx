import React from "react";
import asests from "../assets/assests";
import { FaBars, FaSun, FaMoon, FaCut, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { usePageContext } from "../context/PageContext";

const NavBar = () => {
  const [navmenu, setnavmenu] = useState(false);
  const { darkMode, setDarkMode, navigate } = usePageContext();
  return (
    <div
      className={`flex justify-between w-full lg:px-10 absolute shadow-xs shadow-gray-500 ${
        darkMode ? "" : "bg-[#898a8d]"
      }`}
    >
      <div className="flex justify-between lg:w-2/4 ">
        <div className=" flex items-center pl-5">
          <img className="h-[35px]" src={asests.logo} alt="" />
        </div>
        <div className="hidden lg:flex">
          <div
            onClick={() => navigate("/")}
            className=" flex items-center p-5 text-md cursor-pointer "
          >
            Home
          </div>
          <div
            onClick={() => navigate("/about")}
            className=" flex items-center p-5 text-md cursor-pointer"
          >
            About
          </div>
          <div
            onClick={() => navigate("/dashboard")}
            className=" flex items-center p-5 text-md cursor-pointer"
          >
            Dashboard
          </div>
          <div className=" flex items-center p-5 text-md">Collab Rooms</div>
        </div>
      </div>
      <div>
        {navmenu ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
            onClick={() => setnavmenu(false)}
          >
            <FaTimes className="m-6 size-[25px] cursor-pointer" />
          </motion.div>
        ) : (
          <div className="flex lg:hidden  items-center">
            <div
              onClick={() => setDarkMode((prev) => !prev)}
              className={`${
                darkMode ? "bg-gray-900" : ""
              } justify-center flex border  border-gray-700 rounded-full cursor-pointer`}
            >
              {darkMode ? (
                <FaSun className="text-white-500 size-5 m-3" />
              ) : (
                <FaMoon className=" size-5 m-3" />
              )}
            </div>
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
              onClick={() => setnavmenu(true)}
            >
              <FaBars className=" items-center m-6 size-6 cursor-pointer" />
            </motion.div>
          </div>
        )}

        <div className=" hidden lg:flex items-center p-8 gap-4 ">
          <div
            onClick={() => setDarkMode((prev) => !prev)}
            className={`${
              darkMode ? "bg-gray-900" : ""
            } justify-center flex border p-3 border-gray-700 rounded-full cursor-pointer`}
          >
            {darkMode ? (
              <FaSun className="text-white-500 size-5" />
            ) : (
              <FaMoon className=" size-5" />
            )}
          </div>
          <div
            onClick={() => navigate("/login")}
            className={`${
              darkMode ? "bg-[#00FFFF] text-black" : "bg-[#456789] text-white"
            } px-10 py-1 shadow-black shadow-sm rounded-2xl cursor-pointer`}
          >
            Login
          </div>
          <div
            onClick={() => navigate("/signup")}
            className={`${
              darkMode ? "bg-[#00FFFF] text-black" : "bg-[#456789] text-white"
            } px-10 py-1 shadow-black shadow-sm  rounded-2xl cursor-pointer`}
          >
            Signup
          </div>
        </div>
        <div></div>
      </div>
      <AnimatePresence>
        {navmenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className=" overflow-hidden absolute w-full   backdrop-blur-2xl top-20 border-b-1 border-gray-700"
          >
            <div className="">
              <div
                onClick={() => navigate("/")}
                className=" flex justify-center items-center p-5 text-lg cursor-pointer  "
              >
                Home
              </div>
              <div
                onClick={() => navigate("/about")}
                className=" flex justify-center items-center p-5 text-lg cursor-pointer"
              >
                About
              </div>
              <div className=" flex items-center p-5 justify-center text-lg cursor-pointer">
                Goals
              </div>
              <div className=" flex items-center justify-center p-5 text-lg cursor-pointer">
                Collab Rooms
              </div>
              <div className="flex  items-center justify-center p-5  text-lg gap-5">
                <div
                  onClick={() => navigate("/login")}
                  className={`${
                    darkMode
                      ? "bg-[#00FFFF] text-black"
                      : "bg-[#456789] text-white"
                  } px-15 py-1 border rounded-2xl cursor-pointer`}
                >
                  Login
                </div>

                <div
                  onClick={() => navigate("/signup")}
                  className={`${
                    darkMode
                      ? "bg-[#00FFFF] text-black"
                      : "bg-[#456789] text-white"
                  } px-15 py-1 border rounded-2xl cursor-pointer`}
                >
                  {" "}
                  Signup
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
