import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="flex justify-between">
      <Navbar />
      <Dashboard />
    </div>
  );
}
