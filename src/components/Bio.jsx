import React from "react";

const Bio = () => {
  return (
    <section id="bio" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Biography</h2>
          <p className="text-xl text-slate-500">
            A brief overview of Dr. Ishu Shrestha's international medical
            journey
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Dr. Ishu Shrestha is a dedicated medical professional with extensive
            experience across three different healthcare systems. After
            completing her MBBS degree, she began her medical career in Nepal,
            where she served as a Medical Officer for five years in leading
            hospitals, gaining valuable experience in patient care and emergency
            medicine.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Her commitment to medical excellence led her to the United Kingdom,
            where she worked with the National Health Service (NHS), expanding
            her clinical expertise and adapting to international healthcare
            standards. During her time in the UK, she handled diverse patient
            cases and contributed to emergency care services.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            Currently practicing in Australia under AHPRA registration, Dr.
            Shrestha continues to demonstrate her dedication to patient care,
            focusing on comprehensive medical assessment, treatment, and health
            promotion. Her international experience has given her a unique
            perspective on healthcare delivery across different cultural
            contexts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
