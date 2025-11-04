import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { usePageContext } from "../context/PageContext";
import { toast } from "react-toastify";
import { api } from "../api/apiClient";

const ResetPassword = () => {
  const { navigate } = usePageContext();
  const token = new URLSearchParams(window.location.search).get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await api.resetPassword(token, {
        newPassword: password,
      });

      if (response?.success) {
        toast.success("Password reset successful!");
        navigate("/login");
      } else {
        toast.error(response?.message || "Invalid or expired token");
      }
    } catch (error) {
      console.error("Reset password error:", error);
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
          onSubmit={handleResetPassword}
          className="border-2 border-[#355050] rounded-xl p-10 flex flex-col gap-5 items-center w-full max-w-md"
        >
          <div className="pb-5 text-2xl">Reset Password</div>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            required
            className="border border-gray-500 px-4 py-2 rounded text-white bg-transparent w-full"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
            className="border border-gray-500 px-4 py-2 rounded text-white bg-transparent w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#144c4c] w-full rounded-2xl py-2 cursor-pointer transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#166666]"
            }`}
          >
            {loading ? "Resetting..." : "Reset Password"}
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

export default ResetPassword;
