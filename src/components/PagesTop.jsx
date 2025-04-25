import React from "react";
import backgroundImage from "./images/bg.png";
import nottification from "./images/Notifications.png";
import profilePic from "./images/profile-pic.png";
import shape from "./images/Shape.png";

export default function DashboardTop({ title }) {
  return (
    <div
      className="flex w-[100%] h-[20vh] lg:h-[27vh] py-3 px-2 justify-between items-center lg:items-start sm:py-4 sm:px-6 lg:relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-white text-2xl font-bold self-end">{title}</h1>
      <div className="flex items-center gap-2">
        <img src={nottification} />
        <img src={profilePic} />
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-white text-[14px]">MKS</h3>
            <img src={shape} />
          </div>
          <p className="text-[#FFFFFF99]">Admin</p>
        </div>
      </div>
    </div>
  );
}
