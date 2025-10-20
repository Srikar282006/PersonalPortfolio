import React, { useCallback, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import react from '../assets/react.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { RiDownloadLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { useTheme } from './ThemeContext'; // adjust the path
import resume from "../assets/MERN_Stack_resume.pdf"
// === Star Particles Config ===
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

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // loads tsparticles slim
  }, []);

const handleDownload = () => {
  const link = document.createElement("a");
  link.href =resume // file in /public
  link.setAttribute("download", "Srikar_resume.pdf"); // forces download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const arr = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Machine Learning Practitioner",
    "AI Enthusiast",
  ];

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { dark } = useTheme(); // use context

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % arr.length); // change text
        setIsVisible(true); // fade in
      }, 600); // match fade duration
    }, 3000);

    return () => clearInterval(interval);
  }, [arr.length]);

  return (
    <div
  className={`relative w-full min-h-screen pt-16 flex items-center overflow-hidden ${
    !dark ? "text-black" : "text-white"  // changed condition: if not dark then black, else white
  }`}
>
  {/* Particles Background */}
  {dark && (  // if dark, show particles
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={starOptions}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  )}

  {/* Hero Content */}
  <div className="z-10 flex flex-col md:flex-row items-center justify-between w-full px-6">
    {/* Left Content */}
    <div className="w-full md:w-2/3 text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Hi, I’m Srikar Acharya
      </h1>

      <p
        className={`text-xl sm:text-2xl md:text-3xl mb-4 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {arr[index]}
      </p>

      <p className="text-lg sm:text-xl md:text-2xl max-w-xl mx-auto md:mx-0">
        A passionate developer with expertise in React, Tailwind CSS and Node.js
        technologies. Currently pursuing a Btech in Electronics and Communication at CBIT.
      </p>
       <div className="mt-3">
       <button className={`btn    px-4 hover:px-5 ${!dark ? " bg-black border-black text-white" : "bg-white text-black border-white"}`}>View My Work <FaArrowRight className="ml-2 " />
</button>
       <button className={`btn px-3 ml-4 transition-all duration-300 ${!dark ? " bg-white border-shadow text-black hover:bg-slate-100 " : "bg-black text-white border-shadow hover:"}`} onClick={handleDownload}><RiDownloadLine className="w-[16px] h-[26px] mt-1"/>Resume</button>
      </div>
<div className="mt-5 flex justify-center md:justify-start gap-4">
  {/* GitHub */}
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition">
    <FaGithub className="text-lg text-black dark:text-white" />
  </div>

  {/* LinkedIn */}
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition">
    <TiSocialLinkedin className="text-lg text-black dark:text-white" />
  </div>

  {/* Mail */}
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition">
    <CiMail className="text-lg text-black dark:text-white" />
  </div>

  {/* Phone */}
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition">
    <IoCallOutline className="text-lg text-black dark:text-white" />
  </div>
</div>



    </div>
   

  <div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
  <div className="bg-gray-300 dark:bg-gray-700 
                  w-1/2 sm:w-2/3 md:w-3/4 lg:w-full 
                  aspect-square rounded-full 
                  flex items-center justify-center mr-2">
    <img src={react} alt="cb" className="w-auto h-full object-cover "/>
  </div>
</div>

  </div>
</div>

  );
};

export default Hero;