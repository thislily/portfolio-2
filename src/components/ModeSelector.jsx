// src/components/ModeSelector.jsx
import React from "react";

function ModeSelector({ currentMode, setCurrentMode }) {
  return (
    <div className="mode-selector">
      <button 
        className={`mode-icon ${currentMode === "light-mode" ? "active-mode" : ""}`}
        onClick={() => setCurrentMode("light-mode")}
        aria-label="Light Mode"
      >
        <img src="images/sun.svg" alt="Light Mode" />
      </button>
      
      <button 
        className={`mode-icon ${currentMode === "dark-mode" ? "active-mode" : ""}`}
        onClick={() => setCurrentMode("dark-mode")}
        aria-label="Dark Mode"
      >
        <img src="images/moon.svg" alt="Dark Mode" />
      </button>
      
      <button 
        className={`mode-icon ${currentMode === "party-mode" ? "active-mode" : ""}`}
        onClick={() => setCurrentMode("party-mode")}
        aria-label="Party Mode"
      >
        <img src="images/party.svg" alt="Party Mode" />
      </button>
    </div>
  );
}

export default ModeSelector;