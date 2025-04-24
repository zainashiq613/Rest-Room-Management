import React from "react";
import PagesTop from "./components/PagesTop";
import Navbar from "./components/Navbar";

export default function SettingPage() {
  return (
    <div className="flex justify-between">
      <Navbar />
      <PagesTop title="Setting" />
    </div>
  );
}
