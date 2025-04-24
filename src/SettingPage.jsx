import React from "react";
import PagesTop from "./components/PagesTop";
import Navbar from "./components/Navbar";

export default function SettingPage() {
  return (
    <div className="flex justify-between">
      <Navbar />
      <div className="w-[100%] relative">
        <PagesTop title="Setting" />
      </div>
    </div>
  );
}
