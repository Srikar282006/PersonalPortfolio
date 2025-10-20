import React, { useEffect, useState, useCallback } from "react";
import {useNavigate} from "react-router-dom"
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";

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

const Projects = ({ selectedTag = "All" }) => {
  const { dark } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const nav=useNavigate()

   const handleViewMore = () => {
    nav("/projects");
    window.scrollTo(0, 0); // ✅ Scroll to top after navigating
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const project_details = [
    {
      title: "MyMeet",
      description: "A Live video Streaming website",
      Skills: "Node.js,React,Express,Socket.io,WebRTC,TailwindCSS",
      details:
        "Built for 150+ artists to mint and sell NFTs with Solidity and IPFS, Enabled 300+ transactions and 30% faster monetization via Polygon",
      gitlink: "https://github.com/Srikar282006/Video-Sharing",
    },
    {
      title: "AI Chatbot",
      description: "Conversational chatbot using NLP",
      Skills: "Python,Flask,Machine Learning,NLP",
      details:
        "Deployed chatbot trained on intents with Flask API, integrated with UI for real-time responses",
      gitlink: "https://github.com/Srikar282006/AI-Chatbot",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built using React",
      Skills: "React,TailwindCSS,UI/UX",
      details:
        "Fully responsive single-page portfolio site with dark mode and smooth animations",
      gitlink: "https://github.com/Srikar282006/Portfolio",
    },
  ];

  useEffect(() => {
    if (window.location.pathname === "/projects") {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  }, []);


  const filteredProjects =
    selectedTag === "All"
      ? project_details
      : project_details.filter((p) =>
          p.Skills.toLowerCase().includes(selectedTag.toLowerCase())
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

      <div className="mt-3">
        <h1
          className={`text-center text-3xl sm:text-3xl md:text-5xl lg:text-5xl ${
            !dark ? "text-black" : "text-white"
          }`}
        >
          Featured Projects
        </h1>
        <p className="text-center text-2xl sm:text-lg md:text-2xl lg:text-2xl text-gray-500 mt-2">
          Check out some of my latest work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 px-2 py-4 mt-4">
          {filteredProjects.map((elem, index) => (
            (showAll || index < 3) && (
              <div
  key={index}
  className={`flex flex-col justify-between border rounded-xl shadow-md p-4 m-2 h-full min-h-[420px] ${
    !dark
      ? "bg-white hover:border-black border-gray-300"
      : "bg-[#18191E] border-black hover:border-white"
  }`}
>

                <div className="h-[50px] w-auto bg-gray-500 flex items-center justify-center text-white font-bold rounded-md">
                  {index + 1}
                </div>
                <h1
                  className={`text-center text-xl font-semibold mt-2 ${
                    !dark ? "text-black" : "text-white"
                  }`}
                >
                  {elem.title}
                </h1>
                <p className="text-center text-gray-500">{elem.description}</p>

                <div className="mt-3">
                  <div className="flex justify-center flex-row flex-wrap gap-2">
                    {elem.Skills.split(",").map((skill, i) => (
                      <div
                        key={i}
                        className={`rounded-xl px-2 py-1 text-sm ${
                          !dark
                            ? "bg-gray-300 text-black"
                            : "text-white bg-slate-600"
                        }`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>

                  <div className="text-gray-500 flex flex-col gap-2 mt-6 ml-5">
                    {elem.details.split(",").map((e, i) => (
                      <p key={i} className="flex flex-row">
                        <FaArrowRight size={12} className="mt-1.5 mr-1 text-gray-500" />
                        {e}
                      </p>
                    ))}
                  </div>

                  <div className="flex justify-between mt-7 py-5 px-2">
                    <button
                      className={`btn px-4 hover:px-5 transition rounded-lg ${
                        !dark
                          ? "bg-black border-black text-white"
                          : "bg-white text-black border"
                      }`}
                    >
                      View Details <FaArrowRight className="ml-2" />
                    </button>
                    <a
                      href={elem.gitlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center p-3 rounded-full transition ${
                        !dark
                          ? "text-black hover:bg-gray-100"
                          : "text-white hover:bg-black"
                      }`}
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center hover:px-2">
            <button className="btn w-auto text-center bg-white border rounded-md hover:bg-gray-200" onClick={handleViewMore}>
              View more <FaArrowRight className="ml-2 mt-1" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
