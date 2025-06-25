import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import asests from "../assets/assests";
import { usePageContext } from "../context/PageContext";
import { FaBars } from "react-icons/fa";
import TopBar from "../components/TopBar";
const Goals = () => {
  const { visibility, setVisibility, goals } = usePageContext();

  return (
    <div className="flex h-screen">
      <div className={`${visibility ? "flex" : "hidden"} lg:flex `}>
        <SideBar />
      </div>
      <div className="flex flex-col  w-full">
        <div>
          <TopBar />
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[18rem] ${
            visibility ? "ml-64" : ""
          }lg:ml-64 `}
        >
          {/* grid 1 - spans 2 cols and 1 row */}
          <div className="col-span-3 row-span-2 flex   mx-4 p-8 flex-col">
            <div className="text-2xl text-gray-400 pb-3 pl-3 font-medium">
              Goal History
            </div>
            <div className="w-full flex flex-col grow transition-all duration-500 gap-5 h-full  border-1 border-gray-700 rounded-2xl shadow-2xl shadow-gray-800 ">
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto ">
                  <thead className="bg-gray-800 text-gray-300 ">
                    <tr>
                      <th className=" border-0 border-r-2 border-gray-900  px-4 py-2 rounded-tl-2xl text-left">
                        Deadline
                      </th>
                      <th className=" px-4 py-2 text-left border-r-2 border-gray-900">
                        Goal
                      </th>
                      <th className="border-gray-900   px-4 py-2 text-left">
                        Description
                      </th>
                      <th className="border-0 border-gray-900 rounded-tr-2xl  px-4 py-2 text-left">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-900 dark:text-gray-100">
                    {goals.length === 0 ? (
                      <tr>
                        <td
                          colSpan="3"
                          className="text-center py-6 text-gray-500 text-xl"
                        >
                          🚫 No goals added yet
                        </td>
                      </tr>
                    ) : (
                      goals.map((user) => (
                        <tr
                          key={user.id}
                          className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                        >
                          <td className="border px-4 py-2">{user.deadline}</td>
                          <td className="border px-4 py-2">{user.title}</td>
                          <td className="border px-4 py-2">
                            {user.description}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* grid 2 - normal 1x1 card */}
          <div className=" border-1 border-gray-700 rounded-2xl mx-4 p-8 shadow-2xl shadow-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
