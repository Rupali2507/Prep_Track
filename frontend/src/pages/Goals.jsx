import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { usePageContext } from "../context/PageContext";

const Goals = () => {
  const { visibility, goals } = usePageContext();

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      {/* Sidebar */}
      <div className={`${visibility ? "flex" : "hidden"} lg:flex`}>
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Top Navigation */}
        <TopBar />

        {/* Grid Layout */}
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[18rem] transition-all duration-500 ${
            visibility ? "ml-64" : ""
          } lg:ml-64`}
        >
          {/* Main Card - Goal History */}
          <div className="col-span-3 row-span-2 ml-4 p-8 flex flex-col">
            <div className="text-2xl text-gray-300 pb-3 pl-3 font-medium">
              🎯 Goal History
            </div>

            <div className="w-full flex flex-col grow transition-all duration-500 gap-5 h-full border border-gray-700 rounded-2xl shadow-2xl shadow-gray-800 bg-gray-900/40 backdrop-blur-sm">
              <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-800 text-gray-300">
                    <tr>
                      <th className="px-4 py-2 text-left border-r border-gray-900 rounded-tl-2xl">
                        Deadline
                      </th>
                      <th className="px-4 py-2 text-left border-r border-gray-900">
                        Goal
                      </th>
                      <th className="px-4 py-2 text-left border-r border-gray-900">
                        Description
                      </th>
                      <th className="px-4 py-2 text-left rounded-tr-2xl">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-200">
                    {goals.length === 0 ? (
                      <tr>
                        <td
                          colSpan="4"
                          className="text-center py-6 text-gray-500 text-xl"
                        >
                          🚫 No goals added yet
                        </td>
                      </tr>
                    ) : (
                      goals.map((goal) => (
                        <tr
                          key={goal.id}
                          className="hover:bg-gray-800/60 transition"
                        >
                          <td className="border border-gray-800 px-4 py-2">
                            {goal.deadline}
                          </td>
                          <td className="border border-gray-800 px-4 py-2">
                            {goal.title}
                          </td>
                          <td className="border border-gray-800 px-4 py-2">
                            {goal.description}
                          </td>
                          <td className="border border-gray-800 px-4 py-2 text-green-400">
                            {goal.status || "Pending"}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="  border   mt-20 mr-10 rounded-2xl border-gray-600 shadow-2xl shadow-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
