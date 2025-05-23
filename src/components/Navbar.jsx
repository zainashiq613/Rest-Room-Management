import React from "react";
import dummyLogo from "./images/dummy logo.png";
import dashboard from "./images/dashboard.png";
import sensor from "./images/sensor.png";
import building from "./images/building.png";
import settings from "./images/setting.png";
import dashboardhover from "./images/dashboard-hover.png";
import sensorhover from "./images/sensor-hover.png";
import settingshover from "./images/settings-hover.png";
import buildinghover from "./images/building-hover.png";
import logout from "./images/logout.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex  lg:flex-col p-3 h-[100vh] justify-between items-center basis-[100%] lg:basis-[22%] bg-gradient-to-b from-[#039099] to-[#C51FFFE0]">
      <div className="flex items-center">
        <img src={dummyLogo} />
        <h2 className="text-[22px] xl:text-[24px] text-white leading-6 font-semibold">
          Rest Room Management
        </h2>
      </div>
      <div
        id="sidebar"
        className="hidden lg:flex flex-col relative top-30 lg:top-0 justify-between lg:h-[60%]"
      >
        <div className="flex flex-col justify-between">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 mb-2 rounded-xl py-2 px-10 font-semibold text-[20px] ${
                isActive ? "bg-[#F5F2FF] text-[#A449EB]" : "text-white"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex items-center gap-2">
                <img src={isActive ? dashboardhover : dashboard} />
                Dashboard
              </div>
            )}
          </NavLink>
          <NavLink
            to="/building"
            className={({ isActive }) =>
              `flex items-center gap-3 mb-2 rounded-xl py-2 px-10 font-semibold text-[20px] ${
                isActive ? "bg-[#F5F2FF] text-[#A449EB]" : "text-white"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex items-center gap-2">
                <img src={isActive ? buildinghover : building} />
                Buildings
              </div>
            )}
          </NavLink>

          <NavLink
            to="/sensor"
            className={({ isActive }) =>
              `flex items-center gap-3 mb-2 rounded-xl py-2 px-10 font-semibold text-[20px] ${
                isActive ? "bg-[#F5F2FF] text-[#A449EB]" : "text-white"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex items-center gap-2">
                <img src={isActive ? sensorhover : sensor} />
                Sensors
              </div>
            )}
          </NavLink>
          <NavLink
            to="/setting"
            className={({ isActive }) =>
              `flex items-center gap-3 mb-2 rounded-xl py-2 px-10 font-semibold text-[20px] ${
                isActive ? "bg-[#F5F2FF] text-[#A449EB]" : "text-white"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex items-center gap-2">
                <img src={isActive ? settingshover : settings} />
                Setting
              </div>
            )}
          </NavLink>
        </div>
        <div className="bg-[#FAD85D] rounded-xl">
          <a
            href="#"
            className="flex items-center text-[19px] font-semibold gap-3 w-full p-4"
          >
            <img src={logout} />
            Logout
          </a>
        </div>
      </div>
      <div onClick={toggle} id="toggle-btn" className="lg:hidden">
        <i className="fa-solid fa-bars text-2xl text-white"></i>
      </div>
    </div>
  );
}

function toggle() {
  document.getElementById("sidebar").classList.toggle("hidden");
}
