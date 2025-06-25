import SideBar from "../components/SideBar";

import { usePageContext } from "../context/PageContext";

import TopBar from "../components/TopBar";
import { FaPlusSquare } from "react-icons/fa";

const CollabRooms = () => {
  const { visibility } = usePageContext();
  return (
    <div className="flex h-screen">
      <div className={`${visibility ? "flex" : "hidden"} lg:flex `}>
        <SideBar />
      </div>
      <div className="flex flex-col lg:ml-65 w-full">
        <div>
          <TopBar />
        </div>
        <div className="flex h-3/4 border-gray-800 border-1  flex-col items-center justify-center text-center p-25 rounded-2xl shadow-md m-5">
          <h2 className="text-2xl font-semibold mb-2">
            No Collaboration Yet 🤝
          </h2>
          <p className="text-gray-400 italic max-w-md">
            “Alone we can do so little; together we can do so much.”
          </p>
          <p className="text-sm text-cyan-400 mt-2">— Helen Keller</p>

          <button className="mt-6 px-5 py-2 flex flex-col items-center ">
            <div
              style={{ backgroundColor: "#085b2d" }}
              className="px-8 py-3 rounded-2xl shadow shadow-[#00FFFF]"
            >
              Start with your First collaboration
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollabRooms;
