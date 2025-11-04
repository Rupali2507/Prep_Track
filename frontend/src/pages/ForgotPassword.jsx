import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { usePageContext } from "../context/PageContext";
import { toast } from "react-toastify";
import { api } from "../api/apiClient";

const ForgotPassword = () => {
  const { navigate } = usePageContext();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your registered email");
      return;
    }

    try {
      setLoading(true);

      // Call backend API for password reset
      const response = await api.forgotPassword({ email });

      if (response?.success) {
        toast.success("Reset link sent to your email!");
        navigate("/login");
      } else {
        toast.error(response?.message || "Failed to send reset link");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
        <form
          onSubmit={handleForgotPassword}
          className="border-2 border-[#355050] rounded-xl p-10 flex flex-col gap-5 items-center w-full max-w-md"
        >
          <div className="pb-5 text-2xl">Forgot Password</div>

          <p className="text-gray-400 text-center -mt-3">
            Enter your registered email to receive a password reset link.
          </p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="border border-gray-500 px-4 pr-20 py-2 rounded text-white bg-transparent w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#144c4c] w-full rounded-2xl py-2 cursor-pointer transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#166666]"
            }`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <p
            onClick={() => navigate("/login")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Back to Login
          </p>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
