import React from "react";
import "./App.css";
import DashboardPage from "./DashboardPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuildingPage from "./BuildingPage";
import SensorPage from "./SensorPage";
import SettingPage from "./SettingPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/building" element={<BuildingPage />} />
        <Route path="/sensor" element={<SensorPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </Router>
  );
}
