import React from "react";
import PagesTop from "./components/PagesTop";
import Navbar from "./components/Navbar";

export default function BuildingPage() {
  return (
    <div className="flex justify-between">
      <Navbar />
      <PagesTop title="Building" />
    </div>
  );
}
