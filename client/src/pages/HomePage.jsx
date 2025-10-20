import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { ThemeProvider } from '../components/ThemeContext' 
import Achievements from '../components/Achievements'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <ThemeProvider>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Achievements/>
      <Footer/>
    </ThemeProvider>
  )
}

export default HomePage