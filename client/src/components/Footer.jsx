import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useTheme } from "./ThemeContext"; // optional if you have a theme context
import resume from "../assets/MERN_Stack_resume.pdf"

const Footer = () => {
 
  const { dark } = useTheme(); // assumes you have dark mode context
  const bgClass = dark ? "bg-black text-gray-200" : "bg-gray-100 text-gray-800";

  const iconBgClass = dark
    ? "bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white"
    : "bg-white text-gray-600 hover:bg-gray-200 hover:text-gray-800";

  return (
    <>
    <footer className={`${bgClass} py-10 transition-colors duration-300 mt-10`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* About Section */}
        <div className="flex-1">
          <h2 className="font-bold text-lg">Srikar Acharya</h2>
          <p className="mt-2 text-sm md:text-base">
            Full Stack Developer & Machine Learning Enthusiast, 
            specialized in creating modern web applications and AI applications.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm md:text-base">
            <li><a href="/about" className="hover:text-blue-500">About Me</a></li>
            <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="/experience" className="hover:text-blue-500">Experience</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
            <li>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                Resume 
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex gap-4 mt-1">
            {[ 
              { href: "https://github.com/Srikar282006", icon: <FaGithub size={20} /> },
              { href: "https://www.linkedin.com/in/srikar-acharya-madabhushani-29ba87344/", icon: <FaLinkedin size={20} /> },
              { href: "mailto:srikarmach@gmail.com", icon: <FaEnvelope size={20} /> },
              { href: "tel:+91897837024", icon: <FaPhoneAlt size={20} /> }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconBgClass} w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all duration-300`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
    <footer class={`${bgClass} footer sm:footer-horizontal footer-center p-4`}>
  <aside>
    <div className={`flex justify-center ${dark?"text-gray-200":"text-gray-800"}`}>
      <p> © Srikar Acharya.All right reserved.</p>
      <p>Built with  Reactjs & TailwindCss</p>
    </div>
    
  </aside>
</footer>
    </>
  );
};

export default Footer;
