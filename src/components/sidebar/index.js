import React from "react";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_menu">
          <div className="main_menu_top"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
