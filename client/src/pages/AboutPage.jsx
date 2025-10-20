import React from 'react'
import { ThemeProvider } from '../components/ThemeContext' 
import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
   <>
   <ThemeProvider>
   <Navbar/>
   <div className="pt-20">
     <AboutHero />
     <Footer/>
   </div>
  
   
</ThemeProvider>
   </>
  )
}

export default AboutPage