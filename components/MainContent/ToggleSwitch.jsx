'use client';

import "@/public/css/toggleSwitch.css";
import { FiList, FiGrid } from "react-icons/fi";
import { useViewMode } from "@/context/ViewModeContext";

const ToggleSwitch = () => {
  const { viewMode, setViewMode } = useViewMode();

  return (
    <div className="toggle-switch">
      <button
        className={`toggle-btn frist-btn ${viewMode === "list" ? "active" : ""}`}
        onClick={() => setViewMode("list")}
      >
        <span className="icon-container">
          <FiList />
        </span>
      </button>
      <button
        className={`toggle-btn ${viewMode === "grid" ? "active" : ""}`}
        onClick={() => setViewMode("grid")}
      >
        <span className="icon-container">
          <FiGrid />
        </span>
      </button>
    </div>
  );
};

export default ToggleSwitch;
