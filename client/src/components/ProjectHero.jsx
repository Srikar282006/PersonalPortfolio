import React, { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "./ThemeContext";

const ProjectHero = ({ onTagSelect }) => {
  const { dark } = useTheme();
  const [selectedTag, setSelectedTag] = useState("All");

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

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

  const techTags = [
    "All", "Axios", "Bcrypt", "CSS", "DaisyUI", "Express", "Firebase", "Flask", "HTML",
    "JWT", "JavaScript", "MongoDB", "Multer", "MySQL", "Machine Learning", "NLP",
    "Node.js", "Node Mailer", "PostgreSQL", "Python", "REST API", "React", "Redux",
    "Streamlit","Socket.io", "TailwindCSS", "UI/UX"
  ];

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    if (onTagSelect) onTagSelect(tag); // ✅ only call if provided
  };

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

      <section
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative transition-all duration-500"
      >
        <h1
          className={`text-4xl md:text-5xl font-extrabold text-center mb-3 ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          My Projects
        </h1>

        <p
          className={`text-center mb-10 text-lg ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          A showcase of my work across various technologies
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl">
          {techTags.map((tag, index) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={index}
                onClick={() => handleTagClick(tag)}
                className={`px-4 py-2 text-sm md:text-base rounded-md border transition-all duration-300 ${
                  dark
                    ? isSelected
                      ? "bg-white text-black border-gray-400"
                      : "bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
                    : isSelected
                    ? "bg-black text-white border-gray-700"
                    : "bg-gray-200 border-gray-300 hover:bg-gray-300 text-gray-800"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectHero;
