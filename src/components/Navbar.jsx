import React from "react";
import dummyLogo from "./images/dummy logo.png";
import dashboard from "./images/dashboard.png";
import sensor from "./images/sensor.png";
import building from "./images/building.png";
import settings from "./images/setting.png";
import logout from "./images/logout.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-col p-7 h-[100vh] fixed items-center justify-between w-[20%] bg-gradient-to-b from-[#039099] to-[#C51FFFE0]">
      <div className="flex items-center">
        <img src={dummyLogo} />
        <h2 className="text-[24px] text-white leading-6 font-semibold">
          Rest Room Management
        </h2>
      </div>
      <div className="flex flex-col justify-between h-[80%]">
        <div className="flex flex-col justify-between">
          <Link
            to="/"
            className="flex text-[#A449EB] text-[20px] font-semibold items-center gap-3 bg-[#F5F2FF] mb-2 rounded-xl py-2 px-10"
          >
            <img src={dashboard} />
            Dashboard
          </Link>
          <Link
            to="/building"
            className="flex hover:bg-[#F5F2FF] hover:text-[#A449EB] hover:text-[20px] hover:font-semibold items-center gap-3 mb-2 rounded-xl py-2 px-10"
          >
            <img src={building} />
            Buildings
          </Link>
          <Link
            to="/sensor"
            className="flex hover:bg-[#F5F2FF] hover:text-[#A449EB] hover:text-[20px] hover:font-semibold items-center gap-3 mb-2 rounded-xl py-2 px-10"
          >
            <img src={sensor} />
            Sensors
          </Link>
          <Link
            to="/setting"
            className="flex hover:bg-[#F5F2FF] hover:text-[#A449EB] hover:text-[20px] hover:font-semibold items-center gap-3 mb-2 rounded-xl py-2 px-10"
          >
            <img src={settings} />
            Settings
          </Link>
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
    </div>
  );
}
