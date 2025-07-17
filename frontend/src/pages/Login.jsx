import React from "react";
import NavBar from "../components/NavBar";
import { usePageContext } from "../context/PageContext";

const Login = () => {
  const { darkmode, navigate } = usePageContext();
  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center items-center">
        <div
          className={`  border-2   border-[#355050] rounded-xl p-10 gap-5 flex flex-col  items-center`}
        >
          <div className={` pb-5 text-2xl`}>Login</div>

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
          <button className="bg-[#144c4c] w-full rounded-2xl py-2 cursor-pointer">
            Login
          </button>

          <p
            onClick={() => navigate("/signin")}
            className="text-blue-400 cursor-pointer"
          >
            {" "}
            Don't have account? Signin
          </p>
          <p className="text-blue-400 cursor-pointer"> Forgot Password?</p>
        </div>
      </div>
    </>
  );
};

export default Login;
