import React from 'react';
import { education } from '../../constants';   // your data array

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* ─────────────── section header ─────────────── */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* ─────────────── timeline container ─────────────── */}
      <div className="relative">
        {/* centre vertical line */}
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-1 bg-white h-full z-0" />

        {education.map((edu, idx) => {
          const isLeft = idx % 2 === 0; // even items on the left
          return (
            <div
              key={edu.id}
              className="relative mb-20 flex flex-col sm:flex-row items-start"
            >
              {/* LEFT COLUMN (card or empty) */}
              <div
                className={`${isLeft ? 'sm:w-1/2 sm:pr-10' : 'sm:w-1/2 hidden sm:block'}`}
              >
                {isLeft && (
                  <Card edu={edu} />
                )}
              </div>

              {/* timeline dot */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-20">
                <span className="bg-white border-4 border-[#8245ec] w-14 h-14 rounded-full flex justify-center items-center">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full rounded-full object-cover"
                  />
                </span>
              </div>

              {/* RIGHT COLUMN (card or empty) */}
              <div
                className={`${!isLeft ? 'sm:w-1/2 sm:pl-10' : 'sm:w-1/2 hidden sm:block'}`}
              >
                {!isLeft && (
                  <Card edu={edu} />
                )}
              </div>

              {/* MOBILE‑ONLY stacked card */}
              <div className="sm:hidden mt-16">
                <Card edu={edu} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ───────────────── reusable card component ───────────────── */
const Card = ({ edu }) => (
  <div className="w-full p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 z-10">
    <div className="flex items-center space-x-6">
      {/* logo */}
      <div className="w-20 h-14 bg-white rounded-md overflow-hidden flex-shrink-0">
        <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
      </div>

      {/* text */}
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
        <h4 className="text-sm text-gray-300">{edu.school}</h4>
        <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
      </div>
    </div>

    <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
    <p className="mt-2 text-gray-400">{edu.desc}</p>
  </div>
);

export default Education;
