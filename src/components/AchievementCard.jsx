import React from "react";

const AchievementCard = ({ title, issuer, date, description, icon }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-700">
      <div className="flex items-start mb-4">
        <div className="mr-4 mt-1 text-indigo-700">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200">
            {title}
          </h3>
          <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
            {issuer}
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-300">{date}</p>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
};

export default AchievementCard;
