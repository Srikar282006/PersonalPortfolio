import React, { useState } from 'react'
import { useTheme } from './ThemeContext';

// Programming Languages
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiMysql } from 'react-icons/si';

// Frameworks & Libraries
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiDjango, SiFlask, SiTailwindcss } from 'react-icons/si';

// ML/Data Science
import { SiTensorflow, SiPytorch, SiPandas, SiOpencv } from 'react-icons/si';
import { SiScikitlearn } from 'react-icons/si';

import { FaCode, FaCalculator, FaObjectGroup, FaSitemap, FaPlug, FaServer, FaBrain, FaLayerGroup } from 'react-icons/fa';

const Skills = () => {
    const { dark } = useTheme();
    const [activeCategory, setActiveCategory] = useState('Languages');

    const skillsData = {
        'Languages': [
            { name: 'Python', icon: <FaPython className="text-blue-500" />, color: 'hover:bg-blue-50 dark:hover:bg-blue-900/30' },
            { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, color: 'hover:bg-yellow-50 dark:hover:bg-yellow-900/30' },
            { name: 'SQL', icon: <SiMysql className="text-teal-500" />, color: 'hover:bg-teal-50 dark:hover:bg-teal-900/30' },
            { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, color: 'hover:bg-orange-50 dark:hover:bg-orange-900/30' },
            { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" />, color: 'hover:bg-blue-50 dark:hover:bg-blue-900/30' }
        ],
        'Frameworks': [
            { name: 'React', icon: <FaReact className="text-cyan-500" />, color: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/30' },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, color: 'hover:bg-green-50 dark:hover:bg-green-900/30' },
            { name: 'Express', icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, color: 'hover:bg-gray-100 dark:hover:bg-gray-800' },
            { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" />, color: 'hover:bg-teal-50 dark:hover:bg-teal-900/30' },
            { name: 'Flask', icon: <SiFlask className="text-gray-400" />, color: 'hover:bg-gray-100 dark:hover:bg-gray-800' }
        ],
        'ML/Data': [
            { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" />, color: 'hover:bg-orange-50 dark:hover:bg-orange-900/30' },
            { name: 'Pandas', icon: <SiPandas className="text-purple-500" />, color: 'hover:bg-purple-50 dark:hover:bg-purple-900/30' },
            { name: 'NumPy', icon: <FaPython className="text-blue-400" />, color: 'hover:bg-blue-50 dark:hover:bg-blue-900/30' },
            { name: 'Scikit-learn', icon: <SiScikitlearn className="text-yellow-600" />, color: 'hover:bg-yellow-50 dark:hover:bg-yellow-900/30' },
            { name: 'NLP', icon: <FaPython className="text-indigo-500" />, color: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/30' }
        ],
        
        'Concepts': [
            { name: 'MERN Stack', icon: <FaLayerGroup className="text-green-500" />, color: 'hover:bg-green-50 dark:hover:bg-green-900/30' },
                       { name: 'Machine Learning', icon: <FaBrain className="text-purple-500" />, color: 'hover:bg-purple-50 dark:hover:bg-purple-900/30' },
                       { name: 'Data Structures', icon: <FaCode className="text-blue-500" />, color: 'hover:bg-blue-50 dark:hover:bg-blue-900/30' },
                       { name: 'Algorithms', icon: <FaCalculator className="text-red-500" />, color: 'hover:bg-red-50 dark:hover:bg-red-900/30' },
                       { name: 'OOPs', icon: <FaObjectGroup className="text-teal-500" />, color: 'hover:bg-teal-50 dark:hover:bg-teal-900/30' }
        ]
    };

    const categories = Object.keys(skillsData);

    const categoryGradients = {
        'Languages': 'from-blue-500 to-purple-600',
        'Frameworks': 'from-green-500 to-teal-600',
        'ML/Data': 'from-purple-500 to-pink-600',
        'Concepts': 'from-indigo-500 to-blue-600'
    };

    return (
        <div className='mt-3 py-11 flex flex-col items-center'>
            <h1 className={`text-3xl font-bold ${dark ? "text-white" : "text-black"}`}>Technical Skills</h1>
            <p className='text-gray-400 mt-2'>My expertise across various technologies and tools</p>
            
            {/* Category Tabs */}
            <div className='mt-8 w-5/6 max-w-6xl'>
                <div className={`flex flex-wrap justify-center gap-2 mb-8 p-2 rounded-lg ${dark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-md transition-all duration-300 font-semibold ${
                                activeCategory === category 
                                    ? `bg-gradient-to-r ${categoryGradients[category]} text-white shadow-lg transform scale-105`
                                    : dark 
                                        ? 'text-gray-300 hover:bg-gray-700 bg-gray-600' 
                                        : 'text-gray-700 hover:bg-gray-200 bg-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid - Icons Only */}
                <div className={`rounded-xl p-8 ${dark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <h3 className={`text-xl font-semibold mb-8 text-center ${dark ? 'text-white' : 'text-black'}`}>
                        {activeCategory}
                    </h3>
                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6'>
                        {skillsData[activeCategory].map((skill, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 cursor-pointer group ${dark ? 'bg-gray-700' : 'bg-white'} ${skill.color} border ${dark ? 'border-gray-600' : 'border-gray-200'}`}
                                title={skill.name}
                            >
                                <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <span className={`text-xs font-medium text-center ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

              
            </div>
        </div>
    )
}

export default Skills