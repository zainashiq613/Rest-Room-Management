import React from "react";
import backgroundImage from "./bg.png";
import nottification from "./Notifications.png";
import profilePic from "./profile-pic.png";
import shape from "./Shape.png";

export default function DashboardTop() {
  return (
    <div
      className="flex w-[80vw] h-65 py-12 px-10 col-span-[80vw] justify-between items-start bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-white text-2xl font-bold self-end">Dashboard</h1>
      <div className="flex items-center gap-4">
        <img src={nottification} />
        <img src={profilePic} />
        <div className="flex items-center gap-2">
          <div>
            <h3>MKS</h3>
            <p>Admin</p>
          </div>
          <img src={shape} />
        </div>
      </div>
    </div>
  );
}
