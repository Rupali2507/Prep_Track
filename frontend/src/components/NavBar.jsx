import React from "react";
import asests from "../assets/assests";
import { FaBars, FaBell, FaCross, FaCut, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [navmenu, setnavmenu] = useState(false);
  return (
    <div className="flex justify-between w-full m-3 lg:px-10 ">
      <div className="flex justify-between lg:w-2/4 ">
        <div className=" flex items-center pl-5">
          <img className="h-[35px]" src={asests.logo} alt="" />
        </div>
        <div className="hidden lg:flex">
          <div className=" flex items-center p-5 text-md  "> Home </div>
          <div className=" flex items-center p-5 text-md">About</div>
          <div className=" flex items-center p-5 text-md"> Goals</div>
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
          <motion.div
            key="open"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3 }}
            onClick={() => setnavmenu(true)}
          >
            <FaBars className="lg:hidden flex items-center m-6 size-6 cursor-pointer" />
          </motion.div>
        )}

        <div className=" hidden lg:flex items-center p-8 gap-4 ">
          <div
            style={{ backgroundColor: "#00FFFF", color: "black" }}
            className="px-8 py-1 border rounded-2xl cursor-pointer"
          >
            Login
          </div>
          <div
            style={{ backgroundColor: "#00FFFF", color: "black" }}
            className="px-8 py-1 border rounded-2xl cursor-pointer"
          >
            SignIn
          </div>
          {/* <FaBell className="size-[25px]" /> */}
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
              <div className=" flex justify-center items-center p-5 text-lg cursor-pointer  ">
                Home
              </div>
              <div className=" flex justify-center items-center p-5 text-lg cursor-pointer">
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
                  style={{ backgroundColor: "#00FFFF", color: "black" }}
                  className="px-15 py-1 border rounded-2xl cursor-pointer"
                >
                  Login
                </div>

                <div
                  style={{ backgroundColor: "#00FFFF", color: "black" }}
                  className="px-15 py-1 border rounded-2xl cursor-pointer"
                >
                  {" "}
                  SignIn
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
