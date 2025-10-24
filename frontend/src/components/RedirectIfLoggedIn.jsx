import React, { useEffect } from "react";
import { usePageContext } from "../context/PageContext";
import { toast } from "react-toastify";

const RedirectIfLoggedIn = ({ children }) => {
  const { navigate } = usePageContext();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      toast.info("You are already loggedin.");
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);
  return !localStorage.getItem("acessToken") ? children : null;
};

export default RedirectIfLoggedIn;
