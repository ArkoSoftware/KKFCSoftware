import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Main = () => {
  const [sidebarOn, setSidebarOn] = useState(false);

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* main content */}
          <Navbar sidebarOn={sidebarOn} setSidebarOn={setSidebarOn} />
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay" onClick={() => setSidebarOn(!sidebarOn)}></label>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Main;
