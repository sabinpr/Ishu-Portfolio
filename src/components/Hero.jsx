import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 md:pt-32 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-200 leading-tight mb-4">
            I'm Dr. Ishu Shrestha
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
            Medical Officer
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
            I am a dedicated medical professional with international experience
            across Nepal, the UK, and Australia. I focus on providing
            comprehensive patient care while striving for excellence in every
            aspect of clinical practice.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("achievements")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            View My Achievements
          </button>
        </div>

        {/* Image / Graphic */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center transition-colors duration-300">
            <svg
              className="w-32 h-32 text-indigo-300 dark:text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
