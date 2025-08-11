import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical line (desktop only) */}
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-1 bg-white h-full z-0" />

        {/* Experience Items */}
        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={exp.id}
              className="relative flex flex-col sm:flex-row items-start mb-20"
            >
              {/* Left column */}
              <div className={`${isLeft ? 'sm:w-1/2 sm:pr-10' : 'sm:w-1/2 hidden sm:block'}`}>
                {isLeft && <Card experience={exp} />}
              </div>

              {/* Timeline Dot */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-20">
                <span className="bg-white border-4 border-[#8245ec] w-14 h-14 rounded-full flex justify-center items-center">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover rounded-full"
                  />
                </span>
              </div>

              {/* Right column */}
              <div className={`${!isLeft ? 'sm:w-1/2 sm:pl-10' : 'sm:w-1/2 hidden sm:block'}`}>
                {!isLeft && <Card experience={exp} />}
              </div>

              {/* Mobile fallback */}
              <div className="sm:hidden mt-16">
                <Card experience={exp} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ──────────────────────────────── Card component ────────────────────────────────

const Card = ({ experience }) => (
  <div className="w-full p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 z-10">
    <div className="flex items-center space-x-6">
      {/* Logo */}
      <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
        <img
          src={experience.img}
          alt={experience.company}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Role + Company + Date */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            {experience.role}
          </h3>
          <h4 className="text-sm text-gray-300">{experience.company}</h4>
        </div>
        <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
      </div>
    </div>

    <p className="mt-4 text-gray-400">{experience.desc}</p>

    {/* Skills list */}
    <div className="mt-4">
      <h5 className="font-medium text-white">Skills:</h5>
      <ul className="flex flex-wrap mt-2">
        {experience.skills.map((skill, index) => (
          <li
            key={index}
            className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Experience;
