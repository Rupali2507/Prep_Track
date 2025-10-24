import React from "react";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { usePageContext } from "../context/PageContext";
import { toast } from "react-toastify";
import { api } from "../api/apiClient";

const Login = () => {
  const { navigate, setUser } = usePageContext();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      setloading(true);

      if (!email || !password) {
        toast.error("All fields are required");
        return;
      }

      const data = await api.signin({ email, password });
      if (data?.tokens?.accessToken) {
        localStorage.setItem("accessToken", data.tokens.accessToken);
      }
      if (data?.user?.name) {
        setUser(data.user.name);
        localStorage.setItem("usename", data.user.name);
      }
      if (!data) return;

      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center text-white items-center bg-gray-900">
        <form
          onSubmit={handleUserLogin}
          className={`  border-2   border-[#355050] rounded-xl p-10 gap-5 flex flex-col  items-center text-white`}
        >
          <div className={` pb-5 text-2xl`}>Login</div>

          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
            required
            className="border border-gray-500 px-4 pr-20 py-2 rounded text-white"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="border border-gray-500 px-4 pr-20 py-2 rounded"
          />
          <button
            onClick={() => {
              handleUserLogin();
            }}
            className="bg-[#144c4c] w-full rounded-2xl py-2 cursor-pointer"
          >
            Login
          </button>

          <p
            onClick={() => navigate("/signup")}
            className="text-blue-400 cursor-pointer"
          >
            {" "}
            Don't have account? Signup
          </p>
          <p className="text-blue-400 cursor-pointer"> Forgot Password?</p>
        </form>
      </div>
    </>
  );
};

export default Login;
