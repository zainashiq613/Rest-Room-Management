import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <Navbar />
      <Dashboard />
    </div>
  );
}
