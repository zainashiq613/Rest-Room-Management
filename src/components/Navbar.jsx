import React from "react";
import dummyLogo from "./images/dummy logo.png";
import dashboard from "./images/dashboard.png";
import sensor from "./images/sensor.png";
import building from "./images/building.png";
import settings from "./images/setting.png";
import logout from "./images/logout.png";

export default function Navbar() {
  return (
    <div className="flex flex-col p-7 items-center basis-[20%] bg-gradient-to-b from-[#039099] to-[#C51FFFE0] justify-between">
      <div className="flex items-center">
        <img src={dummyLogo} />
        <h2 className="text-[24px] text-white">Rest Room Management</h2>
      </div>
      <div className="flex flex-col justify-content-between">
        <a
          href="#"
          className="flex items-center gap-3 bg-[#F5F2FF] mb-2 rounded-xl py-3 px-10"
        >
          <img src={dashboard} />
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-3 mb-2 rounded-xl py-4 px-8"
        >
          <img src={building} />
          Buildings
        </a>
        <a
          href="#"
          className="flex items-center gap-3 mb-2 rounded-xl py-4 px-8"
        >
          <img src={sensor} />
          Sensors
        </a>
        <a
          href="#"
          className="flex items-center gap-3 mb-2 rounded-xl py-4 px-8"
        >
          <img src={settings} />
          Settings
        </a>
      </div>
      <div className="bg-[#FAD85D] rounded-xl">
        <a href="#" className="flex items-center gap-3 w-full p-4">
          <img src={logout} />
          Logout
        </a>
      </div>
    </div>
  );
}
