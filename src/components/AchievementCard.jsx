import React from "react";

const AchievementCard = ({ title, issuer, date, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-indigo-700">
      <div className="flex items-start mb-4">
        <div className="mr-4 mt-1 text-indigo-700">
          {icon}
          {/* You can pass an SVG icon as a prop, e.g., icon={<AwardIcon />} */}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm font-medium text-teal-600">{issuer}</p>
          <p className="text-sm text-slate-400">{date}</p>
        </div>
      </div>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default AchievementCard;
