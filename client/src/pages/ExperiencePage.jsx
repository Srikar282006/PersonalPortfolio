import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Experience from '../components/Experience'
import { ThemeProvider } from '../components/ThemeContext'
const ExperiencePage = () => {
  return (
   <>
   <ThemeProvider>
   <Navbar/>
   <div className='pt-20'>
    <Experience/>
    <Footer/>
   </div>
   
   </ThemeProvider>
   </>
  )
}

export default ExperiencePage
