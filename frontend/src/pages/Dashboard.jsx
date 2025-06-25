import React, { useContext } from "react";
import {
  FaBars,
  FaBell,
  FaPlusSquare,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

import asests from "../assets/assests";
import { useState } from "react";
import SideBar from "../components/SideBar";
import { usePageContext } from "../context/PageContext";
import AddGoal from "../components/AddGoal";
import { toast } from "react-toastify";
import TopBar from "../components/TopBar";

const Dashboard = () => {
  const {
    visibility,
    setVisibility,
    goals,
    showAddGoal,
    setShowAddGoal,
    setGoals,
  } = usePageContext();
  const [completed, setcompleted] = useState([]);
  const handleDeleteGoal = (indexToDelete) => {
    try {
      const updatedGoals = goals.filter((_, idx) => idx !== indexToDelete);
      setGoals(updatedGoals);
      toast.success("Goals deleted successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex">
      {/* sidebar for larger screen*/}
      {/* left */}
      <div className={`${visibility ? "flex" : "hidden"} lg:flex h-full `}>
        <SideBar />
      </div>
      {/* right */}

      <div className="flex flex-col  w-full">
        {/* navbar */}
        <div>
          <TopBar />
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[18rem] ${
            visibility ? "ml-64" : ""
          }lg:ml-64 `}
        >
          {/* grid 1 - spans 2 cols and 1 row */}
          <div className="col-span-3 row-span-2 flex   border-1 border-gray-700 rounded-2xl mx-4 p-8 shadow-2xl shadow-gray-800 flex-col">
            <div className="w-full flex flex-col grow transition-all duration-500 gap-5">
              <div className="text-xl">Welcome back, User!!</div>
              {goals.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center gap-5 h-full">
                  <p className="text-xl font-semibold">No goals yet</p>
                  <p className="text-gray-400 italic">
                    “A goal without a plan is just a wish.”
                  </p>
                  <button
                    onClick={() => setShowAddGoal(true)}
                    className="flex flex-col items-center gap-2  px-4 py-2 rounded-lg shadow cursor-pointer"
                  >
                    <FaPlusSquare className=" size-8 text-lg " />
                    <div className="px-8 py-3 border-1 border-gray-800">
                      {" "}
                      Add Your First Goal
                    </div>
                  </button>
                  {showAddGoal && (
                    <AddGoal onClose={() => setShowAddGoal(false)} />
                  )}
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between gap-5">
                    <div className=" mt-4">
                      Small steps every day lead to big results. Let’s make
                      progress today!
                      <br />
                      <p className="p-3 border-1 w-1/2 rounded-4xl mt-2 font-medium">
                        {" "}
                        Your active goals
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAddGoal(true)}
                      className="flex flex-col items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white mx-3 px-3 py-2 rounded-lg shadow border-1 border-gray-800 w-[120px] justify-center cursor-pointer"
                    >
                      <FaPlusSquare className=" size-5  " />
                      Add Goal
                    </button>
                    {showAddGoal && (
                      <AddGoal onClose={() => setShowAddGoal(false)} />
                    )}
                  </div>
                  {/* Goal cards */}
                  <div
                    className={`grid gap-4 transition-all duration-300 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                  `}
                  >
                    {goals.map((goal, index) => (
                      <div
                        key={index}
                        style={{ backgroundColor: "#073B3A" }}
                        className="p-4 rounded-xl shadow-md hover:shadow-lg border-1 border-gray-600 flex justify-center  flex-col gap-3"
                      >
                        <div
                          style={{ backgroundColor: "#073B3A" }}
                          className="flex gap-3 items-center justify-between "
                        >
                          <div
                            style={{ backgroundColor: "#073B3A" }}
                            className="flex gap-3 items-center"
                          >
                            <p style={{ backgroundColor: "#073B3A" }}>Goal:</p>
                            <h3
                              style={{ backgroundColor: "#073B3A" }}
                              className="text-lg font-semibold"
                            >
                              {goal.title}
                            </h3>
                          </div>
                          <FaTimes
                            onClick={() => handleDeleteGoal(index)}
                            style={{ backgroundColor: "#073B3A" }}
                            className="cursor-pointer"
                          />
                        </div>
                        <p
                          style={{ backgroundColor: "#073B3A" }}
                          className="text-sm text-gray-400"
                        >
                          {goal.description}
                        </p>
                        <div
                          style={{ backgroundColor: "#073B3A" }}
                          className="flex items-center gap-3"
                        >
                          <p style={{ backgroundColor: "#073B3A" }}>
                            Deadline:
                          </p>
                          <div style={{ backgroundColor: "#073B3A" }}>
                            {goal.deadline}
                          </div>
                        </div>
                        <div
                          style={{ backgroundColor: "#073B3A" }}
                          className="flex gap-4 items-center"
                        >
                          <input className="size-4 " type="checkbox" />
                          <label
                            style={{ backgroundColor: "#073B3A" }}
                            className=" "
                            htmlFor=""
                          >
                            Completed
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Goals stats */}

                  <div className="absolute bottom-10 border-1 border-[#00FFFF] w-1/2 px-5 py-3 rounded-2xl">
                    Total Active Goals: {goals.length}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* grid 2 - normal 1x1 card */}
          <div className=" border-1 border-gray-700 rounded-2xl mx-4 p-8 shadow-2xl shadow-gray-800"></div>

          {/* grid 3 - tall card */}
          <div className=" border-1 border-gray-700 rounded-2xl mx-4 p-8 shadow-2xl shadow-gray-800"></div>

          {/* grid 4 - wide card */}
          <div className=" col-span-3  border-1 border-gray-700 rounded-2xl mx-4 p-8 shadow-2xl shadow-gray-800"></div>

          {/* grid 5 - normal 1x1 card */}
          <div className="  border-1 border-gray-700 rounded-2xl mx-4 p-8 shadow-2xl shadow-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
