import React, { useCallback, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { IoIosSend } from "react-icons/io";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

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

const ContactForm = () => {
  const particlesInit = useCallback(async (engine) => {
      await loadSlim(engine); // loads tsparticles slim
    }, []);

    // State to manage form input data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        message: '',
    });
    const [alert, setAlert] = useState(null);
   const {dark}=useTheme()
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const data = [
  {
    platform: "GitHub",
    link: "https://github.com/Srikar282006",
    icon: <VscGithubAlt />,
    value: "Srikar282006",
  },
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/msrikaracharya/",
    icon: <SlSocialLinkedin />,
    value: "M.Srikar Acharya",
  },
  {
    platform: "Email",
    link: "mailto:srikarmach@gmail.com",
    icon: <MdOutlineMail />,
    value: "srikarmach@gmail.com",
  },
  {
    platform: "Phone",
    link: "tel:+918978370824",
    icon: <MdOutlineLocalPhone />,
    value: "+91 89783 70824",
  },
];


    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await fetch('http://localhost:5000/send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setAlert({ type: 'success', message: 'Submitted Successfully!' });
                setSubmissionStatus('success');
                // Reset form data and status after a successful submission after 5 seconds
                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    });
                    setSubmissionStatus(null);
                }, 5000); // 5 seconds
            } else {
                const errorData = await response.json();
                setAlert({ type: 'error', message: errorData.message || 'Something went wrong' });
            }
        } catch (err) {
            console.error('Error Sending message:', err);
            setAlert({ type: 'error', message: 'An error occurred. Please try again.' });
        }
    };

    // Conditional rendering: Show success message after successful submission
    if (submissionStatus === 'success') {
  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden ${dark ? "bg-black" : "bg-white"}`}>
      
      {/* Optional Particles for dark mode */}
      {dark && (
        <Particles
          id="tsparticles-success"
          init={particlesInit}
          options={starOptions}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
      )}

      <div className="flex flex-col items-center text-center space-y-6 p-8 animate-fadeIn z-10">
        <div className="bg-green-100/10 rounded-full p-4 border border-green-400 animate-pulse">
          <IoIosSend className={`text-5xl ${dark ? "text-green-400" : "text-green-600"}`} />
        </div>

        <h1 className={`text-3xl font-bold ${dark ? "text-gray-100" : "text-gray-800"}`}>
          Message Sent Successfully!
        </h1>

        <p className={`max-w-md text-lg ${dark ? "text-gray-400" : "text-gray-600"}`}>
          Thanks for reaching out — your message has been delivered to <span className="font-semibold">Srikar</span>.  
          I’ll review it and get back to you soon 🚀
        </p>

        <Link
          to="/"
          className={`mt-4 px-6 py-3 rounded-full text-lg font-semibold flex items-center gap-2 shadow-md transition-all duration-300 
            ${dark
              ? "bg-gradient-to-r from-gray-100 to-white text-black hover:scale-105 hover:shadow-white/40"
              : "bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white hover:scale-105 hover:shadow-gray-400/40"}
          `}
        >
          <span>Back to Home</span>
          <IoIosSend className="text-xl rotate-[-45deg]" />
        </Link>
      </div>
    </div>
  );
}


    // Main render: Contact Form with two-column layout
    return (
        <>
        {/* Particles Background */}
          {dark && (  // if dark, show particles
            <Particles
              id="tsparticles"
              init={particlesInit}
              options={starOptions}
              className="absolute top-0 left-0 w-full h-full -z-10"
            />
          )}

        <h1 className={`text-3xl text-center font-bold mt-5 ${dark?"text-gray-300":"text-gray-800"}  mb-6`}>Get In Touch</h1>
                    <p className={`text-center mt-0.5 ${dark?"text-gray-300":"text-gray-800"} `}>Have a project in mind or want to collaborate? I'd love to hear from you</p>
        <div className="min-h-screen flex items-center justify-center p-4  font-sans">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 w-full max-w-auto">
                {/* Left Box: Functional Contact Form */}
                <div className={` ${dark?"bg-gray-900":"bg-white"}  p-8 rounded-lg shadow-xl border border-gray-200`}>
                    
                     <h1 className={` ${dark?"text-white":"text-gray-800"}`}>Send me a message</h1>
                     <p className='text-gray-400 mb-8'>Fill out the form below and I'll get back to you as soon as possible.</p>
                    
                    {alert && (
                        <div className={`p-3 rounded-md mb-4 text-center ${alert.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {alert.message}
                        </div>
                    )}

                    {/* Form Structure */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className={`block  font-semibold  mb-1 ${dark?"text-gray-200":"text-gray-700"}`}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name} // Controlled component
                                onChange={handleChange}
                                required
                                className={`mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 placeholder-gray-500   ${dark?"text-gray-400 bg-gray-900":" text-gray-900 bg-white "}  `}
                                placeholder="Madara Uchiha"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className={`block  font-semibold  mb-1 ${dark?"text-gray-200":"text-gray-700"}`}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email} // Controlled component
                                onChange={handleChange}
                                required
                               className={`mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 placeholder-gray-500   ${dark?"text-gray-400 bg-gray-900":" text-gray-900 bg-white "}  `}
                                placeholder="madara@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className={`block  font-semibold  mb-1 ${dark?"text-gray-200":"text-gray-700"}`}>Subject</label>
                            <input
                                type="tel"
                                id="subject"
                                name="subject"
                                value={formData.subject} // Controlled component
                                onChange={handleChange}
                                required
                                className={`mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 placeholder-gray-500   ${dark?"text-gray-400 bg-gray-900":" text-gray-900 bg-white "}  `}
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className={`block  font-semibold  mb-1 ${dark?"text-gray-200":"text-gray-700"}`}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message} // Controlled component
                                onChange={handleChange}
                                required
                                className={`mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 placeholder-gray-500   ${dark?"text-white bg-gray-900":" text-gray-900 bg-white "}  `}
                                rows="4"
                                placeholder="I'd like to discuss a project opportunity"
                            ></textarea>
                        </div>

                        <button
  type="submit"
  className={`relative w-full py-3 px-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 group overflow-hidden
    ${dark
      ? "bg-gradient-to-r from-gray-200 to-white text-black hover:from-white hover:to-gray-300"
      : "bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-black"}
  `}
>
  <span className="z-10">Send Message</span>
  <IoIosSend
    className={`text-2xl transform transition-transform duration-300 group-hover:translate-x-2 ${
      dark ? "text-black" : "text-white"
    }`}
  />


  <span
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700"
  ></span>
</button>

                    </form>
                </div>

                {/* Right Box: Static Contact Details */}
                <div className={`${dark?"bg-gray-900":"bg-white"}  p-4 rounded-lg shadow-xl border border-gray-200 flex flex-col justify-between`}>
                    <div >
                        <h2 className={` mt-4  ${dark?"text-white":"text-gray-800"} `}>Connect with me</h2>
                        <p className={` text-gray-400 leading-relaxed mb-3`}>
                            You can also reach out to me directly through these channels
                        </p>
                        <div className="mt-12 space-y-7">
  {data.map((item, index) => (
    <div
      key={index}
      className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 cursor-pointer border-2  ${
        dark ? "hover:bg-gray-800 border-white" : "hover:bg-gray-100  border-gray-500"
      }`}
    >
       
      <div className={`text-2xl mr-3 ${dark ? "text-white" : "text-gray-800"}`}>
        {item.icon}
      </div>
      <div>
        <a
          href={item.link}
          target="_blank"
          className={`block font-medium ${
            dark ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-black"
          }`}
        >
          {item.platform}
        </a>
        <p className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>
          {item.value}
        </p>
      </div>
    </div>
  ))}
</div>

                    </div>
                      <div className={`mt-8 ${dark?"text-slate-50":"text-gray-800"}`}>
                        <h1 className=" font-bold">
                            Current Location
                        </h1>
                        <p className='mt-2'>Hyderabad,India.</p>
                      </div>
                    <div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactForm;