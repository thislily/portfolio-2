// src/App.jsx
import { useState, useEffect } from "react";
import "devicon/devicon.min.css";
import "./index.css";

// Import components
import ModeSelector from "./components/ModeSelector";
import Splash from "./components/Splash";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [currentMode, setCurrentMode] = useState("light-mode");
  const [profilePicSrc, setProfilePicSrc] = useState("images/glasses.jpg");

  // This effect applies the theme class to the body
  useEffect(() => {
    const allModeClasses = ["light-mode", "dark-mode", "party-mode"];

    // Remove all mode classes from the body
    document.body.classList.remove(...allModeClasses);

    // Add the selected mode as a class to the body
    document.body.classList.add(currentMode);

    // Update profile pic based on mode
    if (currentMode === "party-mode") {
      setProfilePicSrc("images/heart-glasses.jpg");
    } else {
      setProfilePicSrc("images/glasses.jpg");
    }
  }, [currentMode]);

  return (
    <>
      <ModeSelector currentMode={currentMode} setCurrentMode={setCurrentMode} />
      <Splash profilePicSrc={profilePicSrc} />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;