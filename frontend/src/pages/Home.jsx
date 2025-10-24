import React from "react";
import { FaArrowRight, FaStar, FaStarHalf } from "react-icons/fa";
import NavBar from "../components/NavBar";
import asests from "../assets/assests";
import { Navigate } from "react-router-dom";
import { usePageContext } from "../context/PageContext";

const Home = () => {
  const { navigate } = usePageContext();
  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center items-center flex-col">
        {/* Hero section */}
        <div className="flex flex-col justify-center items-center text-center p-5 gap-2 ">
          <h1 className="text-[38px] lg:text-[65px] mb-4 ">
            Track Your Prepration, Achieve Your Goals
          </h1>
          <p className="text-xl text-gray-700 max-w-md">
            Your personal study companion to plan, track, and crush your goals
            every day.
          </p>
          <button
            onClick={() => navigate("/signin")}
            style={{
              backgroundColor: "#00FFFF",
              color: "black",
              boxShadow: "0 0 20px 4px rgba(0, 255, 255, 0.6)",
            }}
            className="px-10 py-[10px] mt-5  rounded-4xl cursor-pointer text-lg  "
          >
            Get started now
          </button>
        </div>
        <div className="flex items-center justify-center text-sm flex-col gap-2">
          <p>They trusts us</p>
          <div className="flex gap-2 items-center">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />{" "}
            <p>4.5+</p>
          </div>
        </div>

        {/* Glimpse of DashBoard */}
        <div></div>
      </div>
    </>
  );
};

export default Home;
