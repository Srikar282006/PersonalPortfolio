import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "./ThemeContext";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const starOptions = {
  background: { color: "#000000" },
  particles: {
    number: { value: 120, density: { enable: true, area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.8 },
    size: { value: { min: 1, max: 3 } },
    move: { enable: true, speed: 0.6, outModes: "out" },
  },
};

const Experience = () => {
  const { dark } = useTheme();
  const [active, setActive] = useState("All");

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const categories = ["All", "Work", "Leadership"];

  const experiencedata = [
    {
      title: "Full Web Developer",
      Date: "January 2025 - March 2025",
      Venue: "Telangana, India",
      description:
        "Designed and implemented a web portal for faculty-student collaboration in UROP and Capstone projects.",
      details: [
        "Developed a full-stack web portal using React.js, Node.js, and MongoDB for 3000+ UROP/Capstone students",
        "Enabled task tracking, document sharing, and access control to streamline collaboration",
        "Optimized and enhanced UI/UX, reducing page load time by 60% and improving responsiveness across devices",
        "Achieved 75% grading accuracy improvement and 50% evaluation efficiency boost through workflow automation",
      ],
      category: "Work",
    },
    {
      title: "Full Web Developer",
      Date: "May 2025 - July 2025",
      Venue: "Telangana, India",
      description:
        "Designed and implemented a web portal for faculty-student collaboration in UROP and Capstone projects.",
      details: [
        "Developed a full-stack web portal using React.js, Node.js, and MongoDB for 3000+ UROP/Capstone students",
        "Enabled task tracking, document sharing, and access control to streamline collaboration",
        "Optimized and enhanced UI/UX, reducing page load time by 60% and improving responsiveness across devices",
        "Achieved 75% grading accuracy improvement and 50% evaluation efficiency boost through workflow automation",
      ],
      category: "Work",
    },
    {
      title: "Team Leader",
      Date: "August 2024 - December 2024",
      Venue: "Hyderabad, India",
      description: "Led a group of developers to build open-source AI projects.",
      details: [
        "Supervised 5-member development team",
        "Organized code reviews and sprint planning",
        "Improved team productivity by 40%",
      ],
      category: "Leadership",
    },
  ];

  const filteredData = experiencedata.filter(
    (exp) => active === "All" || exp.category === active
  );

  return (
    <>
      {dark && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={starOptions}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
      )}

      <div
        className={`min-h-screen mt-5 ${
          dark ? " text-white" : "bg-white text-black"
        } overflow-y-hidden`}
      >
        <h1 className="text-center text-5xl font-semibold">Experience</h1>
        <p className="text-gray-400 text-center m-3 text-md">
          My professional journey in development and leadership qualities
        </p>

        {/* Category Toggle Buttons */}
        <div
          className={`flex gap-1 justify-center mt-6 p-1 rounded-lg max-w-md mx-auto ${
            dark ? "bg-gray-800" : "bg-gray-200"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 flex-1 min-w-0 ${
                active === category
                  ? dark
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-blue-600 shadow-md"
                  : dark
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Timeline Section */}
        <ul
          className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10 px-5 md:px-20`}
        >
          {filteredData.map((exp, index) => (
            <li key={index}>
              {index !== 0 && <hr />}
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div
                className={`${
                  index % 2 === 0
                    ? "timeline-start mb-10 md:text-end"
                    : "timeline-end md:mb-10"
                }`}
              >
                <time className="font-mono italic">{exp.Date}</time>
                <div className="text-lg font-black mt-1">{exp.title}</div>
                <p className="text-sm text-gray-400 mt-0.5">CBIT - Telangana</p>
                <p className="text-gray-400 mt-3">
                  <CiLocationOn className="inline mb-1" /> {exp.Venue}
                </p>

                {/* Description */}
                <p className="mt-4 mb-2">{exp.description}</p>

                {/* Divider */}
                <div className="h-px w-full bg-gray-300 my-4"></div>

                {/* Key Achievements */}
                <h1
                  className={`font-bold ${
                    dark ? "text-white" : "text-black"
                  } mb-2`}
                >
                  Key Achievements:
                </h1>
                <ul className="mt-2 list-none ml-2">
                  {exp.details.map((d, i) => (
                    <li
                      key={i}
                      className={`text-sm ${
                        dark ? "text-gray-300" : "text-gray-600"
                      } text-justify m-1`}
                    >
                      <FaArrowRight className="inline mr-1" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Experience;
