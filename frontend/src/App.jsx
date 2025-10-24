import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import CollabRooms from "./pages/CollabRooms";
import { ToastContainer } from "react-toastify";
import { usePageContext } from "./context/PageContext";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectIfLoggedIn from "./components/RedirectIfLoggedIn";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/goals" element={<Goals />} />
        <Route path="/collaboration" element={<CollabRooms />} />
        <Route
          path="/login"
          element={
            <RedirectIfLoggedIn>
              <Login />
            </RedirectIfLoggedIn>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectIfLoggedIn>
              <Signin />
            </RedirectIfLoggedIn>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
