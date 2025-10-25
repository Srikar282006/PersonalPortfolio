import React, { useEffect, useState, useCallback } from "react";
import {useNavigate} from "react-router-dom"
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";
import recommender from '../assets/recommender.png'
import recipe from '../assets/recipe.png'
import usermanager from '../assets/usermanager.png'
import videocall from '../assets/videocall.png'
import car_management from '../assets/car_management.png'
import chatapp from '../assets/chatapp.png'

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
      image:recommender,
      title: "Movie Recommender",
      overview: "A smart movie recommendation system that suggests personalized movies to users based on their preferences, viewing history, and ratings, enhancing discovery and user engagement.",
      description: "The Movie Recommendation System is a machine learning–based project designed to suggest movies to users based on their watched movies.It leverages content-based filtering",
      Skills: "SVC,NLP,Streamlit,TMDB,Pandas,Numpy,Python,Feature Engineering,Machine Learning",
      details:
        "Personalized movie recommendations based on similarity analysis,,ML algorithms like SVC Vectorization and Cosine Similarity,,Clean visualization of data and similarity metrics,,Search functionality for user-selected movies,,Interactive UI for exploring and comparing recommendations,, Used TMDB api for recommended movies with movie thumbnail",
      gitlink: "https://github.com/Srikar282006/movie_recommendation_system",
    },
    {
      image:videocall,
      title: "Apna Video Call",
      overview: "A high-performance video call application that enables real-time one-on-one and group video communication, with seamless connectivity and interactive features for professional and personal use.",
      description: "The platform supports seamless video and audio streaming, chat functionality, dynamic user management and peer-peer communication, all built with a responsive and intuitive interface.",
      Skills: "MERN,WebRTC,Node.js,React,JWT,Axios,Socket.io,Express,Bcrypt,MongoDB,JavaScript,UI/UX,RESt API",
      details:
        "Supports seamless video and audio streaming between users with low latency,,Integrated messaging system for text communication during calls,,Secure login/signup with JWT authentication and role-based access,,Uses WebRTC and Socket.io for efficient peer-to-peer connections,,Intuitive and mobile-friendly interface for smooth user experience across devices.",
      gitlink: "https://github.com/Srikar282006/My-Video-Call/tree/master",
    },
    {
      image:recipe,
      title: "Recipe Sharing Website",
      overview: "A recipe sharing platform that allows users to browse, upload, and share recipes easily, with the added feature of sending recipes directly via Gmail for convenient sharing with friends and family.",
      description: "A responsive web application that allows users to explore and share their favorite recipes. Users can add, edit, and delete their own recipes, while anyone can view recipes without logging in.",
      Skills: "MERN,React,TailwindCSS,UI/UX,Nodejs,MongoDB,RestApi,Axios,Node Mailer,Express,DaisyUi,JWT,Bcrypt",
      details:
        "Recipe management-add, edit, and delete recipes with images and detailed steps,,Anyone can view recipes without logging in,,We can share any recipe directly via email using nodemailer Api,,User can  authenticated which has secure login and signup functionality and encrypted passwords,,Responsive design for fully mobile-compatible and optimized for all screen sizes,,Simple and intuitive interface for a smooth user experience",
      gitlink: "https://github.com/Srikar282006/Recipe_Sharing_website.git",
    },
    {
      image:chatapp,
      title: "My Chat",
      overview: "A real-time chat application that enables seamless messaging between users, supporting individual and group conversations with an interactive interface.",
      description: "The app provides instant messaging, message history, and user-friendly features to enhance communication, making it ideal for personal and professional use.",
      Skills: "MERN,React,TailwindCSS,UI/UX,Node.js,RestApi,Axios,Node Mailer,Express,DaisyUi,Socket.io,Multer,Bcrypt,MongoDb,JWT",
      details:"Users can send and receive messages instantly using WebSocket an api called Socket.io,,Admins can view, add and users can manage their profiles,,Supports both one-on-one and group conversations with easy navigation,,Keeps track of chat history and notifies users of new messages,,Modern, responsive design ensuring smooth experience on all devices.",
      gitlink: "https://github.com/Srikar282006/My-chat",
    },
    {
      image:car_management,
      title: "Car Rentals",
      overview: "A comprehensive car rental application that allows users to browse, book, and manage vehicle rentals efficiently, with an intuitive interface for both customers and admins.",
      description: "The platform streamlines car booking with real-time availability, secure payments, and user-friendly management tools, enhancing convenience for both users and operators.",
      Skills: "MERN,React,TailwindCSS,UI/UX,Nodejs,HTML,CSS,RestApi,Axios,Node Mailer,Express,DaisyUi",
      details:"Users can search, filter, and book cars based on type, availability, and location,,Admins can add, edit, and remove cars, manage bookings, and monitor fleet status,,Users can track past and upcoming bookings and receive timely notifications,,Fully responsive interface ensuring smooth experience on desktops, tablets, and mobiles.",
      gitlink: "https://github.com/Srikar282006/TravelsandTour",
    },
    {
      image:usermanager,
      title: "User Manager",
      overview: "Hi",
      description: "The Application is a comprehensive admin dashboard that allows administrators to efficiently manage users. It provides functionalities to add,edit and delete users, with data presented in both table and card layouts for better clarity and organization",
      Skills: "MERN,React, Node.js, Express, MongoDB, JWT, Axios, TailwindCSS, HTML,CSS,Responsive Design, UI/UX, REST API,TailwindCss,DaisyUI,Axios,Bcrypt,Multer",
      details:
        "Admins can add, edit, and delete users efficiently through a clean and organized interface,, Users are displayed in both table and card layouts, offering flexibility and clarity for different viewing preferences,,Implements role-based access control ensuring that only authorized admins can perform user management tasks,,Responsive and intuitive design with real-time updates, search, and filtering options for easy navigation,,Built with a robust backend (Node.js/Express and MongoDB) for smooth data handling and easy future enhancements.",
      gitlink: "https://github.com/Srikar282006/UserSystemManagement/tree/master",
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
  className={`flex flex-col justify-between border rounded-2xl shadow-lg p-5 m-2 transition-all duration-300 hover:shadow-2xl ${
    dark
      ? "bg-[#0b0c10] border-gray-700 hover:border-gray-400"
      : "bg-white border-gray-300 hover:border-black"
  }`} 
>

  <div className="relative overflow-hidden rounded-lg group">
  <img
    src={elem.image}
    alt={elem.title}
    className="w-full h-56 object-contain transition-transform duration-500 group-hover:scale-110"
  />
</div>


  {/* Content Section */}
  <div className="flex flex-col flex-grow justify-between text-center px-1">
    <div>
      <h2
        className={`text-2xl font-semibold mb-2 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {elem.title}
      </h2>
      <p
        className={`text-base mb-4 ${
          dark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {elem.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {elem.Skills.split(",").slice(0, 4).map((skill, i) => (
          <span
            key={i}
            className={`px-3 py-1 text-sm rounded-lg font-medium ${
              dark ? "bg-slate-700 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {skill.trim()}
          </span>
        ))}
        {elem.Skills.split(",").length > 4 && (
          <span
            className={`px-3 py-1 text-sm rounded-lg font-medium ${
              dark ? "bg-slate-700 text-white" : "bg-gray-300 text-black"
            }`}
          >
            +{elem.Skills.split(",").length - 4}
          </span>
        )}
      </div>

      {/* Details */}
      <div
        className={`flex flex-col gap-2 text-left px-4 ${
          dark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {elem.details.split(",,").map((point, i) => (
         showAll && i<2 && (
          <p key={i} className="flex items-start">
            <FaArrowRight
              size={13}
              className="mt-1 mr-2 flex-shrink-0 text-gray-500"
            />
            {point.trim()}
          </p>)
        ))}
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={() => nav(`/projects/${index}`, { state: { project: elem } })}
        className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition ${
          dark
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-black text-white hover:bg-gray-900"
        }`}
      >
        View Details <FaArrowRight />
      </button>

      <a
        href={elem.gitlink}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center p-3 rounded-full transition ${
          dark
            ? "text-white hover:bg-black"
            : "text-black hover:bg-gray-100"
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
