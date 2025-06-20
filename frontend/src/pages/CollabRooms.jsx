import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const CollabRooms = () => {
  return (
    <div>
      {/* NavBar for smaller screen */}
      <div className="lg:hidden">
        <NavBar />
      </div>
      {/* sidebar for larger screen*/}
      <SideBar />
    </div>
  );
};

export default CollabRooms;
