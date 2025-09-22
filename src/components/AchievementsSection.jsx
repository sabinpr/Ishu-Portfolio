import React from "react";
import AchievementCard from "./AchievementCard";

// Example Icons (You can use react-icons or SVGs)
const AwardIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const BookIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);
const AcademicIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  </svg>
);

const AchievementsSection = () => {
  const achievementsData = [
    {
      type: "Current Role",
      title: "Medical Officer",
      issuer: "Australian Health Practitioner Regulation Agency (AHPRA)",
      date: "Present",
      description:
        "Currently practicing as a Medical Officer in Australia, providing comprehensive patient care and managing various medical conditions.",
      icon: <AcademicIcon />,
    },
    {
      type: "Experience",
      title: "Medical Officer",
      issuer: "National Health Service (NHS), United Kingdom",
      date: "2023-2024",
      description:
        "Provided medical care in the UK healthcare system, handling diverse patient cases and emergency situations.",
      icon: <AwardIcon />,
    },
    {
      type: "Clinical Experience",
      title: "Medical Officer",
      issuer: "Leading Hospitals in Nepal",
      date: "2018-2023",
      description:
        "Served for 5 years providing primary care, managing medical cases, and working with healthcare teams in various clinical settings.",
      icon: <AwardIcon />,
    },
    {
      type: "Education",
      title: "MBBS Degree",
      issuer: "Medical University", // Add actual university name
      date: "2018",
      description:
        "Completed Bachelor of Medicine and Bachelor of Surgery (MBBS), laying the foundation for medical practice.",
      icon: <BookIcon />,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400">
            A testament to international medical excellence across Nepal, UK,
            and Australia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              issuer={achievement.issuer}
              date={achievement.date}
              description={achievement.description}
              icon={achievement.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
