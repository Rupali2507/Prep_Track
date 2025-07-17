import React from "react";
import NavBar from "../components/NavBar";
import { usePageContext } from "../context/PageContext";

const Signin = () => {
  const { darkmode, navigate } = usePageContext();
  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center items-center">
        <div
          className={`  border-2   border-[#355050] rounded-xl p-10 gap-5 flex flex-col  items-center`}
        >
          <div className={` pb-5 text-2xl`}>Signin</div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            required
            className="border border-gray-500 px-4 pr-20 py-2 rounded"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            required
            className="border border-gray-500 px-4 pr-20 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="border border-gray-500 px-4 pr-20 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="border border-gray-500 px-4 pr-20 py-2 rounded"
          />
          <button className="bg-[#144c4c] w-full rounded-2xl py-2 cursor-pointer">
            Signin
          </button>

          <p
            onClick={() => navigate("/login")}
            className="text-blue-400 cursor-pointer"
          >
            {" "}
            Already have account? Login
          </p>
        </div>
      </div>
    </>
  );
};

export default Signin;
