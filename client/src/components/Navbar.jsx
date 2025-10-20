import React, { useState } from 'react'
import { useTheme } from './ThemeContext' // adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { dark, toggleTheme } = useTheme()

  // Theme classes
  const navbarBg = dark ? 'bg-black' : 'bg-white'
  const navbarText = dark ? 'text-white' : 'text-black'
  const sidebarBg = dark ? 'bg-black' : 'bg-white'
  const sidebarText = dark ? 'text-white' : 'text-black'

  return (
    <>
  
      <div className={`navbar shadow-sm fixed top-0 left-0 right-0 z-50 ${navbarBg}`}>
        <div className="navbar-start">
          {/* mobile hamburger */}
          <button onClick={() => setIsOpen(true)} className={`btn btn-ghost lg:hidden ${navbarText}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6  ${dark?"hover:text-black":""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a className={` text-xl ${navbarText}`}>Srikar</a>
        </div>

        {/* desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1 ${navbarText}`}>
            <li className={` ${dark?"hover:bg-gray-800":""}`}><a href="/">Home</a></li>
            <li className={` ${dark?"hover:bg-gray-800":""}`}><a href="/about">About</a></li>
            <li className={` ${dark?"hover:bg-gray-800":""}`}><a href="/experience">Experience</a></li>
            <li className={` ${dark?"hover:bg-gray-800":""}`}><a href="/projects">Projects</a></li>
            <li className={` ${dark?"hover:bg-gray-800":""}`} ><a href='/contact'>Contact</a></li>
          </ul>
        </div>

        {/* theme toggle */}
        {/* theme toggle */}
<div className="navbar-end">
  <button
    onClick={toggleTheme}
    className={`btn btn-ghost ${navbarText} ${
      dark ? "hover:text-black" : "hover:text-yellow-500"
    }`}
  >
    {dark ? (
      <svg
        className="swap-on h-7 w-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    ) : (
      <svg
        className="swap-off h-7 w-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>
    )}
  </button>
</div>

      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 shadow-lg transform transition-transform duration-300 z-50 ${sidebarBg} ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className={`flex justify-between items-center p-4 border-b ${sidebarText}`}>
          <h2 className={`text-lg font-bold ${sidebarText}`}>Srikar Acharya</h2>
          <button onClick={() => setIsOpen(false)} className={sidebarText}>✕</button>
        </div>
        <ul className={`p-4 space-y-2 ${sidebarText}`}>
  {[
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ].map((item) => (
    <li key={item.name}>
      <a
        href={item.href}
        onClick={() => setIsOpen(false)}
        className={`block w-full px-4 py-2 rounded-none ${
          dark
            ? "hover:bg-gray-800 hover:text-white"
            : "hover:bg-gray-200 hover:text-black"
        }`}
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>


      </div>

      {/* Overlay */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-40 z-40"></div>
      )}
    </>
  )
}

export default Navbar
