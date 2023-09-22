import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarMobile from "../components/SidebarMobile";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className=" h-screen w-screen flex flex-row ">
      <Sidebar show={showSidebar} setter={setShowSidebar} />
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div>
          <SidebarMobile setter={setShowSidebar} />
          <Header />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
