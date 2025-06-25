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
        {}
      </div>
    </div>
  );
};

export default CollabRooms;
