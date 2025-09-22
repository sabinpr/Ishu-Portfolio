import React from "react";

const ExperienceCard = ({
  title,
  location,
  duration,
  description,
  country,
}) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-6 border-l-4 border-indigo-600 dark:border-indigo-400">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-200 mb-1">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300">{location}</p>
      </div>
      <span className="text-sm font-medium bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-100 px-3 py-1 rounded-full shadow-sm">
        {duration}
      </span>
    </div>
    <p className="text-slate-700 dark:text-slate-300 mb-3">{description}</p>
    <span className="inline-block bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-600 dark:text-slate-200">
      {country}
    </span>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Medical Officer",
      location: "Australian Health System (AHPRA Registered)",
      duration: "Present",
      description:
        "Currently serving as a Medical Officer in the Australian healthcare system, providing comprehensive patient care and emergency medical services.",
      country: "Australia",
    },
    {
      title: "Medical Officer",
      location: "National Health Service (NHS)",
      duration: "2023-2024",
      description:
        "Worked in the UK healthcare system, gaining valuable experience in diverse medical cases and emergency care while adapting to international healthcare standards.",
      country: "United Kingdom",
    },
    {
      title: "Medical Officer",
      location: "Leading Hospitals",
      duration: "2018-2023",
      description:
        "Served for 5 years in various leading hospitals, managing complex medical cases and contributing to healthcare delivery in both urban and rural settings.",
      country: "Nepal",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-200 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-300">
            Medical practice across three diverse healthcare systems
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
