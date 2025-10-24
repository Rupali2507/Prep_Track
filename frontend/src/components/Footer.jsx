import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import assets from "../assets/assests.js";
export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-gray-400 py-10 border-t border-gray-800 ">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <img src={assets.logo} alt="" className="w-40" />
          <p className="text-sm mt-1 text-gray-500">
            Track your preparation, achieve your goals.
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-sky-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-sky-400 transition">
            About
          </Link>
          <Link to="/dashboard" className="hover:text-sky-400 transition">
            Dashboard
          </Link>
          <Link to="/collab" className="hover:text-sky-400 transition">
            Collab Rooms
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex justify-center md:justify-end gap-4 text-xl">
          <a href="#" className="hover:text-sky-400 transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 mt-8">
        © {new Date().getFullYear()} Prep&Track. All rights reserved.
      </div>
    </footer>
  );
}
