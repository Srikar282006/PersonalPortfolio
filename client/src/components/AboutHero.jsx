import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
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

const AboutHero = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  const data=[{"terminology":"Languages","value":"JavaScript,Python,Sql,HTML,CSS"},
    {"terminology":"Frameworks/Libraries","value":"Reactjs,Node.js,Expressjs,Tailwind Css,Flask"},
    {"terminology":"ML","value":"Numpy,Pandas,Feature Engineering,Data Visulaisation,Supervised Learning,UnSupervised Learning"},
{"terminology":"Concepts","value":"DSA,Operation System,Computer Networks,Full Stack Development,Docker,CI/CD,DBMS,MongoDB"}    
  ]

  const { dark } = useTheme();
  const textcolor=dark?"text-white":"text-base"


  return (
    <>
    <section
      className={`relative flex flex-col items-center justify-center text-center min-h-screen ${
        dark ? " text-white" : " text-black"
      }`}
    >
      {/* Show particles only in dark mode */}
      {dark && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={starOptions}
          className="absolute inset-0 -z-10"
        />
      )}

      {/* Hero Content */}
      <div className="z-10 px-4">
        <h1 className={`text-5xl font-bold mb-4 `}>About Me</h1>
        <p className="text-gray-500 text-xl">Get to know more about my background and skills</p>
        <div className="mt-5 py-2 flex flex-col sm:flex-col md:flex-row lg:flex-row">
           <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
           <h1 className="text-center font-semibold text-2xl">Who is this ?</h1>
           <div className="flex flex-col">
           <span className="text-gray-500 text-justify m-2">I'm Srikar Acharya,
             a Full Stack Developer with a passion and dedication for creating innovative web applications and exploring AI technology.
              I'm currently pursuing a
         Bachleor's in  Electronics and Communication Engineering
             at CBIT College, where I continue to expand my knowledge and skills.</span>
             <span className=" text-gray-500 text-justify m-1">With
                 expertise in Node.js, React, and various technologies, I enjoy building scalable and 
                 user-friendly applications that solve real-world problems. 
                 My background in computer science has given me a strong foundation in full stack Development which I apply to create efficient and maintainable code.
             </span>
             <span className=" text-gray-500 text-justify m-2">I'm particularly interested in the intersection of web development and ML technology, 
                where I've developed several projects that leverage the power of 
                AI systems to create secure and transparent applications.</span>
             </div>
             <h1 className="text-2xl text-center mt-3">Education</h1>
             <div className="mt-2">
                  <div className={`border ${dark?"border-white bg-gray-950":"border-black"} py-6 px-3 rounded-lg`}>
                    <h1 className="font-bold">Bachelor of Electronics and Communication </h1>
                    <p className="mt-1 text-gray-500 font-bold">CBIT</p>
                    <div className="mt-4 flex justify-between">
                        <div>
                             <p className="text-gray-500 text-justify ml-2">July 2023 - July 2027</p>
                            <p className={` ml-2 mt-2 font-semibold ${dark?"text-white":"text-black"} border border-gray-400 rounded-md`}>CGPA : 8.8/10.00</p>
                        </div>
                       
                        <p className="text-gray-500 mr-2">Gandipet, Hyderabad.</p>
                        
                    </div>
                  </div>
             </div>
           </div>
            <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
<h1 className={`text-3xl font-semibold mb-6 text-center ${dark ? "text-white" : "text-black"}`}>Skills</h1>
  
  <div className="flex flex-col gap-6">
    {data.map((e, index) => (
      <div
        key={index}
        className={`p-4 rounded-xl shadow-md transition-transform transform hover:scale-[1.02] ${
          dark ? " text-white" : " text-black"
        }`}
      >
        <h2 className="text-xl font-semibold mb-3 text-center underline underline-offset-4">
          {e.terminology}
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {e.value.split(",").map((el, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${
                dark
                  ? "bg-gray-600 hover:bg-gray-600 text-gray-200"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-800"
              } transition-colors duration-200`}
            >
              {el.trim()}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
  <div className="mt-8">
    <h1 className={`text-2xl font-semibold mb-4 text-center ${dark ? "text-white " : "text-black"}`}>
    Achievements
  </h1>
   <div className={`mt-8 py-2 border ${dark?"bg-gray-950 border-gray-500":"border-gray-600"} rounded-lg`}>
  
  <ul className={`list-disc list-inside text-justify ${dark?"text-white":"text-gray-700"}   mx-auto w-fit`}>
    <li className="m-2">Winner – Internal Python Competition
Won the internal college-level Python competition and received a cash prize of ₹500 for outstanding coding performance.</li>
    <li className="m-2">Selected – Internal Smart India Hackathon
Shortlisted for the Internal Round of Smart India Hackathon, contributing innovative solutions and team-based project development.</li>
    <li className="m-2">Technical Member – IEEE Student Chapters
Serving as a Technical Member in IEEE Student Chapters, actively participating in workshops, hackathons, and tech initiatives.</li>
<li className="m-2">IEEE Student Member
Officially registered as an IEEE Student Member, engaging in global technical communities and innovation-driven programs.</li>
<li className="m-2">EAMCET Achievement
Secured an impressive 4755 rank out of 1.5 lakh+ candidates in the EAMCET entrance examination.</li>
  </ul>
</div>
</div>


            </div>
           
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutHero;
