import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DetailProjects from '../components/DetailProjects'
import { ThemeProvider } from '../components/ThemeContext'
const ViewProject = () => {
  return (
   <>
   <ThemeProvider>
   <Navbar/>
   <div className='pt-20'>
    <DetailProjects/>
    <Footer/>
   </div>
   
   </ThemeProvider>
   </>
  )
}

export default ViewProject