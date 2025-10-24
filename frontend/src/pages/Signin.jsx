import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { usePageContext } from "../context/PageContext";
import { api } from "../api/apiClient";
import { toast } from "react-toastify";

const Signin = () => {
  const { navigate, setUser } = usePageContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }
    if (password != confirmPassword) {
      toast.error("Password and confirm password should be same.");
      return;
    }
    try {
      setLoading(true);

      const data = await api.signup({ name, email, password });
      if (data?.tokens?.accessToken) {
        localStorage.setItem("accessToken", data.tokens.accessToken);
      }
      if (data?.user?.name) {
        setUser(data.user.name);
        localStorage.setItem("usename", data.user.name);
      }
      if (!data) {
        return;
      }

      toast.success("Signup successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center items-center">
        <form
          onSubmit={handleSignup}
          className="border-2 border-[#355050] rounded-xl p-10 gap-5 flex flex-col items-center"
        >
          <div className="pb-5 text-2xl">Signup</div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="border border-gray-500 px-4 pr-20 py-2 rounded"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="border border-gray-500 px-4 pr-20 py-2 rounded"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="border border-gray-500 px-4 pr-20 py-2 rounded"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
            className="border border-gray-500 px-4 pr-20 py-2 rounded"
          />

          <button
            onClick={handleSignup}
            className={`bg-[#144c4c] w-full rounded-2xl py-2 cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>

          <p
            onClick={() => navigate("/login")}
            className="text-blue-400 cursor-pointer"
          >
            Already have an account? Login
          </p>
        </form>
      </div>
    </>
  );
};

export default Signin;
