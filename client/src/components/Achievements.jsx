import React from 'react'
import { SlBadge } from "react-icons/sl";
import { useTheme } from './ThemeContext'
import { FaCode } from "react-icons/fa";
import { SiHackclub } from "react-icons/si";
import { FaMedal } from "react-icons/fa6";
import { GiRank3 } from  "react-icons/gi";

const Achievements = () => {
  const { dark } = useTheme()
  const data = [
    { icon: SlBadge, content: "Won Internal Python Competition with 500 INR", color: "bg-green-100 text-green-600" },
    { icon: SiHackclub, content: "Selected Internal Smart India Hackathon", color: "bg-pink-100 text-pink-600" },
    { icon: FaCode, content: "Technical Member of IEEE Student Chapters", color: "bg-blue-100 text-blue-600" },
    { icon: FaMedal, content: "Achieved Silver Badge Certificate in Cloud Computing in NPTEL Exam", color: "bg-yellow-100 text-yellow-600" },
    { icon: GiRank3, content: "Got 4755 rank in EAMCET out of 1.5 lakhs+", color: "bg-purple-100 text-purple-600" }
  ];

  const learned = ["Technical Leadership", "Development", "Hackathon Experience", "Real World Problem Solving"]

  return (
    <div className={`mt-5 py-10 px-4 ${dark ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="text-center text-4xl sm:text-5xl">
        <h1 className={`font-bold ${dark ? "text-white" : "text-gray-900"}`}>Achievements</h1>
      </div>
      <p className="text-center text-gray-400 mt-3 text-lg sm:text-xl">Milestones from my technical journey</p>

      {/* Responsive Grid - Fixed Hover */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {data.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className={`
                rounded-2xl p-6 flex flex-col items-center text-center 
                transition-all duration-300 transform 
                hover:scale-105 hover:shadow-xl
                ${dark 
                  ? "bg-gray-800 border border-gray-700 hover:border-gray-500" 
                  : "bg-white shadow-lg hover:border-gray-300"
                }
              `}
            >
              
              {/* Icon inside circle */}
              <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${item.color}`}>
                <Icon className="text-3xl" />
              </div>
              
              {/* Text */}
              <p className={`text-base sm:text-lg ${dark ? "text-gray-300" : "text-gray-700"}`}>
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    
      {/* Learned Skills - Added Hover Effects */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {learned.map((element, i) => (
          <div 
            key={i} 
            className={`
              rounded-xl px-3 py-2 text-sm text-center shadow-md
              transition-all duration-300 transform hover:scale-105
              ${!dark 
                ? "bg-gray-300 text-black hover:bg-gray-400 hover:shadow-lg" 
                : "bg-slate-600 text-white hover:bg-slate-500 hover:shadow-lg"
              }
            `}
          >
            {element}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements