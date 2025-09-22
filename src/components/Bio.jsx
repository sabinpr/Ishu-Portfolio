import React from "react";

const Bio = () => {
  return (
    <section
      id="biography"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-200 mb-4">
            Biography
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-300">
            A brief overview of my international medical journey
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md transition-colors duration-300">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            I am a dedicated medical professional with experience across three
            different healthcare systems. After completing my MBBS degree, I
            began my medical career in Nepal, where I served as a Medical
            Officer for five years in leading hospitals, gaining valuable
            experience in patient care and emergency medicine.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            My commitment to medical excellence led me to the United Kingdom,
            where I worked with the National Health Service (NHS), expanding my
            clinical expertise and adapting to international healthcare
            standards. During my time in the UK, I handled diverse patient cases
            and contributed to emergency care services.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            Currently, I am practicing in Australia under AHPRA registration,
            focusing on comprehensive patient care, treatment, and health
            promotion. My international experience has given me a unique
            perspective on healthcare delivery across different cultural
            contexts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
