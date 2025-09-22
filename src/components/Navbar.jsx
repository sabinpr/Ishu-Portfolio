import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-semibold text-slate-900">
              Dr. Ishu Shrestha, MBBS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-700 hover:text-indigo-700 px-3 py-2 text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("bio")}
                className="text-slate-700 hover:text-indigo-700 px-3 py-2 text-sm font-medium"
              >
                Biography
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-slate-700 hover:text-indigo-700 px-3 py-2 text-sm font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="text-slate-700 hover:text-indigo-700 px-3 py-2 text-sm font-medium"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-700 hover:text-indigo-700 px-3 py-2 text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-indigo-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                "Home",
                "Biography",
                "Experience",
                "Achievements",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-indigo-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
