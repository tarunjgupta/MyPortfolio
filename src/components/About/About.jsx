import React from 'react';
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-[7vw] md:px-[10vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col items-center justify-center text-center">
        {/* Greeting */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
          Hi, I am
        </h1>

        {/* Name */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Tarunj Gupta
        </h2>

        {/* Skills Heading with Typing Effect */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
          <span className="text-white">I am a </span>
          <Typewriter
            options={{
              strings: [
                'Fullstack Developer',
                'Graduate Engineer Trainee',
                'Backend Engineer',
                'DSA Enthusiast',
              ],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
              pauseFor: 2000,
            }}
            onInit={(typewriter) => {
              const cursor = document.querySelector('.Typewriter__cursor');
              if (cursor) cursor.style.color = '#8245ec';
            }}
          />
        </h3>

        {/* About Me Paragraph */}
        <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed max-w-3xl">
          Graduate Engineer Trainee at LAVA International Ltd. and Full Stack Developer experienced in PHP, Java, MERN stack, PostgreSQL, and RESTful APIs. Passionate about software architecture, code quality, and active DSA problem solver with 500+ problems solved and open-source contributions.
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1cuLnGaCgMR23Z6gJDOYf_BnmNUP2zUQb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
          style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
        >
          DOWNLOAD CV
        </a>
      </div>
    </section>
  );
};

export default About;
