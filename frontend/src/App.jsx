import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import CollabRooms from "./pages/CollabRooms";
import { ToastContainer } from "react-toastify";
import { usePageContext } from "./context/PageContext";

const App = () => {
  const { darkMode } = usePageContext();
  return (
    <div className={`${darkMode ? "bg-[#13151a] text-white" : "bg-[#f4f0f7]"}`}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/collaboration" element={<CollabRooms />} />
      </Routes>
    </div>
  );
};

export default App;
