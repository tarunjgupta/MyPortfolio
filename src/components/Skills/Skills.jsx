// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
      {SkillsInfo.map((category, index) => {
        const isLastOdd = index === SkillsInfo.length - 1 && SkillsInfo.length % 2 !== 0;

        return (
          <div
            key={category.title}
            className={`bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 rounded-2xl border border-white 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
              isLastOdd ? "md:col-span-2 md:max-w-3xl md:mx-auto w-full" : "w-full"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.03}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div
                className={`grid gap-3 w-full ${
                  isLastOdd
                    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
                    : "grid-cols-2 sm:grid-cols-3"
                }`}
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-gray-800/40 hover:bg-gray-800/80 border-2 border-gray-700/80 hover:border-purple-500/50 rounded-2xl py-2.5 px-3 text-center transition-all duration-200"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                    />
                    <span className="text-xs sm:text-sm font-medium text-gray-200 truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        );
      })}
    </div>
  </section>
);

export default Skills;
