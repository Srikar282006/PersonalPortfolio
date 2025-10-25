import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../components/ThemeContext";

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

const DetailProjects = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const { state } = useLocation();
  const { id } = useParams();
  const { dark } = useTheme();
  const nav = useNavigate();

  const project = state?.project;

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl">Project not found 😢</p>
        <button
          onClick={() => nav("/projects")}
          className="mt-3 bg-black text-white px-4 py-2 rounded-md"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <>
      <div
        className={`min-h-screen transition-all duration-300 ${
          dark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {dark && (
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={starOptions}
            className="absolute inset-0 -z-10"
          />
        )}

        {/* Hero Section */}
        <div
          className={`relative w-full flex flex-col justify-end px-6 py-8 ${
            dark ? "bg-[#18191E]" : ""
          }`}
        >
          <button
            onClick={() => nav(-1)}
            className={`flex items-center gap-2 mb-4 font-medium ${
              dark
                ? "text-white hover:text-gray-300"
                : "text-black hover:text-gray-600"
            }`}
          >
            <FaArrowLeft /> Back
          </button>

          {/* Project Image */}
          <div className="w-full flex justify-center mb-6">
            <img
  src={project.image}
  alt={project.title}
  className="w-full max-w-5xl h-[350px] md:h-[400px] object-contain rounded-2xl shadow-lg border border-gray-600/30 bg-black"
/>

          </div>

          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          <p className="text-lg md:text-xl text-gray-400 mt-2">
            {project.description}
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p
              className={`text-lg mb-8 ${
                dark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {project.overview}
            </p>

            <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
            <ul
              className={`list-disc list-inside space-y-2 ${
                dark ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {project.details.split(",,").map((line, i) => (
                <li key={i}>{line.trim()}</li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div
            className={`p-6 rounded-xl shadow-md ${
              dark ? "bg-[#18191E]" : "bg-gray-100"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Project Details
            </h2>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.Skills.split(",").map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      dark
                        ? "bg-slate-700 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Links</h3>
              <div className="flex flex-col gap-3">
                <a
                  href={project.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  <FaGithub /> GitHub Repository
                </a>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProjects;
