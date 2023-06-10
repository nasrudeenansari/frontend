import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import HomeIcon from "../../assets/images/home.svg";
import LayerIcon from "../../assets/images/layer.svg";
import LightMode from "../../assets/images/light.svg";
import DarkMode from "../../assets/images/dark.svg";
import { ThemeContext } from "../theme";
const Sidebar = () => {
  const [activeTab, setactiveTab] = useState("tab2");
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_menu">
          <div className="main_menu_top">
            <ul>
              <li
                onClick={() => setactiveTab("tab1")}
                className={`${activeTab == "tab1" && "active"}`}
              >
                <img src={HomeIcon} />
              </li>
              <li
                onClick={() => setactiveTab("tab2")}
                className={`${activeTab == "tab2" && "active"}`}
              >
                <img src={LayerIcon} />
              </li>
            </ul>
          </div>
          <div className="mani_menu_bottom">
            <ul>
              <li
                className={theme == "light" ? "active" : ""}
                onClick={() => toggleTheme("light")}
              >
                <img src={LightMode} />
              </li>
              <li
                className={theme == "dark-mode" ? "active" : ""}
                onClick={() => toggleTheme("dark-mode")}
              >
                <img src={DarkMode} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
