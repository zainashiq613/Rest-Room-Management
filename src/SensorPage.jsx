import React from "react";
import PagesTop from "./components/PagesTop";
import Navbar from "./components/Navbar";

export default function SensorPage() {
  return (
    <div className="flex justify-between">
      <Navbar />
      <div className="w-[100%] relative">
        <PagesTop title="Sensor" />
      </div>
    </div>
  );
}
