import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import AchievementsSection from "./components/AchievementsSection";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
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
