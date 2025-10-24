import React, { useState, useEffect } from "react";
import {
  FaPlusSquare,
  FaTimes,
  FaChartLine,
  FaClock,
  FaFire,
} from "react-icons/fa";
import { toast } from "react-toastify";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import AddGoal from "../components/AddGoal";
import { usePageContext } from "../context/PageContext";

// helper for random motivational quotes
const quotes = [
  "Discipline is the bridge between goals and accomplishment.",
  "Don’t watch the clock; do what it does. Keep going.",
  "A goal without a plan is just a wish.",
  "Progress, not perfection.",
  "You don’t have to be great to start, but you have to start to be great.",
];

const Dashboard = () => {
  const {
    visibility,
    setVisibility,
    goals,
    setGoals,
    showAddGoal,
    setShowAddGoal,
    user,
  } = usePageContext();

  const [completed, setCompleted] = useState([]);
  const [quote, setQuote] = useState("");
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // pick a random quote for each session
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  useEffect(() => {
    const current = localStorage.getItem("streak");
    if (current) setStreak(parseInt(current));
    else {
      localStorage.setItem("streak", 1);
      setStreak(1);
    }
  }, []);

  const handleDeleteGoal = (indexToDelete) => {
    try {
      const updatedGoals = goals.filter((_, idx) => idx !== indexToDelete);
      setGoals(updatedGoals);
      toast.success("Goal deleted successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleToggleComplete = (goalIndex) => {
    if (completed.includes(goalIndex)) {
      setCompleted(completed.filter((idx) => idx !== goalIndex));
    } else {
      setCompleted([...completed, goalIndex]);
    }
  };

  const progressPercent =
    goals.length === 0
      ? 0
      : Math.round((completed.length / goals.length) * 100);

  return (
    <div className="flex min-h-screen text-white bg-[#050505]">
      {/* Sidebar */}
      <div className={`${visibility ? "flex" : "hidden"} lg:flex`}>
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full">
        <TopBar />

        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[18rem] p-4 ${
            visibility ? "ml-64" : ""
          } lg:ml-64 transition-all duration-500`}
        >
          {/* MAIN GOAL SECTION */}
          <div className="col-span-3 row-span-2 border border-gray-700 rounded-2xl p-8 shadow-2xl shadow-gray-800 flex flex-col">
            <div className="flex flex-col grow gap-5">
              <div className="text-xl font-semibold">
                Welcome back, {user || " User"}!!
              </div>

              {goals.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center gap-5 h-full">
                  <p className="text-xl font-semibold">No goals yet</p>
                  <p className="text-gray-400 italic">
                    “A goal without a plan is just a wish.”
                  </p>
                  <button
                    onClick={() => setShowAddGoal(true)}
                    className="flex flex-col items-center gap-2 px-4 py-2 rounded-lg shadow cursor-pointer hover:scale-105 transition-all"
                  >
                    <FaPlusSquare className="size-8 text-lg text-cyan-400" />
                    <div className="px-8 py-3 border border-gray-800">
                      Add Your First Goal
                    </div>
                  </button>
                  {showAddGoal && (
                    <AddGoal onClose={() => setShowAddGoal(false)} />
                  )}
                </div>
              ) : (
                <div className="flex flex-col gap-6 relative justify-between  ">
                  <div className="flex justify-between items-center">
                    <div>
                      <p>
                        Small steps every day lead to big results. Let’s make
                        progress today!
                      </p>
                      <p className="p-3 border border-gray-700 rounded-xl mt-2 font-medium inline-block">
                        Your active goals
                      </p>
                    </div>

                    <button
                      onClick={() => setShowAddGoal(true)}
                      className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg shadow border border-gray-800 cursor-pointer"
                    >
                      <FaPlusSquare className="size-5" />
                      Add Goal
                    </button>
                  </div>
                  {showAddGoal && (
                    <div className=" fixed w-full left-[40%]">
                      <AddGoal onClose={() => setShowAddGoal(false)} />
                    </div>
                  )}

                  {/* GOAL CARDS */}
                  <div
                    className={`grid gap-4 transition-all duration-300 grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}
                  >
                    {goals.map((goal, index) => (
                      <div
                        key={index}
                        className="bg-[#073B3A] p-4 rounded-xl shadow-md hover:shadow-lg border border-gray-600 flex flex-col gap-3 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <p>Goal:</p>
                            <h3 className="text-lg font-semibold">
                              {goal.title}
                            </h3>
                          </div>
                          <FaTimes
                            onClick={() => handleDeleteGoal(index)}
                            className="cursor-pointer hover:text-red-400"
                          />
                        </div>

                        <p className="text-sm text-gray-300">
                          {goal.description}
                        </p>
                        <div className="flex items-center gap-3 text-sm">
                          <p>Deadline:</p>
                          <span>{goal.deadline}</span>
                        </div>

                        <div className="flex gap-3 items-center mt-2">
                          <input
                            className="size-4 accent-cyan-400 cursor-pointer"
                            type="checkbox"
                            checked={completed.includes(index)}
                            onChange={() => handleToggleComplete(index)}
                          />
                          <label>Completed</label>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* GOALS STATS */}
                  <div className="  border border-cyan-400 bg-[#041F1E] w-1/2 px-5 py-3 rounded-2xl text-center">
                    <p>
                      Total Active Goals: {goals.length} | Completed:{" "}
                      {completed.length} | Progress: {progressPercent}%
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CARD 2: PROGRESS OVERVIEW */}
          <div className="border border-gray-700 rounded-2xl p-6 shadow-2xl shadow-gray-800 flex flex-col justify-between ">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Overall Progress</p>
              <FaChartLine className="text-cyan-400" />
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-4xl font-bold text-cyan-400">
                {progressPercent}%
              </div>
              <p className="text-gray-400 text-sm mt-2">Goals Completed</p>
            </div>
          </div>

          {/* CARD 3: STREAK TRACKER */}
          <div className="border border-gray-700 rounded-2xl p-6 shadow-2xl shadow-gray-800 flex flex-col justify-between ">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Daily Streak</p>
              <FaFire className="text-orange-400" />
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-4xl font-bold text-orange-400">
                {streak}🔥
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Days of consistent progress
              </p>
            </div>
          </div>

          {/* CARD 4: MOTIVATIONAL QUOTE */}
          <div className="col-span-3 border border-gray-700 rounded-2xl p-8 shadow-2xl shadow-gray-800  flex flex-col justify-center items-center">
            <FaClock className="text-cyan-400 mb-3" />
            <p className="text-xl italic text-center text-gray-300 max-w-2xl">
              “{quote}”
            </p>
          </div>

          {/* CARD 5: PLACEHOLDER FOR FUTURE WIDGET (e.g. leaderboard, collab) */}
          <div className="border border-gray-700 rounded-2xl p-6 shadow-2xl shadow-gray-800  flex items-center justify-center text-gray-400">
            Coming Soon: Collaboration Stats 🚀
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
