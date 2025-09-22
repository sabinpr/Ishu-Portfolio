import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import AchievementsSection from "./components/AchievementsSection";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SEO from "./components/SEO";

function App() {
  // Read initial dark mode preference from localStorage or system preference
  const getInitialDarkMode = () => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) return stored === "true";
    // Fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  // Sync dark mode with <html> and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 text-slate-900 dark:text-slate-200">
      <SEO
        title="Ishu Shrestha | Doctor"
        description="Portfolio of Ishu Shrestha — showcasing professional experience and services as a doctor."
        url="https://www.ishushrestha.com.np/"
        image="https://www.ishushrestha.com.np/logo_title.png"
      />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Bio />
      <Experience />
      <AchievementsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
