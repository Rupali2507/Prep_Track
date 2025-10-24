import React from "react";
import { FaArrowRight, FaStar, FaStarHalf } from "react-icons/fa";
import NavBar from "../components/NavBar";
import asests from "../assets/assests";
import { Navigate } from "react-router-dom";
import { usePageContext } from "../context/PageContext";
import About from "./About";
import Footer from "../components/Footer";

const Home = () => {
  const { navigate, dark } = usePageContext();
  return (
    <>
      <NavBar />
      <div className="h-[90vh] flex flex-col justify-center items-center text-center px-5 bg-gray-900 text-white pt-40 ">
        {/* Hero Section */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-[roboto] ">
          Track Your Preparation,
          <br /> Achieve Your Goals
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mb-6">
          Prep&Track is the best platform to help you enhance your skills,
          expand your knowledge and prepare for technical interviews.
        </p>

        <button className="px-8 py-3 bg-cyan-400 text-black rounded-xl font-medium text-lg shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:scale-105 transition">
          Get started now
        </button>

        {/* Rating Section */}
        <div className="mt-8 text-gray-600">
          <p className="mb-2 text-sm">They trust us</p>
          <div className="flex items-center justify-center gap-3 pl-10">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-yellow-400 text-xl">☆</span>
            <span className="ml-2 font-semibold text-lg text-gray-900">
              4.5+
            </span>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Home;
